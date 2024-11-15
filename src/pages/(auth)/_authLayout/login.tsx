import { Button } from "@douyinfe/semi-ui";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAuth } from "@src/hooks/useAuth";
import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";

export const Route = createFileRoute("/(auth)/_authLayout/login")({
  component: Login,
});

const validationSchema = z.object({
  username: z.string().min(1, { message: "Username is required" }),
  password: z.string().min(1, { message: "Password is required" }),
});
type ValidationSchema = z.infer<typeof validationSchema>;
function Login() {
  const { signIn } = useAuth();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ValidationSchema>({
    resolver: zodResolver(validationSchema),
  });
  const onSubmit: SubmitHandler<ValidationSchema> = () => {
    signIn();
    navigate({ to: "/dashboard/workbench" }).then();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col gap-6 w-full">
        <div>
          <input
            type="text"
            placeholder="Username"
            {...register("username")}
            className="
          flex
          h-9
          w-full
          rounded-md
          bg-semi-color-fill-2
          px-3
          py-1
          text-sm
          shadow-sm
          transform
          transition-all
          duration-200
          file:border-0
          file:bg-transparent
          file:text-sm
          file:font-medium
          focus-visible:outline-none
          focus-visible:border-none
          focus-visible:bg-transparent
          focus-visible:ring-2
          focus-visible:ring-semi-color-primary
          focus-visible:ring-offset-2
          disabled:cursor-not-allowed
          disabled:opacity-50"
          />
          {errors.username && (
            <p className="p-2 border-2 border-red-300 bg-red-200 rounded-md mt-2 text-semi-color-danger">
              {errors.username.message}
            </p>
          )}
        </div>
        <div>
          <input
            type="password"
            placeholder="Password"
            {...register("password")}
            className="
          flex
          h-9
          w-full
          rounded-md
          bg-semi-color-fill-2
          px-3
          py-1
          text-sm
          shadow-sm
          transform
          transition-all
          duration-200
          file:border-0
          file:bg-transparent
          file:text-sm
          file:font-medium
          focus-visible:outline-none
          focus-visible:border-none
          focus-visible:bg-transparent
          focus-visible:ring-2
          focus-visible:ring-semi-color-primary
          focus-visible:ring-offset-2
          disabled:cursor-not-allowed
          disabled:opacity-50"
          />
          {errors.password && (
            <p className="p-2 border-2 border-red-300 bg-red-200 rounded-md mt-2 text-semi-color-danger">
              {errors.password.message}
            </p>
          )}
        </div>
        <Button
          htmlType="submit"
          theme="solid"
          type="primary"
          size="large"
          className="!rounded-md !mt-3"
        >
          LOGIN
        </Button>
      </div>
    </form>
  );
}
