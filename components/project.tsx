import Image from "next/image";
import React from "react";
import { Timeline } from "@/components/ui/timeline";
import { PROJECT } from "@/constants/data";
export const Project = () => {
  return (
    <div className="w-full">
      <Timeline
        data={PROJECT.map((project, index) => ({
          title: project.title,
          content: (
            <div key={index}>
              <Image
                src={project.img}
                alt={project.name}
                width={500}
                height={500}
                className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
              />
              <p className="text-neutral-200 text-md  md:text-lg font-bold mt-6">
                {project.name}
              </p>
              <p className="text-neutral-300 text-sm md:text-md mt-2">
                {project.desc}
              </p>
            </div>
          ),
        }))}
      />
    </div>
  );
}
