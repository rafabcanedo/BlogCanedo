import { Linkedin, Instagram, Github, Code } from 'lucide-react';

export default function Contact() {
 return(
  <section>
   <div className='flex flex-col text-center justify-center mt-16'>
    <h3 className='text-xl text-title underline decoration-primary'>Minhas Redes sociais</h3>
    <div className='flex flex-row gap-12 text-center justify-center mt-8'>
    <div className='flex w-10 h-10 bg-neutral-700 rounded-md items-center justify-center'>
     <Linkedin className='text-primary hover:text-neutral-600 cursor-pointer' />
    </div>
    <div className='flex w-10 h-10 bg-neutral-700 rounded-md items-center justify-center'>
     <Instagram className='text-primary hover:text-neutral-600 cursor-pointer' />
    </div>
    <div className='flex w-10 h-10 bg-neutral-700 rounded-md items-center justify-center'>
     <Github className='text-primary hover:text-neutral-600 cursor-pointer' />
    </div>
    <div className='flex w-10 h-10 bg-neutral-700 rounded-md items-center justify-center'>
     <Code className='text-primary hover:text-neutral-600 cursor-pointer' />
    </div>
    </div>
   </div>

   <div className='flex flex-col text-center justify-center mt-16'>
    <h3 className='text-xl text-title underline decoration-primary'>Fique ligado nas novidades</h3>
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
     <div className='mt-8'>
     <button className="px-4 py-2 bg-emerald-500">Receber Notificação</button>
     </div>
    </form>
   </div>
  </section>
 )
}