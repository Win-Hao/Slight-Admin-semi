import {
  createHashHistory,
  createRouter,
  RouterProvider,
} from "@tanstack/react-router";

// Import the generated route tree
import { routeTree } from "./routeTree.gen";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useAuth } from "./hooks/useAuth";

const hashHistory = createHashHistory();
const basePath = "/";
// Create a new router instance
const router = createRouter({
  routeTree,
  basepath: basePath,
  history: hashHistory,
  context: {
    authentication: undefined!,
  },
});

// Register the router instance for type safety
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

// Create a client
const queryClient = new QueryClient();

function App() {
  const authentication = useAuth();
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} context={{ authentication }} />
    </QueryClientProvider>
  );
}

export default App;
