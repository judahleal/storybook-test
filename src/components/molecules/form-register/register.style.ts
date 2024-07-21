import { tv } from "tailwind-variants"

export const formStyle = tv({
    base: [
        "w-80",
        "bg-white",
        "rounded-lg",
        "drop-shadow-2xl",
        "p-8",
    ]
})

export const inputsContainer = tv({
    base: [
        "flex flex-col gap-2"
    ]
})

export const buttonContainer = tv({
    base: [
        "flex flex-1",
        "space-x-4",
        "mt-6"
    ]
})