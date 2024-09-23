"use client"
import { ButtonHTMLAttributes, MouseEventHandler, ReactNode } from "react"

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode
  onClick?: MouseEventHandler<HTMLButtonElement>
}

const Button = (props: ButtonProps) => {
  const { children } = props
  const onClick = () => {
    console.log("hi")
  }

  return (
    <button type="button" onClick={onClick} className="bg-black text-red-700 rounded-lg px-4 cursor-pointer">
      {children}
    </button>
  )
}

export default Button
