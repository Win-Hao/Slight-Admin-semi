import { Avatar, Dropdown } from "@douyinfe/semi-ui";
import { useAuth } from "@src/hooks/useAuth";
import { useNavigate } from "@tanstack/react-router";

interface ItemsType {
  type: "title" | "item" | "divider" | "logout";
  label?: string;
  clickHandler?: () => void;
}

const AvatarDropdown = () => {
  const navigate = useNavigate();
  const { signOut } = useAuth();
  const items: ItemsType[] = [
    { type: "title", label: "Admin" },
    { type: "item", label: "758494478@qq.com" },
    {
      type: "divider",
    },
    {
      type: "item",
      label: "Dashboard",
      clickHandler: () => {
        navigate({ to: "/dashboard/workbench" }).then();
      },
    },
    {
      type: "logout",
      label: "Logout",
      clickHandler: () => {},
    },
  ];
  return (
    <>
      <Dropdown
        trigger={"click"}
        showTick
        position={"bottomRight"}
        render={
          <Dropdown.Menu>
            {items.map((item, index) => {
              switch (item.type) {
                case "title":
                  return (
                    <Dropdown.Title key={index}>{item.label}</Dropdown.Title>
                  );
                case "item":
                  return (
                    <Dropdown.Item key={index} onClick={item.clickHandler}>
                      {item.label}
                    </Dropdown.Item>
                  );
                case "divider":
                  return <Dropdown.Divider key={index} />;
                case "logout":
                  return (
                    <Dropdown.Item
                      key={index}
                      type="danger"
                      onClick={() => {
                        signOut();
                        navigate({ to: "/login" }).then();
                      }}
                    >
                      logout
                    </Dropdown.Item>
                  );
              }
            })}
          </Dropdown.Menu>
        }
      >
        <Avatar
          className="transition-all hover:scale-110 duration-300"
          color="orange"
          size="small"
        >
          YJ
        </Avatar>
      </Dropdown>
    </>
  );
};

export default AvatarDropdown;
