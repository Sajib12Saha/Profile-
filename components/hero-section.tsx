import Image from 'next/image';
import {cn, preah} from '@/lib/utils';
import { Profile } from './profile';
import Link from 'next/link';
export const HeroSection = () => {
    return (
        <div id="#home" className={cn(
            "grid grid-cols-1 lg:grid-cols-12 relative z-20 py-10 gap-y-20 items-center",
            preah.className
           
                
            )}>
         
     
            <div className="lg:col-span-5 lg:py-20 lg:px-5">
                <Profile/>
            </div>
            <div className="lg:col-span-7 relative z-10 items-center flex justify-center">      
            <Image
            src={'/images/sojib1.png'}
            alt="Sojib"
            objectFit="contain"
            quality={100}
            height={550}
            width={550}
            priority
            className={"absolute  z-[-1] opacity-15 hidden lg:block"}
            />
            <div className="flex flex-col gap-y-10 lg:py-20">
                <div className="flex flex-col gap-y-2 justify-center w-full">
                    <h1 className='text-2xl md:text-3xl lg:text-4xl'>I'm a Web developer.</h1>
                    <span className='inline-flex gap-x-2 items-center'>
                    <p className='text-sm md:text-md'>Currently, I am a web developer as a freelancer
              
                    </p>
                    <Link href={"https://www.fiverr.com/users/sajibsaha114"}>
                    <Image src={'/icons/fiverr-icon.svg'}
                    alt="fiverIcon"
                    width={20}
                    height={20}
                    className='ml-1 align-middle'

                   />
                   </Link>
                    </span>
             

                </div>
                <p className='tracking-widest leading-10 lg:leading-[60px] text-wrap md:text-md lg:text-lg text-sm'>As a <b className='text-[#7127BA]'>Next.js Developer</b>, I bring hands-on experience in building dynamic and scalable web applications using <b className='text-[#7127BA]'>
                JavaScript </b>,<b className='text-[#7127BA]'>
                React.js</b> and <b className='text-[#7127BA]'>Node.js
                    </b> . My expertise spans developing <b className='text-[#7127BA]'> 
                    SaaS projects</b>, implementing robust <b className='text-[#7127BA]'>Data Structures</b> and <b className='text-[#7127BA]'>Algorithms</b> (DSA) for optimized performance, and integrating <b className="text-[#7127BA]">AI tools</b> to streamline workflows and enhance functionality. I specialize in delivering efficient, user-centric digital products that meet both technical and business objectives, ensuring seamless performance and innovation at every step</p>
                

            </div>

            </div>
            
        </div>
    )
}
