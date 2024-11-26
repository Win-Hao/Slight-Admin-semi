import { Avatar, Button, Card, Table, Typography } from "@douyinfe/semi-ui";
import { createFileRoute } from "@tanstack/react-router";
import { IconMore } from "@douyinfe/semi-icons";
import { userInfoQueryOptions } from "./-service/userQueryOptions";
import { useSuspenseQuery } from "@tanstack/react-query";
import { ColumnProps } from "@douyinfe/semi-ui/lib/es/table";
import { UserInfoType } from "@src/types/users";

export const Route = createFileRoute(
  "/(dashboard)/_dashboardLayout/userManagement"
)({
  loader: ({ context: { queryClient } }) =>
    queryClient.ensureQueryData(userInfoQueryOptions),
  component: UserManagement,
});

function UserManagement() {
  const { data } = useSuspenseQuery(userInfoQueryOptions);
  const columns: ColumnProps<UserInfoType>[] = [
    {
      title: "ID",
      dataIndex: "id",
    },
    {
      title: "用户名",
      dataIndex: "username",
      render: (text, record) => {
        return (
          <div className="flex flex-row items-center gap-2">
            <Avatar src={record.avatar} />
            <div className="flex flex-col gap-1 justify-center">
              <Typography.Title heading={6}>{text}</Typography.Title>
              <Typography.Text type="secondary">{record.email}</Typography.Text>
            </div>
          </div>
        );
      },
    },
    {
      title: "角色",
      dataIndex: "role",
    },
    {
      title: "描述",
      dataIndex: "description",
    },
    {
      title: "",
      dataIndex: "operate",
      render: () => {
        return <IconMore />;
      },
    },
  ];
  return (
    <div className="flex flex-col gap-4">
      <Card title="用户管理">
        用户管理，在此你可以查看用户信息，修改用户信息，删除用户信息等等。
      </Card>
      <Card
        title={
          <Button size="large" type="primary" theme="solid">
            新增用户
          </Button>
        }
      >
        <Table
          columns={columns}
          dataSource={data.data?.user}
          pagination={false}
        />
      </Card>
    </div>
  );
}
