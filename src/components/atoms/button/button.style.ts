import { tv } from 'tailwind-variants';
 
export const buttonStyle = tv({
  base: [
    "rounded-full",
    "font-sans text-base",
    "px-4 py-2",
    "flex-1",
    "disabled:bg-gray-300 disabled:border-gray-300 disabled:text-white disabled:cursor-not-allowed disabled:hover:bg-gray-300 disabled:hover:border-gray-300 disabled:active:contrast-1"
  ],
  variants: {
    color: {
      primary: [
        "bg-gray-900",
        "text-white",
        "border-solid border-2 border-gray-900",
        "hover:bg-gray-700 hover:border-gray-700",
        "cursor-pointer",
        "active:contrast-75"
      ],
      secondary: [
        "bg-white",
        "text-gray-900",
        "border-solid border-2 border-gray-900",
        "hover:bg-gray-100 hover:border-gray-600",
        "cursor-pointer",
        "active:contrast-75"
      ],
    }
  }
});