import { AuroraBackground } from "@src/components/ui/aurora-background";
import { Highlight } from "@src/components/ui/high-light";
import { createFileRoute, Outlet } from "@tanstack/react-router";
import { motion } from "framer-motion";
export const Route = createFileRoute("/(auth)/_authLayout")({
  component: AuthLayout,
});
function AuthLayout() {
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
          className=" flex flex-col gap-4 items-center justify-center px-4"
        >
          {/* <div className="text-3xl md:text-7xl font-bold dark:text-white text-center uppercase">
            <TextGenerateEffect words={"Welcome to Slight Admin By Semi ui"} />
          </div>
          <div className="font-extralight text-base md:text-4xl dark:text-neutral-200 py-4">
            <Highlight className="text-black dark:text-white">LOGIN</Highlight>
          </div> */}
          <div className="bg-semi-color-bg-0 p-8 rounded-lg shadow-lg w-[400px]">
            <div className="font-extralight text-base md:text-4xl dark:text-neutral-200 py-4 flex justify-center items-center mb-4">
              <Highlight className="text-black dark:text-white font-semibold !p-4">
                LOGIN
              </Highlight>
            </div>
            <main>
              <Outlet />
            </main>
          </div>
        </motion.div>
      </AuroraBackground>
    </>
  );
}
