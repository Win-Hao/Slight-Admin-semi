import { PermissionType } from "#types/enum.ts";
import { IconDescend, IconHome, IconUser } from "@douyinfe/semi-icons";
import { RouteListItemType } from "#types/entity.ts";

const dashboard: RouteListItemType = {
  id: 1,
  label: "Dashboard",
  name: "Dashboard",
  icon: <IconHome size="large" />,
  type: PermissionType.CATALOGUE,
  order: 1,
  route: "/dashboard",
  children: [
    {
      id: 3,
      label: "Workbench",
      name: "Workbench",
      type: PermissionType.MENU,
      route: "/dashboard/workbench",
      order: 3,
    },
    {
      id: 4,
      label: "User",
      name: "User",
      type: PermissionType.MENU,
      route: "/dashboard/user",
      order: 4,
    },
    {
      id: 6,
      label: "Admin",
      name: "Admin",
      type: PermissionType.MENU,
      route: "/dashboard/admin",
      order: 6,
      children: [
        {
          id: 5,
          label: "children",
          name: "children",
          type: PermissionType.MENU,
          route: "/dashboard/admin/children",
          order: 5,
        },
      ],
    },
  ],
};
// const user: RouteListItemType = {
//     id: 2,
//     label: "User",
//     name: 'User',
//     icon: <IconUser size="large"/>,
//     type: PermissionType.CATALOGUE,
//     route: '/dashboard/user',
//     order: 2,
//     children: [{
//         id: 3,
//         label: "admin",
//         name: 'admin',
//         type: PermissionType.MENU,
//         route: '/admin',
//         order: 3
//     }]
// }
const userManagement: RouteListItemType = {
  id: 7,
  label: "UserManagement",
  name: "UserManagement",
  icon: <IconUser size="large" />,
  type: PermissionType.MENU,
  route: "/userManagement",
  order: 7,
};
const menuLevel1: RouteListItemType = {
  id: 10,
  label: "menu1",
  name: "Menu-1",
  icon: <IconDescend size={"large"} />,
  type: PermissionType.CATALOGUE,
  order: 10,
  route: "/menu1",
  children: [
    {
      id: 11,
      label: "menu1-1",
      name: "menu1-1",
      type: PermissionType.MENU,
      route: "/menu1/menu1-1",
      order: 11,
    },
    {
      id: 12,
      label: "menu1-2",
      name: "menu1-2",
      type: PermissionType.MENU,
      route: "/menu1/menu1-2",
      order: 12,
      children: [
        {
          id: 13,
          label: "menu1-2-1",
          name: "menu1-2-1",
          type: PermissionType.MENU,
          route: "/menu1/menu1-2/menu1-2-1",
          order: 13,
        },
        {
          id: 14,
          label: "menu1-2-2",
          name: "menu1-2-2",
          type: PermissionType.MENU,
          route: "/menu1/menu1-2/menu1-2-2",
          order: 14,
        },
      ],
    },
  ],
};
export const routerList = [dashboard, menuLevel1, userManagement];
