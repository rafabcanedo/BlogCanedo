import { ComponentProps } from "react"
import { CheckCircle } from "lucide-react"
import { tv, VariantProps } from "tailwind-variants"

// Styles Button default
// Create variants Success
const button = tv({
 base: 'flex text-sm rounded items-center justify-center bg-zinc-50 font-medium text-zinc-900 hover:bg-zinc-200 data-[success=true]:bg-emerald-600 data-[success=true]:hover:bg-emerald-800',
 variants: {
  size: {
   default: 'h-10 px-4',
   sm: 'h-6 px-3',
   xs: 'h-6 px-2 text-xs',
  },
  success: {
  true: 'bg-emerald-500 hover:bg-emerald-800',
  },
 },
 defaultVariants: {
  size: 'default',
  success: false,
 },
})

// extends Components Props with React
export type ButtonProps = ComponentProps<'button'> & VariantProps<typeof button> & {
 success?: boolean
}

export function Button({ success, size, className, ...props }: ButtonProps) {
 return (
  <button
  data-success={success}
  className={button({ size, success, className })}
  {...props}
  >
  {success ? <CheckCircle className="h-4 w-4" /> : props.children}
  </button>
 )
}