import { Button } from "@/components/button";

export default function Test() {
 return(
  <div className="flex flex-col h-screen items-center justify-center gap-6 text-zinc-50">
    <Button success className="w-20">Sign In</Button>
    <Button size="sm">Sign In</Button>
    <Button size="xs">Sign In</Button>
    <Button className="bg-emerald-500 hover:bg-emerald-800">Sign In</Button>
  </div>
 )
}