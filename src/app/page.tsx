import { Title } from '@/components/Title';
import { TerminalSquare, MessagesSquare, Newspaper, Coffee } from 'lucide-react';

export default function Home() {
  return (
   <section className='pt-16 pl-12'>
    <div className="flex flex-col">
    <h3 className="text-title text-4xl">Falaa, Pessoal !</h3>
     <span className="text-title text-2xl font-mono">
      Eu sou o Rafael Canedo, desenvolvedor Web/Mobile
      e amante de jogos e tecnologia
     </span>
     <span className="text-[#787575] text-lg font-mono">
      Você está no meu Blog. Aqui é meu espaço de criatividade,
      onde vai encontrar posts de diversos tipos de assuntos baseados <br />
      em minha experiencia profissional, social e pessoal.
     </span>
     </div>

     <div className='flex flex-row gap-8 ml-6 md:items-center pt-6 mb-16'>
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

     <div className='mt-24'>
      <Title title="Minha História" />

      <div className='flex flex-col gap-4 mt-8'>
        <h4 className='font-alt text-xl text-gray-300'>Meu primeiro contato com <span className='text-primary'>tecnologia</span></h4>
        <span className='text-lg font-mono text-title'>
        Sempre tive contato com computador desde pequeno, quando meu pai tinha um escritório de engenharia,
        lá tinha alguns computadores e engraçado<br /> que meu primeiro contato com jogos também. Joguei Counter Strike 1.6
        junto com meu irmão e meu primo quando o meu pai terminava os trabalhos do dia.<br />
        Foi muitos anos tendo contato assim, nada muito aprofundado. Foi depois de anos que tive meu primeiro 
        computador e tive tempo suficiente para aprender a usar a internet como site, jogos, músicas, etc.
        </span>
      </div>

      <div className='flex flex-col gap-4 mt-8'>
        <h4 className='font-alt text-xl text-gray-300'>Quando tive meu <span className='text-primary'>primeiro</span> computador</h4>
        <span className='text-lg font-mono text-title'>
         Em 2009 eu jogava no video game do meu amigo, jogava Call Of Duty e sempre faziamos mini campeonatos aqui em casa
         com os amigos do meu irmão.<br /> Essa época eu já estava apaixonado nesse mundo de jogos.
         Em meados de 2010 tive meu primeiro computador. Eu já tinha contato com internet, navegadores<br /> e a interfaces do
         windows, mas nada aprofundado. Quando tive meu primeiro computador, tudo isso mudou, continuei jogando jogos
         no computador,<br /> mas eu já estava apaixonado pelo Youtube, blogs e programas de comunicação como Team Speak, e mais tarde
         Skype.
        </span>
      </div>

      <div className='flex flex-col gap-4 mt-8'>
       <h4 className='font-alt text-xl text-gray-300'>Meu primeiro <span className='text-primary'>código</span></h4>
       <span className='text-lg font-mono text-title'>
        Eu comecei a estudar programação no final de 2017, antes de entrar na faculdade em 2018. Mas antes,
        não me lembro o ano, tive um contato com HTML.<br /> Acho que era em 2015, por que quando entrava no site dos
        jogos para poder baixar e ler notas de atualizações eu ficava encantado com tudo aquilo,<br /> todo site e como
        eles lançavam as notas de atualizações.<br />
        Meu primeiro código foi no começo da faculdade, com "Java" e "C" e ao longo do curso estudei linguagens
        como "Python", "PHP", "Javascript".<br />
        Atualmente trabalho com Typescript com NextJs no front end e Typecript com NestJs, Prisma no back end.
       </span>
      </div>
     </div>
   </section>
  )
}
