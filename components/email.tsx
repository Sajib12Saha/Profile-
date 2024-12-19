import {EmailInfo} from '@/components/email-info';
import Image from 'next/image';
export const Email = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-12 md:gap-x-4 gap-y-4  items-center">
            <div className="md:col-span-7">
            <EmailInfo/>

            </div>
            <div className="md:col-span-5 px-2">
            <div className='relative w-full h-[370px] md:h-[450px]'>
                <Image
                src={'/images/sojib-frame.png'}
                alt={'Sojib'}
                fill
                className="object-cover"
                />

            </div>

            </div>
            
        </div>
    )
}