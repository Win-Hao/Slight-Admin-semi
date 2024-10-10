import {createFileRoute, useNavigate} from '@tanstack/react-router'
import {AuroraBackground} from "@src/components/ui/aurora-background.tsx";
import {motion} from 'framer-motion';
import {TextGenerateEffect} from "@src/components/ui/text-generate-effect.tsx";
import {Highlight} from "@src/components/ui/high-light.tsx";

export const Route = createFileRoute('/')({
    component: Index,
})

function Index() {
    const navigate = useNavigate()
    return (
        <AuroraBackground>
            <motion.div
                initial={{opacity: 0.0, y: 40}}
                whileInView={{opacity: 1, y: 0}}
                transition={{
                    delay: 0.3,
                    duration: 0.8,
                    ease: "easeInOut",
                }}
                className="relative flex flex-col gap-4 items-center justify-center px-4"
            >
                <div className="text-3xl md:text-7xl font-bold dark:text-white text-center uppercase">
                    <TextGenerateEffect words={'Welcome to Slight Admin By Semi ui'}/>
                </div>
                <div className="font-extralight text-base md:text-4xl dark:text-neutral-200 py-4">
                    <Highlight className="text-black dark:text-white">
                        Hope you will have fun here
                    </Highlight>
                </div>
                <button onClick={() => {
                    navigate({to: '/dashboard/workbench'}).then()
                }} className="bg-black dark:bg-white rounded-full w-fit text-white dark:text-black px-4 py-2 uppercase">
                    GO HOME
                </button>
            </motion.div>
        </AuroraBackground>)
}
