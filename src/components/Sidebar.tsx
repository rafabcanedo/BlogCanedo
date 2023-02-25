'use client'
import Link from "next/link";
import { LogoIcon } from "./LogoIcon";
import { 
  House, 
  FlyingSaucer, 
  FolderUser, 
  InstagramLogo, 
  TwitchLogo,
  LinkedinLogo,
  GithubLogo
} 
from 'phosphor-react';

export function Sidebar(){
 return(
  <div className="h-screen px-4 pt-8 pb-4 bg-stone-900 flex justify-between flex-col w-80">
    <div className="flex flex-col">
     <div className="flex items-center justify-center relative">
     <div className="flex flex-col items-center pl-1 gap-4">
      <LogoIcon />
      <span className="text-[#43CEA2] font-semibold cursor-pointer">CanedoDev</span>
     </div>
     </div>

     <div className="flex flex-col mt-24 items-center">
      <ul>

      <li className="flex mb-2 justify-start items-center gap-2 px-5">
        <House size={20} className="text-[#43CEA2]" />
       <Link href="/">
         <span className="text-white font-medium hover:text-[#43CEA2]">Home</span>
       </Link>
      </li>

      <li className="flex mb-2 justify-start items-center gap-2 px-5">
       <FlyingSaucer size={20} className="text-[#43CEA2]" />
       <Link href="/blog">
        <span className="text-white font-medium hover:text-[#43CEA2]">Blog</span>
       </Link>
      </li>

      <li className="flex mb-2 justify-start items-center gap-2 px-5">
       <FolderUser size={20} className="text-[#43CEA2]" />
       <Link href="/history">
        <span className="text-white font-medium hover:text-[#43CEA2]">History</span>
       </Link>
      </li>
      </ul>
     </div>
     </div>

     <div className="flex flex-col justify-end items-center gap-4">
      <div className="flex flex-row gap-4">
      <Link href="https://www.instagram.com/canedodev/" target="_blank">
      <InstagramLogo size={20} className="text-[#43CEA2] cursor-pointer" />
      </Link>
      <Link href="https://www.twitch.tv/canedopriv" target="_blank">
      <TwitchLogo size={20} className="text-[#43CEA2] cursor-pointer" />
      </Link>
      <Link href="https://www.linkedin.com/in/rafael-canedo-4abaa8197/" target="_blank">
      <LinkedinLogo size={20} className="text-[#43CEA2] cursor-pointer" />
      </Link>
      <Link href="https://github.com/rafabcanedo" target="_blank">
      <GithubLogo size={20} className="text-[#43CEA2] cursor-pointer" />
      </Link>
      </div>
      <span className="text-[#43C3A2] font-normal text-xs">Development by @canedodev</span>
     </div>

    
  </div>
 );
}