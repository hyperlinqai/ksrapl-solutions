import { Navigation } from "@/components/Navigation";
import { FooterCTA } from "@/components/FooterCTA";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { FileText, Download } from "lucide-react";

// Generate reports data dynamically
const years = [2025, 2024, 2023];
const reports = years.map(year => ({
    name: `Annual_reports_31.03.${year}.pdf`,
    path: `/annual-reports/Annual_reports_31.03.${year}.pdf`,
    year: year
}));

const AnnualReturns = () => {
    return (
        <div className="min-h-screen bg-background">
            <Navigation />
            <main className="pt-32 pb-16 px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="container mx-auto max-w-6xl"
                >
                    <h1 className="text-4xl font-bold mb-4 text-foreground">Annual Returns</h1>
                    <p className="text-muted-foreground mb-12 max-w-2xl">
                        Access our annual financial reports and return filings for the past decade.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {reports.map((report, index) => (
                            <motion.div
                                key={report.year}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.4, delay: index * 0.05 }}
                            >
                                <a
                                    href={report.path}
                                    download={report.name}
                                    className="block group h-full"
                                >
                                    <Card className="h-full hover:shadow-lg transition-all duration-300 border-border bg-card hover:-translate-y-1">
                                        <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                                            <div className="w-16 h-16 rounded-2xl bg-primary/5 flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                                                <FileText className="w-8 h-8 text-primary" />
                                            </div>

                                            <div className="space-y-1">
                                                <h3 className="font-semibold text-lg text-foreground group-hover:text-primary transition-colors">
                                                    FY {report.year - 1}-{report.year}
                                                </h3>
                                                <p className="text-xs text-muted-foreground break-all line-clamp-1">
                                                    {report.name}
                                                </p>
                                            </div>

                                            <div className="pt-2 w-full">
                                                <div className="inline-flex items-center gap-2 text-xs font-medium text-primary bg-primary/5 px-3 py-1.5 rounded-full group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                                                    <Download className="w-3.5 h-3.5" />
                                                    Download PDF
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </a>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </main>
            <FooterCTA />
        </div>
    );
};

export default AnnualReturns;
