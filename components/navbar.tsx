import React from 'react';
import { Menu } from 'lucide-react';
import { Button } from './ui/button';
import { UserButton } from '@clerk/nextjs';
function Navbar() {
  return (
    <div className='flex items-center p-4'>
      <Button varient="ghost" size="icon" className='md:hidden'>
        <Menu/>
      </Button>
      <div className='flex w-full justify-end'>
        <UserButton/>
      </div>
    </div>
  )
}

export default Navbar