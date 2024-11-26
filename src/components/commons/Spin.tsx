import { useEffect } from "react";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import { Spin } from "@douyinfe/semi-ui";

export function SpinLoading() {
  NProgress.configure({ showSpinner: false });
  useEffect(() => {
    NProgress.set(0.0);
    return () => {
      NProgress.set(1.0);
    };
  }, []);
  return (
    <div className="flex h-full items-center justify-center">
      <Spin size="large" />
    </div>
  );
}
