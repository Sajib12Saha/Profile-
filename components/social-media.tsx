'use client';
import { Link as Icon } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image'
import {SOCIAL_MEDIA} from '@/constants/data';
import {motion} from 'framer-motion'
export const SocialMedia = () => {
    return (
        <div className="mt-4 space-y-10">
        <div className=" flex items-center justify-center w-full">
            <p className="text-xs md:text-sm text-neutral-300 flex gap-x-2 items-center">Also Connect <span><Icon className="size-3 md:size-4"/></span></p>   
        </div>
        

        <div className="flex items-center justify-center w-full gap-x-8">
        {SOCIAL_MEDIA.map(({link, img}, index)=> (
            <motion.div
            key={index}
            initial={{ y: 0 }}
            animate={{ y: [0, -10, 0] }}
            transition={{
              duration: 3,
              ease: "easeInOut",
              repeat: Infinity,
            }}
          >
            <Link href={link} className="flex items-center justify-center rounded-full size-12 md:size-20 lg:size-32 relative">
                <Image
                src={img}
                alt={'social_media'}
                fill
                />
            </Link>
             </motion.div>
        ))}
        </div>
        </div>
        
    )
}