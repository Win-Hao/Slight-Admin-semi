import {
  createHashHistory,
  createRouter,
  RouterProvider,
} from "@tanstack/react-router";

// Import the generated route tree
import { routeTree } from "./routeTree.gen";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useAuth } from "./hooks/useAuth";
// Create a client
const queryClient = new QueryClient();

const hashHistory = createHashHistory();
const basePath = "/";
// Create a new router instance
const router = createRouter({
  routeTree,
  basepath: basePath,
  history: hashHistory,
  context: {
    queryClient,
    authentication: undefined!,
  },
  defaultPreload: "intent",
  // Since we're using React Query, we don't want loader calls to ever be stale
  // This will ensure that the loader is always called when the route is preloaded or visited
  defaultPreloadStaleTime: 0,
});

// Register the router instance for type safety
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

function App() {
  const authentication = useAuth();
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} context={{ authentication }} />
    </QueryClientProvider>
  );
}

export default App;
