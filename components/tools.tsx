import Image from 'next/image';
export const Tools = () => {
    return (
        <div className="flex flex-col gap-y-4">
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

        
        </div>
    )
}