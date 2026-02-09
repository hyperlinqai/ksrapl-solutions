import { useState } from "react";
import { motion } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { FooterCTA } from "@/components/FooterCTA";

const Careers = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [fileError, setFileError] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    role: "",
    message: "",
    file: null as { name: string; content: string } | null,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFileError("");
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];

      // Check file size (limit to 4MB for Vercel serverless function safety)
      if (file.size > 4 * 1024 * 1024) {
        setFileError("File size exceeds 4MB. Please upload a smaller file.");
        return;
      }

      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = (reader.result as string).split(',')[1]; // Remove data URL prefix
        setFormData(prev => ({
          ...prev,
          file: {
            name: file.name,
            content: base64String
          }
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (fileError) return;

    setIsSubmitting(true);

    try {
      const payload = {
        type: 'career',
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        role: formData.role,
        message: formData.message,
        attachments: formData.file ? [{
          filename: formData.file.name,
          content: formData.file.content
        }] : []
      };

      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) throw new Error('Failed to send application');

      alert("Application submitted successfully! Good luck.");
      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        role: "",
        message: "",
        file: null
      });

    } catch (error) {
      console.error('Error submitting application:', error);
      alert("Failed to submit application. Please try again or email us directly.");
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-32 md:pt-36 px-6 pb-16">
        <section className="container mx-auto max-w-6xl mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold">
              Careers
            </div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight text-foreground">
              Build with the team that ships for OEMs across the country
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl">
              If you care about process discipline, quality, and delivery excellence, we’d love to hear from you.
            </p>
          </motion.div>
        </section>

        <section className="container mx-auto max-w-3xl">
          <div className="rounded-2xl border border-border bg-card p-6 md:p-8 shadow-sm space-y-5">
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground">Share your resume</h2>
            <p className="text-sm text-muted-foreground">
              Upload your CV and a short note. We’ll get back with a fitment assessment and next steps.
            </p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex flex-col gap-2">
                  <label className="text-sm text-muted-foreground">Name</label>
                  <input
                    name="name"
                    type="text"
                    required
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full rounded-lg border border-border bg-background px-3 py-2 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/60"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm text-muted-foreground">Email</label>
                  <input
                    name="email"
                    type="email"
                    required
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full rounded-lg border border-border bg-background px-3 py-2 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/60"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm text-muted-foreground">Phone</label>
                <input
                  name="phone"
                  type="tel"
                  required
                  placeholder="+91-XXXX-XXX-XXX"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full rounded-lg border border-border bg-background px-3 py-2 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/60"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm text-muted-foreground">Role of interest</label>
                <input
                  name="role"
                  type="text"
                  required
                  placeholder="e.g., Production Engineer"
                  value={formData.role}
                  onChange={handleInputChange}
                  className="w-full rounded-lg border border-border bg-background px-3 py-2 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/60"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm text-muted-foreground">Message</label>
                <textarea
                  name="message"
                  rows={4}
                  required
                  placeholder="Tell us about your experience and notice period"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full rounded-lg border border-border bg-background px-3 py-2 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/60 resize-none"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm text-muted-foreground">Upload Resume (PDF, Max 4MB)</label>
                <input
                  type="file"
                  accept=".pdf"
                  onChange={handleFileChange}
                  className="w-full rounded-lg border border-border bg-background px-3 py-2 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/60 file:mr-3 file:rounded-md file:border-0 file:bg-primary file:text-primary-foreground file:px-3 file:py-2 file:cursor-pointer"
                />
                {fileError && <p className="text-red-500 text-xs">{fileError}</p>}
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full rounded-lg bg-primary text-primary-foreground py-3 font-semibold hover:bg-primary/90 transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Sending Application..." : "Submit Application"}
              </button>
              <p className="text-xs text-muted-foreground">
                By submitting, you agree to be contacted for current or future opportunities.
              </p>
            </form>
          </div>
        </section>
      </main>
      <FooterCTA />
    </div>
  );
};

export default Careers;


