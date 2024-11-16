import { AuroraBackground } from "@src/components/ui/aurora-background";
import { Highlight } from "@src/components/ui/high-light";
import { TextGenerateEffect } from "@src/components/ui/text-generate-effect";
import {
  createFileRoute,
  Link,
  Outlet,
  redirect,
  useLocation,
} from "@tanstack/react-router";
import { motion } from "framer-motion";
export const Route = createFileRoute("/(auth)/_authLayout")({
  beforeLoad: ({ context }) => {
    if (context.authentication.isLogged()) {
      throw redirect({ to: "/dashboard/workbench" });
    }
  },
  component: AuthLayout,
});
const LayoutTitle: Record<string, string> = {
  login: "LOGIN",
  signUp: "SIGN UP",
};
function AuthLayout() {
  const pathName = useLocation().pathname;
  return (
    <>
      <AuroraBackground>
        <motion.div
          initial={{ opacity: 0.0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className=" flex flex-col gap-4 items-center justify-center w-full"
        >
          <div className="bg-semi-color-bg-0 p-8 rounded-lg shadow-lg w-full md:w-2/3 lg:w-1/2 xl:w-[36%]">
            <div className="text-3xl md:text-7xl font-bold dark:text-white text-center uppercase">
              <TextGenerateEffect
                words={"Welcome to Slight Admin By Semi ui"}
              />
            </div>
            <div className="font-extralight text-base md:text-4xl dark:text-neutral-200 flex justify-center items-center mt-8">
              <Highlight className="text-black dark:text-white font-semibold !p-4">
                {LayoutTitle[pathName.slice(1)]}
              </Highlight>
            </div>
            <main className="mt-8">
              <Outlet />
            </main>
            <div className="mt-8 flex flex-row gap-4 items-center justify-center">
              <Link
                to={"/login"}
                className="text-sm hover:text-semi-color-primary font-semibold"
                activeProps={{ className: "text-semi-color-primary" }}
                activeOptions={{ exact: true }}
              >
                Sign In
              </Link>
              <Link
                to={"/signUp"}
                className="text-sm hover:text-semi-color-primary font-semibold"
                activeProps={{ className: "text-semi-color-primary" }}
                activeOptions={{ exact: true }}
              >
                Sign up
              </Link>
            </div>
          </div>
        </motion.div>
      </AuroraBackground>
    </>
  );
}
