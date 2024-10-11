"use client"; // Marks this component as a client component

import React from 'react';
import Link from 'next/link'; // Correct import of Link
import { Button } from '@/components/ui/button';
function LandingPage() {
  return (
    <div>
      <h1>Landing Page</h1>
      <Link href="/sign-in">
        <Button>Login</Button>
      </Link>
      <Link href="/sign-up">
        <Button>Register</Button>
      </Link>
    </div>
  );
}

export default LandingPage;
