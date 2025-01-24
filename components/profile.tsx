import Image from 'next/image';
import Link from 'next/link';
import {TypewriterEffectSmooth } from "@/components/ui/typewriter-effect"

export const Profile = () => {
    const words = [
        {
          text: "Hello ! ",
          className:"text-sm md:text-md lg:text-lg text-white font-normal",
        },
        {
            text:"I Am",
        className:"text-sm md:text-md lg:text-lg text-white font-normal"            
        },
        {
                text:"Sajib",
                className:"text-sm md:text-md lg:text-lg text-[#7127BA] font-bold"
        },
        {
                text:"Chandra",
                className:"text-sm md:text-md lg:text-lg font-bold text-[#7127BA]"
        },
        {
          text: "Saha",
          className: "text-[#7127BA] font-bold text-sm md:text-md lg:text-lg",
        },
      ];
    return (
        <div className="flex flex-col gap-y-10">
            {/* Greeting Section */}
            <div className="flex w-full items-center justify-center">
            <TypewriterEffectSmooth words={words}/>
            </div>

            {/* Profile Section */}
            <div className="flex gap-x-4 w-full items-center lg:flex-col lg:gap-y-8">
                <div className="relative w-44 h-32 sm:h-48 md:w-52 md:h-56">
                   
                
                    <Image
                        src="/images/sojib2.png"
                        alt="Sajib"
                        fill
                        className="shadow-md rounded-xl object-cover" 
                    />
                </div>
                <div className="flex flex-col">
                    <p className="text-sm lg:text-md">A Developer who</p>

                    {/* Properly Positioned Ellipse */}
                    <h2 className="flex  text-xl md:text-2xl lg:text-3xl items-center relative">
                        Judges a book by its
                        {/* Wrapper for Image and Ellipse */}
                        <Link href={"https://github.com/Sajib12Saha"}>
                        <div className="relative h-[25px] w-[35px] md:w-[80px] md:h-[40px] flex items-center justify-center">
                            {/* Ellipse */}
                            <div className="absolute md:w-[70px] w-[35px] h-[45px] md:h-[40px] border-2 border-gray-300 rounded-full"></div>
                            {/* GitHub Image */}

                            <Image
                                src={'/icons/github.svg'}
                                alt="github"
                                height={25}
                                width={25}
                                className="relative z-10"
                            />
                        </div>
                        </Link>
                     
                    </h2>
                    <p className="text-xs md:text-sm mt-2">
                        Because if the code does not impress you, what else can?
                    </p>
                </div>
            </div>
        </div>
    );
};
