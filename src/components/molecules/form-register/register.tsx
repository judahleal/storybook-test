import { Button } from "@/components/atoms/button/button";
import { Input } from "@/components/atoms/input/input";
import { SubmitHandler, useForm } from "react-hook-form";
import { RegisterFormProps } from "./register.type";
import { buttonContainer, formStyle, inputsContainer } from "./register.style";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const formSchema = z.object({
  name: z.string(),
  email: z.string().email(),
});

export const Register = () => {
  const { register, handleSubmit } = useForm<RegisterFormProps>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit: SubmitHandler<RegisterFormProps> = (data) => {
    console.log(data);
  };

  return (
    <div className={formStyle()}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={inputsContainer()}>
          <Input label="Name" {...(register("name"), { required: true })} />
          <Input
            label="E-mail"
            type="email"
            {...(register("email"), { required: true })}
          />
        </div>
        <div className={buttonContainer()}>
          <Button label="Cancel" />
          <Button label="Submit" type="submit" primary />
        </div>
      </form>
    </div>
  );
};
