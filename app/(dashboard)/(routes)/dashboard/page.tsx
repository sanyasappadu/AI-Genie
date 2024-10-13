"use client"
import React from 'react'
import { useRouter } from 'next/navigation'

import {Card } from "@/components/ui/card"
import { ArrowRight, Code, Image, MessageSquare, Music, Video } from 'lucide-react'

import { cn } from '@/lib/utils'

const tools= [
  {
    lable: "Conversation",
    icon: MessageSquare,
    color: "text-violet-500",
    bgColor: "bg-violet-500/10",
    href:"/conversation"
  },
  {
    lable: "Music Generation",
    icon: Music,
    color: "text-emerald-500",
    bgColor: "bg-emerald-500/10",
    href:"/music"
  },{
    lable: "Image Generation",
    icon: Image,
    color: "text-pink-700",
    bgColor: "bg-pink-700/10",
    href:"/image"
  },{
    lable: "Viode Generation",
    icon: Video,
    color: "text-orange-700",
    bgColor: "bg-orange-700/10",
    href:"/video"
  },{
    lable: "Code Generation",
    icon: Code,
    color: "text-orange-700",
    bgColor: "bg-orange-700/10",
    href:"/code"
  },
  {
    lable: "Conversation",
    icon: MessageSquare,
    color: "text-violet-500",
    bgColor: "bg-violet-500/10",
    href:"/conversation"
  }
]

function DashboardPage() {
  const router = useRouter();
  return (
    <div >
      <div className='mb-8 space-y-4'>
        <h2 className='text-2xl md:text-4xl font-bold text-center'>
          Explore the power of AI
        </h2>
        <p className='text-muted-foreground font-light text-sm md:text-lg text-center'>
          Chat with the smartest AI- Expetience the power of AI
        </p>
      </div>
      <div>

        {tools.map((tool)=>(
          <Card 
          key={tool.href} 
          onClick={()=> router.push(tool.href)} 
          className='p-4 border-black/5 flex items-center justify-between hover:shadow-md transition cursor-pointer'>
          <div className='flex items-center gap-x-4'>
            <div className={cn("p-2 w-fit rounded-md ", tool.bgColor)}>
              <tool.icon className={cn("w-8 h-8 ", tool.color)}/>
            </div>
            <div className='font-semibold'>{tool.lable}</div>
          </div>
          <ArrowRight className='e-5 h-5'/>
        </Card>
        
        ))}
      </div>
    </div>
  )
}
export default DashboardPage



// import {
//   SignInButton,
//   SignedIn,
//   SignedOut,
//   UserButton
// } from '@clerk/nextjs'
// function DashboardPage() {
//   return (
//     <div><h1>dashboard</h1>
//     <SignedOut>
//             <SignInButton />
//           </SignedOut>
//           <SignedIn>
//             <UserButton />
//           </SignedIn></div>
//   )
// }

// export default DashboardPage