import { motion } from "framer-motion"

import { IBenefitBullet } from "@/types"

interface BenefitBulletProps extends IBenefitBullet {
    index: number;
}

const BenefitBullet: React.FC<BenefitBulletProps> = ({ title, description, icon, index }) => {
    return (
        <motion.div
            className="flex flex-col items-center text-center p-6 border border-gray-200 rounded-lg"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6 + (index * 0.2) }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
        >
            <div className="flex justify-center mb-4 text-primary" aria-hidden="true">
                {icon}
            </div>
            <div>
                <h4 className="text-lg font-semibold mb-2">
                    {title}
                </h4>
                <p className="text-base text-foreground-accent">
                    {description}
                </p>
            </div>
        </motion.div>
    )
}

export default BenefitBullet