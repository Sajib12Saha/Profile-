import { EXPERIENCE } from '@/constants/data';
import { cn,preah } from '@/lib/utils';
import Image from 'next/image';

export const Experience = () => {
   

    return (
        <div id="experience" className="py-24 mt-4  relative flex flex-col gap-10">         
                <div  className="relative">
               <h2 className={cn(
                "text-2xl md:text-4xl mb-10 lg:mb-0",
                preah.className
               )}>Work Experience</h2>

                    <div className="flex w-full items-center justify-center relative size-[600px]">
                        <Image
                            src="/icons/gradient.svg"
                            alt="gradient"
                            fill

                        />
                    </div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-xl font-bold">
                    <div className='flex flex-wrap gap-x-4 gap-y-4 items-center justify-center'>
                    {EXPERIENCE.map(({title, desc, img})=> (
                        <div className='bg-transparent backdrop-blur-xl rounded-lg border-2 border-gray-500  p-4 shadow-xl md:w-[400px] w-[320px] h-[120px] md:h-[120px]'>
                            <div className='flex gap-x-2 items-center'>
                            <Image src={img}
                            alt="Image"
                            height={70}
                            width={70}
                            className='md:size-[70px] size-[40px]'
                            />
                            <div className='flex flex-col gap-y-2'>

                            <h3 className="md:text-sm text-xs font-semibold">{title}</h3>
                            <p className="md:text-xs text-[10px] font-medium">{desc}</p>
                            </div>
                            
                            </div>

                        </div>
                    ))}
                    </div>
                   
                    </div>
                </div>
            
        </div>
    );
};
