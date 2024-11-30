import { Button, Checkbox, Input, Toast } from "@douyinfe/semi-ui";
import { zodResolver } from "@hookform/resolvers/zod";
import { Key, User } from "@icon-park/react";
import { signIn } from "@src/api/auth";
import { useAuth } from "@src/hooks/useAuth";
import { useMutation } from "@tanstack/react-query";
import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
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
  const { setIsAuthenticated } = useAuth();
  const navigate = useNavigate();
  const [remember, setRemember] = useState(true);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<ValidationSchema>({
    resolver: zodResolver(validationSchema),
    defaultValues: {
      username: localStorage.getItem("username") || "admin",
      password: localStorage.getItem("password") || "123456",
    },
  });
  const loginMutation = useMutation({
    mutationFn: signIn,
    onSuccess: (data, variables) => {
      Toast.success({ content: data.msg, duration: 2 });
      setIsAuthenticated();
      navigate({ to: "/dashboard/workbench" }).then();
      if (remember) {
        localStorage.setItem("username", variables.username);
        localStorage.setItem("password", variables.password);
      } else {
        localStorage.removeItem("username");
        localStorage.removeItem("password");
      }
    },
    onError: (error) => {
      Toast.error({ content: error.message, duration: 3 });
    },
  });
  const onSubmit: SubmitHandler<ValidationSchema> = (data) => {
    loginMutation.mutate(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col gap-6 w-full">
        <Controller
          name="username"
          control={control}
          render={({ field }) => (
            <div>
              <Input
                {...field}
                size="large"
                className="!rounded-md"
                defaultValue={field.value}
                prefix={
                  <User
                    theme="outline"
                    size="20"
                    className="px-2 text-semi-color-text-1"
                  />
                }
              />
              {errors.username && (
                <p className="p-2 border-2 border-red-300 bg-red-200 rounded-md mt-2 text-semi-color-danger">
                  {errors.username.message}
                </p>
              )}
            </div>
          )}
        />
        <Controller
          name="password"
          control={control}
          render={({ field }) => (
            <div>
              <Input
                {...field}
                size="large"
                mode="password"
                className="!rounded-md"
                defaultValue={field.value}
                prefix={
                  <Key
                    theme="outline"
                    size="20"
                    className="p-2 text-semi-color-text-1"
                  />
                }
              />
              {errors.password && (
                <p className="p-2 border-2 border-red-300 bg-red-200 rounded-md mt-2 text-semi-color-danger">
                  {errors.password.message}
                </p>
              )}
            </div>
          )}
        />
        <div className="flex flex-row justify-between items-center">
          <Checkbox
            checked={remember}
            onChange={() => setRemember((prev) => !prev)}
            aria-label="Checkbox 示例"
          >
            remember me
          </Checkbox>
          <Link className="text-semi-color-primary text-sm">
            forget password?
          </Link>
        </div>
        <Button
          loading={loginMutation.isPending}
          htmlType="submit"
          theme="solid"
          type="primary"
          size="large"
          className="!rounded-md !mt-3"
        >
          {loginMutation.isPending ? "Loading" : "Login"}
        </Button>
      </div>
    </form>
  );
}
