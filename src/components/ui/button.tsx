import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 relative overflow-hidden group",
  {
    variants: {
      variant: {
        default:
          "bg-gradient-to-r from-emerald-600 to-cyan-600 text-white shadow-lg hover:shadow-2xl hover:shadow-emerald-500/50 hover:scale-105 active:scale-95",
        destructive:
          "bg-gradient-to-r from-red-600 to-rose-600 text-white shadow-lg hover:shadow-2xl hover:shadow-red-500/50 hover:scale-105 active:scale-95",
        outline:
          "border-2 border-emerald-500 bg-transparent text-emerald-500 shadow-sm hover:bg-emerald-500/10 hover:border-emerald-400 hover:scale-105 active:scale-95 hover:shadow-lg hover:shadow-emerald-500/30",
        secondary:
          "bg-gradient-to-r from-slate-700 to-slate-600 text-white shadow-lg hover:from-slate-600 hover:to-slate-500 hover:scale-105 active:scale-95 hover:shadow-xl",
        ghost: "hover:bg-slate-800/50 hover:text-emerald-400 hover:scale-105 active:scale-95 backdrop-blur-sm",
        link: "text-emerald-500 underline-offset-4 hover:underline hover:text-emerald-400",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3 text-xs",
        lg: "h-12 rounded-md px-8 text-base font-semibold",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
