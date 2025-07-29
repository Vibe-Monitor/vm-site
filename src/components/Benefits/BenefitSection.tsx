"use client"
import { motion, Variants } from "framer-motion"

import BenefitBullet from "./BenefitBullet";
import SectionTitle from "../SectionTitle";
import { IBenefit } from "@/types";

interface Props {
    benefit: IBenefit;
}

const containerVariants: Variants = {
    offscreen: {
        opacity: 0,
        y: 100
    },
    onscreen: {
        opacity: 1,
        y: 0,
        transition: {
            type: "spring",
            bounce: 0.2,
            duration: 0.9,
            delayChildren: 0.2,
            staggerChildren: 0.1,
        }
    }
};

export const childVariants = {
    offscreen: {
        opacity: 0,
        x: -50,
    },
    onscreen: {
        opacity: 1,
        x: 0,
        transition: {
            type: "spring",
            bounce: 0.2,
            duration: 1,
        }
    },
};

const BenefitSection: React.FC<Props> = ({ benefit }: Props) => {
    const { title, description, bullets } = benefit;

    return (
        <section className="benefit-section">
            <motion.div
                className="flex flex-col items-center justify-center max-w-4xl mx-auto px-6 py-8"
                variants={containerVariants}
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true }}
            >
                <div className="w-full text-center">
                    <motion.div
                        className="flex flex-col w-full"
                        variants={childVariants}
                    >
                        <SectionTitle>
                            <h3 className="lg:max-w-2xl mx-auto">
                                {title}
                            </h3>
                        </SectionTitle>

                        <p className="mt-1.5 mx-auto leading-normal text-foreground-accent max-w-2xl">
                            {description}
                        </p>
                    </motion.div>

                    <div className="mx-auto w-full mt-8 grid grid-cols-1 md:grid-cols-3 gap-10">
                        {bullets.map((item, index) => (
                            <BenefitBullet key={index} title={item.title} icon={item.icon} description={item.description} />
                        ))}
                    </div>
                </div>
            </motion.div>
        </section>
    );
}

export default BenefitSection