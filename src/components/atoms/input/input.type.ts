import { ComponentPropsWithRef } from "react"

export interface InputProps extends ComponentPropsWithRef<"input">  {
    id?: string
    label: string
    type?: "text" | "email" | "password"
}