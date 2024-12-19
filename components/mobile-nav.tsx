import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
import { NAVITEMS } from "@/constants/data"
import { Menu } from "lucide-react"
import Link from "next/link"

export const MobileNav = () => {
    return (
        <div className="flex lg:hidden items-center p-0 flex-1">
    <Sheet>
    <SheetTrigger>
        <Menu/>
    </SheetTrigger>
    <SheetContent className="bg-[#11071F] border-none py-10 w-[250px]" side={'left'} >
        
        <div className="flex flex-col gap-y-10">
        {NAVITEMS.map(({name, link, Icon})=> (
            <Link href={link} className="bg-">
                <div className="flex gap-x-8 items-center">
                    {Icon}
                <h2>{name}</h2>
                </div>
              
            </Link>
        ))}

        </div>
   
    </SheetContent>
    </Sheet>
        </div>
    )
}
