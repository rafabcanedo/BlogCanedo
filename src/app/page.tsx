import { TerminalSquare, MessagesSquare, Newspaper, Coffee } from 'lucide-react';

export default function Home() {
  return (
   <section className='pt-16 pl-12'>
    <div className="flex flex-col">
    <h3 className="text-title text-4xl">Falaa, Pessoal !</h3>
     <span className="text-title text-2xl">
      Eu sou o Rafael Canedo, desenvolvedor Web/Mobile
      e amante de jogos e tecnologia
     </span>
     <span className="text-[#787575] text-lg">
      Você está no meu Blog. Aqui é meu espaço de criatividade,
      onde vai encontrar posts de diversos tipos de assuntos baseados <br />
      em minha experiencia profissional, social e pessoal.
     </span>
     </div>

     <div className='flex flex-row gap-8 ml-6 md:items-center pt-6'>
      <div>
      <TerminalSquare className='text-primary hover:text-green-800 cursor-pointer' />
      </div>

      <div>
      <MessagesSquare className='text-primary hover:text-green-800 cursor-pointer' />
      </div>

      <div>
      <Newspaper className='text-primary hover:text-green-800 cursor-pointer' />
      </div>

      <div>
      <Coffee className='text-primary hover:text-green-800 cursor-pointer' />
      </div>
     </div>
   </section>
  )
}
