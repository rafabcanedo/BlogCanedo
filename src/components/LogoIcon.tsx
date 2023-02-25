import Image from "next/image";
import LogoGithub from '../assets/github.jpg';

export function LogoIcon() {
 return(
  <div>
   <Image 
    src={LogoGithub}
    alt="Logo Avatar"
    width="100" height="100"
    className="rounded-full" 
   />
  </div>
 );
}