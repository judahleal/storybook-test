import { ComponentPropsWithRef } from "react"

export interface ButtonProps extends ComponentPropsWithRef<"button"> {
    primary?: boolean
    disabled?: boolean
    label: string
    type?: "button" | "submit"
    onClick?: () => void
}