import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/(auth)/_authLayout/signUp")({
  component: SignUp,
});

function SignUp() {
  return <>sign up</>;
}
