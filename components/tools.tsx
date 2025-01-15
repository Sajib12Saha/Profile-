'use client'
import Image from 'next/image';
import { motion } from 'framer-motion';
export const Tools = () => {
    return (
        <motion.div className="flex flex-col gap-y-4"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }} // Triggers animation when 50% of the div is in view
        transition={{ duration: 0.8 }}
        >
            <div className="flex flex-col w-full justify-center items-center">
            <h2 className="text-md">I'm currently looking to join a <span className="text-[#A362FF]">cross-functional</span> team
            </h2>
                     
            <p className="text-sm">
            that values improving people's lives through accessible devlopment 
            </p>
            </div>
            <div className="relative size-[500px] flex items-center justify-center w-full">
                <Image
                src={"/icons/skills.svg"}
                alt=""
                fill/>
            </div>

        
        </motion.div>
    )
}