import Image from 'next/image';
import Link from 'next/link';
import * as React from 'react';

import { LoginForm } from '@/app/_components/auth/LoginForm/LoginForm';
import { AuthRoutes } from '@/app/_routes/routes';
import { Button } from '@/components/ui/button';
import { Logo } from '@/components/ui/logo';

export default function LoginView() {
  return (
    <main className="min-h-screen flex items-center justify-center">
      <div className="flex flex-col md:w-[450px] w-8/12 gap-4 items-center">
        <Logo size={120} />
        <div className="flex flex-col gap-2 items-center my-4">
          <h4 className="text-3xl font-bold leading-none text-center">
            Welcome to MARKDWN
            <span className="text-purple-900">.</span>
          </h4>
          <p className="text-sm text-muted-foreground">Log in to start your markdown journey</p>
        </div>
        <LoginForm />
        <div className="flex gap-1">
          <p className="text-sm text-muted-foreground ">Dont have an account yet?</p>
          <p className="text-sm text-muted-foreground hover:underline hover:text-blue-700 font-medium">
            <Link href={AuthRoutes.Register}>Sign Up</Link>
          </p>
        </div>
        <div className="relative w-full">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-white px-2 text-gray-500">Or continue with</span>
          </div>
        </div>
        <Button variant="outline" className="w-full flex gap-2">
          <Image src="/google.svg" alt="google logo" width={16} height={16} />
          Google
        </Button>
      </div>
    </main>
  );
}
