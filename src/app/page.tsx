"use client"
import Title from '@/components/Title'
import Image from 'next/image'
import Link from 'next/link';

import { InstagramLogo, LinkedinLogo, GithubLogo, TwitterLogo } from 'phosphor-react';

export default function Home() {
  return (
   <section className="flex flex-col justify-center text-center pt-6">
   <div>
    <h3 className="text-3xl font-semibold">Heey! WaSup?</h3>
    <h2 className="text-2xl font-semibold">I'm Rafael Canedo</h2>
    <div className="flex flex-col mt-4">
    <span>Software Developer at ...</span>
    <span>Focus in <span className="text-[#43CEA2]">Web</span> <span className="underline decoration-[#43CEA2]">development</span> & <span className="text-[#43CEA2]">Mobile</span> <span className="underline decoration-[#43CEA2]">development</span> </span>
    </div>
   </div>

   <div className="flex flex-row justify-center text-center gap-12 mt-8">
    <h3 className="text-white hover:text-[#43CEA2] cursor-pointer">
     <a href="https://www.instagram.com/canedodev/" target="_blank">Instagram</a>
    </h3>
    <h3 className="text-white hover:text-[#43CEA2] cursor-pointer">
     <a href="https://canedo.dev/" target="_blank">Portfólio</a>
    </h3>
   </div>

   <div className="mt-12">
    <Title title="About Me" />
    <span>
     When I was child, I met games in computer, then my dream was born in that world. My first contact was playing Tibia <br />
     With my cousin and my brother.
     After many years, I started to play <a href="https://br.crossfire.z8games.com/" target="_blank" className="text-white hover:text-[#43CEA2] cursor-pointer">CrossFire</a>
     which I played for most of my life in my life.<br />
     In 2009, I know <a href="https://www.callofduty.com/br/pt/" target="_blank" className="text-white hover:text-[#43CEA2] cursor-pointer">Call Of Duty</a>
     (Modern Warfare 2) for Xbox360.
    </span>
    <span>
      
    </span>
   </div>

   <div className="flex justify-center">
   <div className="flex flex-row mt-16 p-16 w-1/2 justify-between items-center">

   <Link href="https://www.instagram.com/canedodev/" target="_blank">
    <InstagramLogo size={32} weight="light" className="text-zinc-500 hover:text-zinc-700 cursor-pointer" />
   </Link>

   <Link href="https://www.linkedin.com/in/rafael-canedo-4abaa8197/" target="_blank">
    <LinkedinLogo size={32} weight="light" className="text-zinc-500 hover:text-zinc-700 cursor-pointer" />
   </Link>

   <Link href="https://github.com/rafabcanedo" target="_blank">
   <GithubLogo size={32} weight="light" className="text-zinc-500 hover:text-zinc-700 cursor-pointer" />
   </Link>

   <Link href="https://twitter.com/canedopriv" target="_blank">
    <TwitterLogo size={32} weight="light" className="text-zinc-500 hover:text-zinc-700 cursor-pointer" />
   </Link>
   
   </div>
   </div>
   </section>
  )
}
