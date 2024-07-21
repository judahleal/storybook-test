import { buttonStyle } from "./button.style";
import { ButtonProps } from "./button.type";

export const Button = ({
  label,
  primary,
  type = "button",
  ...props
}: ButtonProps) => {
  const typeButton = primary ? "primary" : "secondary";
  return (
    <button
      type={type}
      className={buttonStyle({ color: typeButton })}
      {...props}
    >
      {label}
    </button>
  );
};
