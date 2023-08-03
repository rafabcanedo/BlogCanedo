import Image from 'next/image'
import c from '../../assets/C.svg'

export function Footer() {
 return (
 <div className='flex flex-col items-center justify-center gap-6 py-12'>
    <div>
     <Image src={c} width={35} height={35} alt="Logo Canedo" />
    </div>
    <span className="text-title">
    &copy; {new Date().getFullYear()} CanedoDev.
    </span>
 </div>
 )
}