'use client'
import { useState } from 'react';
import { Socials } from '@/components/Socials';
import { Button } from '@/components/button';
import { Linkedin, Instagram, Github, Code, SendHorizonal } from 'lucide-react';
import { Title } from '@/components/Title';

export default function Contact() {

 const [isLoading, setIsLoading] = useState(false)

 return(
  <section className='flex flex-col items-center justify-center'>
   <div className='w-[448px] rounded overflow-hidden'>
   <div className='flex flex-col text-center justify-center mt-16 gap-6'>
    <Title title="Minhas Redes Sociais" />
    
    <div className='divide-y-2 divide-zinc-300'>
    
    <Socials 
     icon={Linkedin}
     text="Meu Linkedin com todas minhas atividades"
     href="https://www.linkedin.com/in/rafael-canedo-4abaa8197/"
    />
    <Socials
     icon={Instagram}
     text="Meu instagram com alguns projetos"
     href="https://www.instagram.com/canedodev/"
    />
    <Socials
     icon={Github}
     text="todos meus projetos no Github"
     href="https://github.com/rafabcanedo"
    />
    <Socials
     icon={Code}
     text="Meu Portfólio atualizado"
     href="https://canedo.dev"
    />

   </div>
   </div>
   </div>

   <div className='flex flex-col text-center justify-center mt-24'>
   <Title title="Fique ligado nas novidades" />
    <span className='text-[#787575]'>Receba Notificação e não perca nenhum post!</span>
    <form className='mt-4'>
     <div className='flex flex-col items-center'>
      <label className='text-title text-lg font-mono'>Seu Nome</label>
      <input className='h-8 w-56 rounded-md outline-none text-white bg-hovernav text-lg pl-4' />
     </div>
     <div className='flex flex-col items-center'>
      <label className='text-title text-lg font-mono'>Seu Email</label>
      <input className='h-8 w-56 rounded-md outline-none text-white bg-hovernav text-lg pl-4' />
     </div>

     
     <div className='flex items-center justify-center mt-8'>
     <div onClick={() => setIsLoading(!isLoading)}>
     {isLoading ? <Button success></Button> : <Button className='bg-emerald-500 hover:bg-emerald-800 font-mono'>Receber Notificação</Button>}    
     </div>
     </div>

     <div className='flex items-center justify-center mt-8'>
     </div>
    </form>
   </div>
  </section>
 )
}