import { Nav } from "@douyinfe/semi-ui";
import { useSettings, useSettingsActions } from "@src/store/settingsStore.ts";
import { Wind } from "@icon-park/react";
import useRouteToMenu from "@src/config/useRouteToMenu.ts";
import { routerList } from "@src/config/routerList.tsx";
import useLinkMenu from "@src/config/useLinkMenu.ts";
import { useLocation, useNavigate } from "@tanstack/react-router";
import { MenuItemType } from "#types/entity.ts";
import { useState } from "react";

const SideBar = ({
  isCollapseButton,
  setSideBarSheetVisible,
}: {
  isCollapseButton: boolean;
  setSideBarSheetVisible?: () => void;
}) => {
  const settings = useSettings();
  const { setSettings } = useSettingsActions();
  const { isCollapsed } = settings;
  const LinkToMenuFn = useLinkMenu();
  const routeMap = LinkToMenuFn(routerList);
  const pathname = useLocation().pathname;
  const currentKey = Object.entries(routeMap).find(
    ([, value]) => value === pathname
  ) || [""];
  const [selectedKeys, setSelectedKeys] = useState<string[]>([currentKey[0]]);
  const collapsedHandler = (isCollapse: boolean) => {
    setSettings({ ...settings, isCollapsed: isCollapse });
  };

  const routeToMenuFn = useRouteToMenu();

  const items = routeToMenuFn(routerList);

  const navigate = useNavigate();
  const navHandler = (path: string) => {
    navigate({ to: path }).then(() => setSideBarSheetVisible?.());
  };

  const createNavMenu = (items: MenuItemType[]) => {
    return items.map((item: MenuItemType) => {
      const { itemKey, icon, text } = item;
      if (item.items) {
        return (
          <Nav.Sub key={itemKey} itemKey={item.itemKey} text={text} icon={icon}>
            {createNavMenu(item.items)}
          </Nav.Sub>
        );
      } else {
        return (
          <Nav.Item
            key={itemKey}
            icon={icon}
            itemKey={itemKey}
            text={text}
            onClick={({ itemKey }) => {
              navHandler(routeMap[itemKey]);
            }}
          />
        );
      }
    });
  };
  return (
    <Nav
      style={{ height: "100%", width: isCollapsed ? "60px" : "260px" }}
      isCollapsed={isCollapsed}
      selectedKeys={selectedKeys}
      onSelect={({ itemKey }) => {
        setSelectedKeys([itemKey as string]);
      }}
      header={{
        logo: (
          <Wind
            theme="outline"
            size="36"
            className="text-semi-color-primary cursor-pointer"
            onClick={() => {
              navHandler("/dashboard/workbench");
            }}
          />
        ),
        text: (
          <span
            className="text-semi-color-primary !font-bold cursor-pointer"
            onClick={() => {
              navHandler("/dashboard/workbench");
            }}
          >
            Slight Admin
          </span>
        ),
      }}
      onCollapseChange={collapsedHandler}
      footer={{ collapseButton: isCollapseButton }}
    >
      {createNavMenu(items)}
    </Nav>
  );
};

export default SideBar;
