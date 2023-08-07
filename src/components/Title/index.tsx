import { TitleProps } from "@/types";

export function Title({ title }: TitleProps) {
 return(
 <div className='text-3xl font-mono text-title underline decoration-primary'>
  <h3>{title}</h3>
 </div>
 )
}