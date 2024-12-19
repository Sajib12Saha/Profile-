import { cn, preah } from "@/lib/utils"
import { GlobeDemo } from "./ui/globe-demo"
import { SocialMedia } from "./social-media"

export const Contact = () => {
    return (
        <div className="py-20" id={"contact"}>
            <h2 className={cn(
                "text-2xl md:text-4xl mb-10",
                preah.className
            )}>Contact</h2>
           
        <GlobeDemo/>
        <SocialMedia/>

       
        </div>
    )
}