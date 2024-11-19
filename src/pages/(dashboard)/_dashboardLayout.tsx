import { createFileRoute, Outlet, redirect } from "@tanstack/react-router";
import Navbar from "@src/pages/(dashboard)/-components/Navbar.tsx";
import SideBar from "@src/pages/(dashboard)/-components/SideBar.tsx";
import { useSettings } from "@src/store/settingsStore.ts";

export const Route = createFileRoute("/(dashboard)/_dashboardLayout")({
  beforeLoad: async ({ context }) => {
    if (!context.authentication.isLogged()) {
      throw redirect({ to: "/login" });
    }
  },
  component: DashboardLayout,
});

function DashboardLayout() {
  const { isCollapsed } = useSettings();
  return (
    <div className="flex h-full">
      <div className="hidden md:!block md:fixed md:inset-y-0 md:z-50">
        <SideBar isCollapseButton={true} />
      </div>
      <div
        className={`flex-1 transition-all duration-[200ms] overflow-y-auto flex flex-col pl-0 ${isCollapsed ? "md:pl-[60px]" : "md:pl-[260px]"}`}
      >
        <div
          style={{
            backgroundColor: "var(--semi-color-bg-1)",
          }}
          className="w-full sticky top-0 shrink-0 z-40 opacity-95"
        >
          <Navbar />
        </div>
        <main className="bg-semi-color-fill-0 !p-4 flex-1 w-full ">
          <div className="max-w-screen-2xl !mx-auto">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
}
