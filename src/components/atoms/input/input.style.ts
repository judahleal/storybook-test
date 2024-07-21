import { tv } from 'tailwind-variants';

export const containerStyle = "flex flex-col justify-end relative min-h-16"

export const inputStyle = tv({
  base: [
    "peer",
    "transition-all",
    "bg-white",
    "border-b-2 border-solid border-gray-600",
    "font-sans text-gray-900 text-base",
    "px-2 py-1",
    "placeholder:opacity-0 focus-visible:placeholder:opacity-100",
    "disabled:bg-gray-200 disabled:border-b-2 disabled:border-solid disabled:border-gray-600 disabled:pointer-events-none"
  ]
});

export const labelStyle = tv({
  base: [
    "absolute",
    "transition-all",
    "text-gray-900",
    "peer-focus:top-0 peer-focus:left-0",
    "peer-placeholder-shown:top-8 peer-placeholder-shown:scale-100",
    "peer-placeholder-shown:left-2 peer-focus:scale-90",
    "scale-90 top-0 left-0"
  ],
});

export const errorStyle = "mt-1 text-xs text-red-600"