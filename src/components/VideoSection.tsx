import { motion } from "framer-motion";

export const VideoSection = () => {
    return (
        <section className="py-24 bg-muted/30">
            <div className="container mx-auto px-6 max-w-6xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
                        Company Presentation
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
                        See Nuvoautotech in Action
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                        A glimpse into our world-class manufacturing facility and the team that drives our success.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="relative rounded-3xl overflow-hidden shadow-2xl border border-border bg-black"
                >
                    <div style={{ padding: '56.25% 0 0 0', position: 'relative' }}>
                        <iframe
                            src="https://player.vimeo.com/video/1154592836?badge=0&autopause=0&player_id=0&app_id=58479"
                            frameBorder="0"
                            allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                            title="kspr-hero"
                        ></iframe>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
