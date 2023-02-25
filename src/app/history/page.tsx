"use client"
import { Books, BookOpen, BookBookmark, Bookmark, Code, GameController } from "phosphor-react";

import Title from "@/components/Title";

export default function History() {
 return(
  <section>
  <div>
   <Title title="History" />
  </div>
  <div className="flex justify-center text-center">
   <div>
    <h3 className="text-3xl font-semibold">My History</h3>
    <div className="flex flex-col mt-4">
    <span>College and Work</span>
    <span>Xp in <span className="text-[#43CEA2]">Codes</span> </span>
    </div>

    <div className="flex flex-col items-center mt-8">
    <h2>2007 - <span className="text-xl">∞</span></h2>
    <GameController size={32} weight="light" className="text-[#43CEA2]" />
    <div>
     <span>
        Games, Got my first computer
     </span>
    </div>
    </div>

    <div className="flex flex-col mt-10">
     <span className="text-xl">2018</span>
     <div className="flex flex-row gap-2">
     <Books size={25} weight="light" className="text-[#43CEA2]" />
     <span>
      I'm start study at University in Bauru-SP(Brazil). Sistema de informação.
      But, i'm not contact with the code or tec.
     </span>
     </div>
    </div>

    <div className="flex flex-col mt-10">
     <span className="text-xl">2019</span>
     <div className="flex flex-row gap-2">
     <BookOpen size={25} weight="light" className="text-[#43CEA2]" />
     <span>
      With the time, i'm started in development world. Projects with PHP, HTML and CSS.
      Just fun, but my mind <br /> was feeling good vibes with the codes...
     </span>
     </div>
    </div>

    <div className="flex flex-col mt-10">
     <span className="text-xl">2020/2021</span>
     <div className="flex flex-row gap-2">
     <BookBookmark size={25} weight="light" className="text-[#43CEA2]" />
     <span>
      I has conclude the university with the experience for coding any React/Js project. I was
      work how developer, <br /> and coding open source project. I worked at Who Is Happy(Cannabis Startup).<br />
      It was there that I learned to develop/organize projects.
     </span>
     </div>
    </div>

    <div className="flex flex-col mt-10">
     <span className="text-xl">2022</span>
     <div className="flex flex-row gap-2">
     <Bookmark size={25} weight="light" className="text-[#43CEA2]" />
     <span>
      After conclude the university, I worked with Freelancers where I learned project with Typescript and Nextjs.<br />
      I worked some Companies how Web Developer and studied Mobile Developer(React Native).
     </span>
     </div>
    </div>

    <div className="flex flex-col mt-10">
     <span className="text-xl">2023</span>
     <div className="flex flex-row gap-2 justify-center items-center mt-4">
     <Code size={25} weight="light" className="text-[#43CEA2]" />
     <span>
      Coding my world...
     </span>
     </div>
    </div>

    <div>
    
    </div>

   </div>
  </div>
  </section>
 );
}