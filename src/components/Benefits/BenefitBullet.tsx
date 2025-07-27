import { motion } from "framer-motion"

import { IBenefitBullet } from "@/types"
import { childVariants } from "./BenefitSection"

const BenefitBullet: React.FC<IBenefitBullet> = ({ title, description, icon }: IBenefitBullet) => {
    return (
        <motion.div
            className="flex flex-col items-center text-center p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow"
            variants={childVariants}
        >
            <div className="flex justify-center mb-4 text-primary">
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