'use client'
import { useState } from "react"
import Link from "next/link";
import { Button } from "@/components/button";
import { ChevronDown, ChevronUp } from 'lucide-react';

export function Navbar() {
 const [open, setOpen] = useState(false)
 return(
 <section className="mt-4">
  <div className="flex flex-row justify-between">
    <div>
     <h2 className="text-title font-alt text-xl">Canedo</h2>
    </div>

    <div
     onClick={() => setOpen(!open)}
     className="absolute right-8 top-6 cursor-pointer text-3xl md:hidden"
    >
     {open ? <ChevronUp /> : <ChevronDown />}
    </div>

    <div className="w-52 bg-hovernav rounded-xl">
    <ul className="flex flex-row justify-center text-center gap-4">
     <li className="text-white font-semibold cursor-pointer hover:text-primary">
      <Link href="/">Home</Link>
     </li>
     <li className="text-white font-semibold cursor-pointer hover:text-primary">
      <Link href="/blog">Blog</Link>
     </li>
     <li className="text-white font-semibold cursor-pointer hover:text-primary">
      <Link href="/contact">Contact</Link>
     </li>
    </ul>
    </div>

    <div>
    <Button className="bg-emerald-500 hover:bg-emerald-800 font-mono">
     <a href="https://www.linkedin.com/in/rafael-canedo-4abaa8197/" target="_blank">
     Linkedin
     </a>
    </Button>
    </div>
  </div>
 </section>
 )
}