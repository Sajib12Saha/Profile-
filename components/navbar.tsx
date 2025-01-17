

import { NAVITEMS } from "@/constants/data";
import Link from "next/link";
import { MobileNav } from "./mobile-nav";
import Image from 'next/image';

import { cn } from "@/lib/utils";

export const Navbar = () => {

    return (
        <div className="h-20 w-full flex items-center sticky top-0 z-50" style={{
            backgroundImage: "url('/images/background.png')",
            backgroundRepeat: "no-repeat",
        }}>
            <div className="flex justify-between w-full items-center px-10">
                <MobileNav />

                <div className="flex items-center relative h-[100px] w-[100px] md:h-[130px] md:w-[200px]">
                    <Image
                        src={'/images/s.png'}
                        alt={"logo"}
                        fill
                    />
                </div>

                <div className="lg:flex gap-x-10 items-center hidden">
                    {NAVITEMS.map(({ name, link, Icon }) => (
                        <Link 
                            key={name} 
                            href={link} 
                            className={cn(
                                "flex gap-x-2 items-center group",
                            
                            )}
                        >
                            <h2 className={cn(
                                "text-md transition-transform transform group-hover:scale-110 group-hover:text-purple-300 group-hover:shadow-lg group-hover:tracking-wider duration-300 ease-in-out"
                            )}>
                                {name} 
                            </h2>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};
