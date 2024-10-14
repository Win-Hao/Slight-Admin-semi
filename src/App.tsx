import {createRouter, RouterProvider} from '@tanstack/react-router'

// Import the generated route tree
import {routeTree} from './routeTree.gen'

const basepath = import.meta.env.VITE_BASE_PATH
// Create a new router instance
const router = createRouter({routeTree, basepath: basepath})

// Register the router instance for type safety
declare module '@tanstack/react-router' {
    interface Register {
        router: typeof router
    }
}

function App() {


    return <RouterProvider router={router}/>

}

export default App
