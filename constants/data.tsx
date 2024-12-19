import {Home,  CircleUser, FolderGit, FlaskConical } from 'lucide-react';


export const NAVITEMS= [
    {
        name:"Home",
        link:"#home",
        Icon: <Home className='text-md transition-transform transform group-hover:scale-110 group-hover:text-purple-300 group-hover:shadow-lg group-hover:tracking-wider duration-300 ease-in-out'/>
    },
    {
        name:"Experience",
        link:"#experience",
        Icon: <FlaskConical className='text-md transition-transform transform group-hover:scale-110 group-hover:text-purple-300 group-hover:shadow-lg group-hover:tracking-wider duration-300 ease-in-out'  />
    },
    {
        name:"Project",
        link:"#project",
        Icon: <FolderGit className='text-md transition-transform transform group-hover:scale-110 group-hover:text-purple-300 group-hover:shadow-lg group-hover:tracking-wider duration-300 ease-in-out'  />
    },
 
    {
        name:"Contact",
        link:"#contact",
        Icon: < CircleUser className='text-md transition-transform transform group-hover:scale-110 group-hover:text-purple-300 group-hover:shadow-lg group-hover:tracking-wider duration-300 ease-in-out'  />
    },
    
]

export const EXPERIENCE = [
    {
        title:"Loom Sass Project",
        desc:"I will devlop loom sass project using next js react js node js ",
        img:"/experience/buter.svg",
        
    },
    {
        title:"Chat Application Project",
        desc:"I will devlop chat application project using next js react js node js ",
        img:"/experience/cup.svg",
        
    },
    {
        title:"AI generate description Project",
        desc:"I will devlop ai generate description project using open ai ",
        img:"/experience/light.svg",
        
    },
    {
        title:"Admin Dashboard E-commarce Project",
        desc:"I will devlop e-commarce project using next js react js node js ",
        img:"/experience/rank.svg",
        
    },
]

export const PROJECT=[
        {
            title:"Featured",
            name:"SaaS Dashboard for Team Collaboration",
            desc:"A feature-rich SaaS dashboard designed for team collaboration and task management. This platform includes user authentication, real-time notifications, data visualizations, and role-based access control. Built using Next.js for seamless server-side rendering and API integration. Demonstrates expertise in scalable, dynamic applications and user-centric design", 
            img:"/project/web1.jpg"
        },
        {
            title:"Featured",
            name:"AI-Powered E-Commerce Platform",
            desc:"An AI-driven e-commerce website that recommends products based on user behavior. This project integrates payment gateways, dynamic product filtering, and a personalized shopping experience. Powered by Next.js for optimal performance and React for interactive UI components. Perfect for showcasing your ability to combine AI tools with modern web technologies.", 
            img:"/project/web2.png"
        },
        {
            title:"Featured",
            name:"Personalized Blogging Platform",
            desc:"A responsive and SEO-friendly blogging platform with Markdown support, social media integration, and a CMS-like admin panel for managing posts. Built with Next.js for fast performance and static site generation. This project highlights your skills in content management and creating user-friendly editorial experiences.", 
            img:"/project/web3.png"
        },     {
            title:"Featured",
            name:"Event Booking and Ticketing App",
            desc:"A dynamic web application for event discovery and ticket booking. Features include a searchable event catalog, user reviews, ticket purchase flow, and real-time availability updates. Built using Next.js to leverage both server-side rendering and static generation for optimal user experience. Demonstrates expertise in developing interactive, business-oriented solutions.", 
            img:"/project/web4.png"
        },
    ]


export const SOCIAL_MEDIA=[
        {img:"/icons/fiverr-icon.svg", link:"https://www.fiverr.com/users/sajibsaha114",},
        {img:"/icons/github.svg", link:"https://github.com/Sajib12Saha",},
        {img:"/icons/linkedin.svg", link:"https://www.linkedin.com/in/sojib-saha-59457323a",},
        {img:"/icons/facebook.svg", link:"https://www.facebook.com/sojib.saha.942145",},
    ]