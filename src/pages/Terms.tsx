import { Navigation } from "@/components/Navigation";
import { FooterCTA } from "@/components/FooterCTA";
import { motion } from "framer-motion";

const Terms = () => {
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
                    <h1 className="text-4xl font-bold mb-8 text-foreground">Terms of Service</h1>
                    <p className="text-muted-foreground mb-8">Last updated: {new Date().toLocaleDateString()}</p>

                    <div className="prose prose-slate dark:prose-invert max-w-none space-y-8 text-foreground/90">
                        <section>
                            <h2 className="text-2xl font-semibold mb-4">1. Acceptance of the Terms of Use</h2>
                            <p>
                                These terms of use are entered into by and between You and NUVO Auto Technologies Pvt Ltd ("Company," "we," or "us"). The following terms and conditions govern your access to and use of nuvoautotech.com, including any content, functionality, and services offered on or through nuvoautotech.com (the "Website").
                            </p>
                            <p className="mt-4">
                                By using the Website, you accept and agree to be bound and abide by these Terms of Use and our Privacy Policy.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-4">2. Intellectual Property Rights</h2>
                            <p>
                                The Website and its entire contents, features, and functionality (including but not limited to all information, software, text, displays, images, video, and audio, and the design, selection, and arrangement thereof) are owned by the Company, its licensors, or other providers of such material and are protected by copyright, trademark, and other intellectual property or proprietary rights laws.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-4">3. Prohibited Uses</h2>
                            <p>You may use the Website only for lawful purposes and in accordance with these Terms of Use. You agree not to use the Website:</p>
                            <ul className="list-disc pl-6 mt-2 space-y-2">
                                <li>In any way that violates any applicable federal, state, local, or international law or regulation.</li>
                                <li>To transmit, or procure the sending of, any advertising or promotional material without our prior written consent.</li>
                                <li>To engage in any other conduct that restricts or inhibits anyone's use or enjoyment of the Website.</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-4">4. Limitation of Liability</h2>
                            <p>
                                In no event will the Company, its affiliates, or their licensors, service providers, employees, agents, officers, or directors be liable for damages of any kind, under any legal theory, arising out of or in connection with your use, or inability to use, the Website, any websites linked to it, any content on the Website or such other websites, including any direct, indirect, special, incidental, consequential, or punitive damages.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-4">5. Governing Law</h2>
                            <p>
                                All matters relating to the Website and these Terms of Use, and any dispute or claim arising therefrom or related thereto, shall be governed by and construed in accordance with the laws of India.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-4">6. Contact Information</h2>
                            <p>
                                This website is operated by NUVO Auto Technologies Pvt Ltd. All feedback, comments, requests for technical support, and other communications relating to the Website should be directed to: <a href="mailto:dhruv@nuvoautotech.com" className="text-primary hover:underline">dhruv@nuvoautotech.com</a>.
                            </p>
                        </section>
                    </div>
                </motion.div>
            </main>
            <FooterCTA />
        </div>
    );
};

export default Terms;
