'use client'
import { useState } from "react"
import { ChevronDown, ChevronUp } from 'lucide-react';
import Link from "next/link";

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

    <button className="px-4 py-2 bg-emerald-500">Linkedin</button>
  </div>
 </section>
 )
}