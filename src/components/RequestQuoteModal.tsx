import { useState } from "react";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

interface RequestQuoteModalProps {
    isOpen: boolean;
    onOpenChange: (open: boolean) => void;
    productName?: string;
}

export const RequestQuoteModal = ({
    isOpen,
    onOpenChange,
    productName,
}: RequestQuoteModalProps) => {
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const formData = new FormData(e.target as HTMLFormElement);
            const data = {
                type: 'quote',
                name: formData.get('name'),
                company: formData.get('company'),
                email: formData.get('email'),
                phone: formData.get('phone'),
                details: formData.get('details'),
                // File upload not supported in this version
            };

            const response = await fetch('/api/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (!response.ok) throw new Error('Failed to send request');

            // Success feedback (using simple alert for now as toast provider isn't explicit in context)
            alert("Quote request sent successfully! We'll get back to you soon.");
            onOpenChange(false);

        } catch (error) {
            console.error('Error sending quote request:', error);
            alert("Failed to send request. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <Dialog open={isOpen} onOpenChange={onOpenChange}>
            <DialogContent className="sm:max-w-[500px]">
                <DialogHeader>
                    <DialogTitle>Request a Quote</DialogTitle>
                    <DialogDescription>
                        Provide your details and requirements below. We'll get back to you with a detailed quote.
                    </DialogDescription>
                </DialogHeader>
                <form onSubmit={handleSubmit} className="space-y-4 py-4">
                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <Label htmlFor="name">Name</Label>
                            <Input name="name" id="name" placeholder="John Doe" required />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="company">Company</Label>
                            <Input name="company" id="company" placeholder="Company Ltd" required />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input name="email" id="email" type="email" placeholder="john@company.com" required />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="phone">Phone (Optional)</Label>
                        <Input name="phone" id="phone" type="tel" placeholder="+1 (555) 000-0000" />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="details">Product Details & Requirements</Label>
                        <Textarea
                            name="details"
                            id="details"
                            placeholder="Describe your requirements, volume, material specs, etc."
                            className="min-h-[100px]"
                            defaultValue={productName ? `Inquiry regarding: ${productName}\n\n` : ""}
                            required
                        />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="file">Attach Drawings (PDF, DXF, PNG)</Label>
                        <Input id="file" type="file" disabled title="File upload coming soon" />
                        <p className="text-xs text-muted-foreground">File upload temporarily unavailable. Please email drawings directly if needed.</p>
                    </div>
                    <DialogFooter>
                        <Button type="button" variant="outline" onClick={() => onOpenChange(false)}>
                            Cancel
                        </Button>
                        <Button type="submit" disabled={isSubmitting}>
                            {isSubmitting ? "Sending..." : "Submit Request"}
                        </Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    );
};
