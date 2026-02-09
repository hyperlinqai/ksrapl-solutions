import { Navigation } from "@/components/Navigation";
import { FooterCTA } from "@/components/FooterCTA";
import { motion } from "framer-motion";

const Privacy = () => {
    return (
        <div className="min-h-screen bg-background">
            <Navigation />
            <main className="pt-32 pb-16 px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="container mx-auto max-w-4xl"
                >
                    <h1 className="text-4xl font-bold mb-8 text-foreground">Privacy Policy</h1>
                    <p className="text-muted-foreground mb-8">Last updated: {new Date().toLocaleDateString()}</p>

                    <div className="prose prose-slate dark:prose-invert max-w-none space-y-8 text-foreground/90">
                        <section>
                            <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
                            <p>
                                NUVO Auto Technologies Pvt Ltd ("we," "our," or "us") respects your privacy and is committed to protecting it through our compliance with this policy. This policy describes the types of information we may collect from you or that you may provide when you visit the website nuvoautotech.com (our "Website") and our practices for collecting, using, maintaining, protecting, and disclosing that information.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-4">2. Information We Collect</h2>
                            <p>We collect several types of information from and about users of our Website, including information:</p>
                            <ul className="list-disc pl-6 mt-2 space-y-2">
                                <li>By which you may be personally identified, such as name, postal address, e-mail address, telephone number, or company name ("personal information").</li>
                                <li>About your internet connection, the equipment you use to access our Website, and usage details.</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-4">3. How We Use Your Information</h2>
                            <p>We use information that we collect about you or that you provide to us, including any personal information:</p>
                            <ul className="list-disc pl-6 mt-2 space-y-2">
                                <li>To present our Website and its contents to you.</li>
                                <li>To provide you with information, products, or services that you request from us.</li>
                                <li>To fulfill any other purpose for which you provide it (e.g., providing quotes).</li>
                                <li>To notify you about changes to our Website or any products or services we offer or provide though it.</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-4">4. Data Security</h2>
                            <p>
                                We have implemented measures designed to secure your personal information from accidental loss and from unauthorized access, use, alteration, and disclosure. Unfortunately, the transmission of information via the internet is not completely secure. Although we do our best to protect your personal information, we cannot guarantee the security of your personal information transmitted to our Website.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-4">5. Contact Information</h2>
                            <p>
                                To ask questions or comment about this privacy policy and our privacy practices, contact us at: <a href="mailto:dhruv@nuvoautotech.com" className="text-primary hover:underline">dhruv@nuvoautotech.com</a>.
                            </p>
                        </section>
                    </div>
                </motion.div>
            </main>
            <FooterCTA />
        </div>
    );
};

export default Privacy;
