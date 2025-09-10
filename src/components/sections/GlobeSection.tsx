import React from "react";
import { motion } from "framer-motion";
import CustomTitle from "../_Customs2024/text/CustomTitle";
import CustomParagraph from "../_Customs2024/text/CustomParagraph";
import { GlobeDemo } from "../_Customs2024/GlobeGithubNew";
import AuroraBG from "@/lib/AuroraBG";

interface CareerPathProps {
    title: string;
    description: string;
    ctaText: string;
    ctaLink: string;
    careers: { title: string; description: string; icon?: React.ReactNode }[];
}

const GlobeSection: React.FC<Pick<CareerPathProps, "title" | "description">> = ({
    title,
    description,
}) => {
    return (
        <section className="relative bg-gray-900 py-8 sm:py-12 lg:py-16 overflow-hidden">
            <AuroraBG />

            <div className="relative z-10 max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 lg:items-center gap-y-10 lg:gap-x-16">
                    <div className="mx-auto max-w-xl text-center lg:text-left">
                        <CustomTitle>{title}</CustomTitle>
                        <CustomParagraph className="mt-4 text-gray-300">{description}</CustomParagraph>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="flex justify-center lg:justify-end"
                    >
                        <div className="relative isolate w-full max-w-[520px] aspect-square">
                            <GlobeDemo variant="embed" className="h-full" />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default GlobeSection;
