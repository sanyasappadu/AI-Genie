"use client"
import React, { useEffect, useState } from 'react'
import { LuMenuSquare } from "react-icons/lu";
import { Button } from './ui/button';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import Sidebar from './sidebar';

function MobileSidebar() {
  const [isMounted, setIsMounted ] = useState(false);

  useEffect(()=>{
    setIsMounted(true);
  }, [])
  if(!isMounted){
    return null;
  }
  return (
    <div>
      <Sheet>
  <SheetTrigger>
  <Button size="icon" className='md:hidden'>
        <LuMenuSquare/>
      </Button>
  </SheetTrigger>
  <SheetContent side="left" className='p-0'>
    <Sidebar/>
  </SheetContent>
</Sheet>

    </div>
  )
}

export default MobileSidebar