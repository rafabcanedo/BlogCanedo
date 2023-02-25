
type TitleProps = {
 title: string;
}

export default function Title({ title }: TitleProps) {
 return(
 <div>
    <h1 className="text-center font-roboto font-bold mb-8 text-white text-3xl underline decoration-[#43CEA2]">
     {title}
    </h1>
 </div>
 );
}