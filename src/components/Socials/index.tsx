import { SocialsProps } from '../../types/index';
import { SendHorizonal } from 'lucide-react';

export function Socials({ text, icon: Icon, href }: SocialsProps) {
 return (
    <div className='bg-hovernav px-8 py-4 flex items-start gap-6'>
    <Icon className='w-6 h-6 mt-3 text-primary hover:text-neutral-600 cursor-pointer' />
    <div className='flex-1 flex flex-col gap-2'>
     <p className='text-sm leading-relaxed text-zinc-600'>
       {text}
     </p>
    </div>
    <div>
     <button className='w-8 h-8 rounded flex items-center justify-center bg-indigo-600 hover:bg-indigo-700'>
      <a href={href} target='_blank'>
      <SendHorizonal className='w-3 h-3 text-primary' />
      </a>
     </button>
    </div>
    </div>
 )
}