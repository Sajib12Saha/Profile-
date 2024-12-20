import { Link as Icon } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image'
import {SOCIAL_MEDIA} from '@/constants/data';
export const SocialMedia = () => {
    return (
        <div className="mt-4 space-y-10">
        <div className=" flex items-center justify-center w-full">
            <p className="text-xs md:text-sm text-neutral-300 flex gap-x-2 items-center">Also Connect <span><Icon className="size-3 md:size-4"/></span></p>
            
        </div>
        <div className="flex items-center justify-center w-full gap-x-8">
        {SOCIAL_MEDIA.map(({link, img})=> (
            <Link href={link} className="flex items-center justify-center rounded-full size-5 md:size-8 lg:size-12 relative">
                <Image
                src={img}
                alt={'social_media'}
                fill
                />
            </Link>
        ))}
        </div>
        </div>
        
    )
}