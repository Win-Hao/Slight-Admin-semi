import {
  createFileRoute,
  Outlet,
  redirect,
  useRouterState,
} from "@tanstack/react-router";
import Navbar from "@src/pages/(dashboard)/-components/Navbar.tsx";
import SideBar from "@src/pages/(dashboard)/-components/SideBar.tsx";
import { useSettings } from "@src/store/settingsStore.ts";
import { SpinLoading } from "@src/components/commons/Spin";
import Watermark from "@uiw/react-watermark";
import { ThemeMode } from "@src/types/enum";

export const Route = createFileRoute("/(dashboard)/_dashboardLayout")({
  beforeLoad: async ({ context }) => {
    if (!context.authentication.isLogged()) {
      throw redirect({ to: "/login" });
    }
  },
  component: DashboardLayout,
});

function DashboardLayout() {
  const { isCollapsed, themeMode } = useSettings();
  const { status } = useRouterState();
  const state = useRouterState();
  console.log(state);
  const username = localStorage.getItem("username");
  return (
    <div className="flex h-full">
      <div className="hidden md:!block md:fixed md:inset-y-0 md:z-50">
        <SideBar isCollapseButton={true} />
      </div>
      <div
        className={`flex-1 transition-all duration-[200ms] max-w-[100%] flex flex-col pl-0 ${isCollapsed ? "md:pl-[60px]" : "md:pl-[260px]"}`}
      >
        <div
          style={{
            backgroundColor: "var(--semi-color-bg-1)",
          }}
          className="w-full sticky top-0 shrink-0 z-40 opacity-95"
        >
          <Navbar />
        </div>
        <main className="bg-semi-color-fill-0 !p-4 flex-1 w-full min-h-[calc(100vh_-_60px)]">
          <div className="max-w-screen-2xl !mx-auto h-full">
            <Watermark
              content={username!}
              gapX={120}
              gapY={120}
              className="h-full"
              fontColor={
                themeMode === ThemeMode.Light
                  ? "rgba(0,0,0,0.1)"
                  : "rgba(198,202,205,0.1)"
              }
            >
              {status === "pending" ? <SpinLoading /> : <Outlet />}
            </Watermark>
          </div>
        </main>
      </div>
    </div>
  );
}
