import { ChangeEvent, useId, useState } from "react";
import { InputProps } from "./input.type";
import { containerStyle, inputStyle, labelStyle } from "./input.style";

export const Input = ({ id, label, type = "text", ...props }: InputProps) => {
  const [inputValue, setInputValue] = useState<string>("");

  const inputId = useId();

  return (
    <div className={containerStyle}>
      <input
        id={id ?? inputId}
        type={type}
        className={inputStyle()}
        onChange={(event: ChangeEvent<HTMLInputElement>) =>
          setInputValue(event.target.value)
        }
        value={inputValue}
        placeholder={label}
        {...props}
      />
      <label className={labelStyle()} htmlFor={id ?? inputId}>
        {label}
      </label>
    </div>
  );
};
