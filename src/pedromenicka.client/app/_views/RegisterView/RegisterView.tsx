import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import * as React from 'react';

import { RegisterForm } from '@/app/_components/auth/RegisterForm/RegisterForm';
import { AuthRoutes } from '@/app/_routes/routes';
import { Button } from '@/components/ui/button';
import { Logo } from '@/components/ui/logo';

export default function RegisterView() {
  return (
    <main className="min-h-screen flex items-center justify-center md:justify-between">
      <section className="mx-auto h-screen flex flex-col justify-center items-center w-[450px] gap-4">
        <div className="flex flex-col gap-2 items-center my-4">
          <h4 className="text-3xl font-bold leading-none text-center">
            Welcome to MARKDWN
            <span className="text-purple-900">.</span>
          </h4>
          <p className="text-sm text-muted-foreground">Log in to start your markdown journey</p>
        </div>
        <RegisterForm />
        <div className="flex gap-1">
          <p className="text-sm text-muted-foreground ">Already have an account?</p>
          <p className="text-sm text-muted-foreground hover:underline hover:text-blue-700 font-medium">
            <Link href={AuthRoutes.Login}>Sign In</Link>
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
      </section>
      <section className="bg-amber-200 w-5/12 h-screen bg-[url('/pxfuel.jpg')] bg-center flex-col gap-10 text-white hidden md:flex p-8 justify-between">
        <div className="flex gap-4 items-center">
          <Logo fill="#fff" size={36} />
          <h1 className="text-lg">MARKDWN.DEV</h1>
        </div>

        <div className="bg-black/30 backdrop-blur-md p-8 flex flex-col gap-8">
          <h1 className="text-3xl font-bold">Markdown Mastery: The Ultimate Tool</h1>
          <p className="text-md">
            Effortlessly create, edit, and preview Markdown files with MARKDWN. This powerful tool offers real-time
            previews, syntax highlighting, and a variety of export options, ensuring a seamless experience for users.
            Whether you are a writer drafting articles, a developer documenting code, or a note-taker organizing
            thoughts, MARKDWN provides the perfect platform to enhance your productivity and streamline your workflow.
          </p>
        </div>
        <Button variant="ghost" className="flex gap-1 w-32">
          Read more
          <ArrowRight size={14} />
        </Button>
      </section>
    </main>
  );
}
