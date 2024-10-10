import {createRootRoute, Link, Outlet} from '@tanstack/react-router'
import useTheme from "@src/theme/hooks/useTheme.ts";
import {Button} from "@douyinfe/semi-ui";
import {motion} from 'framer-motion';

export const Route = createRootRoute({
    component: RootLayout,
    notFoundComponent: NotFoundComponent
})

function RootLayout() {
    useTheme()
    return (
        <>
            <Outlet/>
            {/*<TanStackRouterDevtools/>*/}
        </>)
}

function NotFoundComponent() {
    return (<div className='h-screen flex items-center justify-center flex-col bg-semi-color-primary-light-default'>
        <motion.img variants={{hidden: {opacity: 0, scale: 0}, visible: {opacity: 1, scale: 1}}}
                    initial='hidden'
                    animate='visible'
                    transition={{type: "spring", bounce: 0.5}}
                    src="/src/assets/images/page/404.png" alt="404"/>
        <Link to={'/dashboard/workbench'}>
            <Button size='large' theme={'solid'}>
                BACK DASHBOARD</Button>
        </Link>
    </div>)
}