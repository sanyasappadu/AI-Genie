"use client";
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { usePathname } from 'next/navigation';
import { Montserrat} from "next/font/google";
import { cn } from '@/lib/utils';
import { LuLayoutDashboard, LuCode } from "react-icons/lu";
import { SiTheconversation } from "react-icons/si";
import { CiImageOn, CiVideoOn, CiMusicNote1, CiSettings} from "react-icons/ci";

const montserrat = Montserrat({
  weight:"600",
  subsets: ["latin"]
})
const routes = [
  {
    label:"Dashboard",
    icon:<LuLayoutDashboard/ >,
    href:"/dashboard",
    color:"text-sky-500"
  },
  {
    label:"Conversation",
    icon:<SiTheconversation/ >,
    href:"/conversation",
    color:"text-voilet-500"
  },
  {
    label:"Image Generation",
    icon:<CiImageOn/ >,
    href:"/image",
    color:"text-pink-700"
  },
  {
    label:"Video Generation",
    icon:<CiVideoOn/ >,
    href:"/video",
    color:"text-orange-700"
  },
  {
    label:"Music Generation",
    icon:<CiMusicNote1/ >,
    href:"/music",
    color:"text-sky-500"
  },
  {
    label:"Code Generation",
    icon:<LuCode/ >,
    href:"/code",
    color:"text-green-700"
  },
  {
    label:"Settings",
    icon:<CiSettings/ >,
    href:"/settings",
  },

]

function Sidebar() {
  const pathName = usePathname();
  return (
    <div className='space-y-4 py-4 flex flex-col h-full bg-[#111827] text-white'>
      <div className='px-3 py-2 flex-1'>
        <Link href="/dashboard" className='flex items-center pl-3 mb-14 h-8 mr-4'>
          <div className="relative w-8 h-8 mr-2">
            <Image 
              fill
              alt="logo"
              src="/logo.png" // Corrected path with leading slash
            />
          </div>
          <h1 className={cn('text-2xl font-bold', montserrat.className)}>
            Genius
          </h1>
        </Link>
        <div className='space-y-1'>
          {routes.map((route)=>(
            <Link 
            href={route.href}
            key={route.href}
            className={cn("text-sm group flex p-3 w-full justify-start font-medium curcor-pointer hover:text-white hover:bg-white/10 rounded-lg transition",
              pathName === route.href ? "text-white bg-white/10" : "text-zinc-400"
            )}
            >
              <div className='flex items-center '>
              {route.icon}
              <h2 className='ml-5'>{route.label}</h2>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
