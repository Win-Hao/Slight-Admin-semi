import { Button, SideSheet } from "@douyinfe/semi-ui";
import { useState } from "react";
import SideBar from "@src/pages/(dashboard)/-components/SideBar.tsx";
import { useSettings } from "@src/store/settingsStore.ts";
import { HamburgerButton } from "@icon-park/react";

const SideBarSheet = () => {
  const [visible, setVisible] = useState(false);
  const change = () => {
    setVisible(!visible);
  };
  const settings = useSettings();
  return (
    <>
      <div>
        <Button
          icon={<HamburgerButton theme="outline" size="20" />}
          onClick={change}
          theme={"borderless"}
        ></Button>
        <SideSheet
          headerStyle={{ display: "none" }}
          bodyStyle={{ padding: 0 }}
          visible={visible}
          onCancel={change}
          placement={"left"}
          width={settings.isCollapsed ? 60 : 260}
        >
          <SideBar isCollapseButton={false} setSideBarSheetVisible={change} />
        </SideSheet>
      </div>
    </>
  );
};

export default SideBarSheet;
