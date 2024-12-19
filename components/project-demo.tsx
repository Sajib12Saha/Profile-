// import { PROJECT } from "@/constants/nav-items"
// import { cn,preah } from "@/lib/utils"
// import Image from 'next/image';

// export const ProjectDemo = () => {
//     return (
//         <div className="flex flex-col gap-y-10">
//             <h1 className={cn(
//                 "text-2xl md:text-4xl  mb-4",
//                 preah.className
//             )}>
//             Project
//             </h1>
//             <div className="flex items-center justify-center w-full">
//             <div className="flex flex-col gap-y-4">
//                 {PROJECT.map(({title, name, desc, img}, index)=> (
//               <div className="flex flex-col gap-y-4" key={index}>
//                 <div className="flex flex-col">
//                 <p className="text-[#9857D3] text-sm">{title}</p>
//                 <h3 className="font-medium">{name}</h3>
//                 </div>
//                 <div className="flex relative w-full max-w-[500px] md:max-w-[720px] items-center">
//   {/* Description Container */}
//   <div className="relative w-full max-w-[390px] h-auto md:max-w-[450px] p-4 rounded-lg border-2 border-gray-700 bg-white/5 backdrop-blur-xl shadow-xl z-10 text-[10px] md:text-xs">
//     {desc}
//   </div>

//   {/* Image */}
//   <div className="absolute -right-36">
//     <Image
//       src={img}
//       alt={title}
//       className="object-cover rounded-lg"
//       layout="intrinsic" // Ensures proper aspect ratio
//       width={400} // Smaller image width for small screens
//       height={400} // Smaller image height for small screens
//       sizes="(max-width: 640px) 150px, 
//              (max-width: 768px) 200px, 
//              (max-width: 1024px) 300px, 
//              300px" // Different sizes for different screen widths
//     />
//   </div>
// </div>

//                    <div>

//               </div>

//             </div> 
//                 ))}

//             </div>
//             </div>
//         </div>
//     )
// }