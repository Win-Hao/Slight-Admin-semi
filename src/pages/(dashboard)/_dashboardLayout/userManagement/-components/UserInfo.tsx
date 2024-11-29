import { Avatar, Table, Typography } from "@douyinfe/semi-ui";
import { useSuspenseQuery } from "@tanstack/react-query";
import { userInfoQueryOptions } from "../-service/userQueryOptions";
import { UserInfoType } from "@src/types/users";
import { ColumnProps } from "@douyinfe/semi-ui/lib/es/table";
import { DeleteUser } from "./DeleteUser";
import { EditUser } from "./EditUser";

export const UserInfo = () => {
  const { data, isFetching } = useSuspenseQuery(userInfoQueryOptions);
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
      render: (_, record) => {
        return (
          <div className="flex flex-row gap-4">
            <EditUser userInfo={record} />
            <DeleteUser id={record.id} />
          </div>
        );
      },
    },
  ];
  return (
    <Table
      columns={columns}
      dataSource={data.data?.user}
      pagination={false}
      loading={isFetching}
      rowKey={(record) => String(record?.id)}
    />
  );
};
