import { Avatar, Table, Tag } from "@douyinfe/semi-ui";
import { ReactNode } from "react";
import { TagColor } from "@douyinfe/semi-ui/lib/es/tag";
import { Correct, Error, MessageOne } from "@icon-park/react";
import { AvatarColor } from "@douyinfe/semi-ui/lib/es/avatar";
import { ColumnProps } from "@douyinfe/semi-ui/lib/es/table";

interface DataType {
  key: string;
  name: string;
  nameIconSrc: string;
  size: string;
  owner: string;
  status: string;
  updateTime: string;
  avatarBg: AvatarColor | undefined;
}

const WorkTable = () => {
  const columns: ColumnProps<DataType>[] = [
    {
      title: "标题",
      dataIndex: "name",
      render: (text, record) => {
        return (
          <div>
            <Avatar
              size="small"
              shape="square"
              src={record.nameIconSrc}
              style={{ marginRight: 12 }}
            ></Avatar>
            {text}
          </div>
        );
      },
    },
    {
      title: "大小",
      dataIndex: "size",
    },
    {
      title: "交付状态",
      dataIndex: "status",
      render: (text) => {
        const tagConfig: Record<
          string,
          {
            color: TagColor | undefined;
            prefixIcon: ReactNode;
            text: string;
          }
        > = {
          success: {
            color: "green",
            prefixIcon: (
              <Correct
                theme="outline"
                size="12"
                fill="var(--semi-color-success)"
              />
            ),
            text: "已交付",
          },
          pending: {
            color: "pink",
            prefixIcon: (
              <Error
                theme="outline"
                size="12"
                fill="var(--semi-color-danger)"
              />
            ),
            text: "已延期",
          },
          wait: {
            color: "cyan",
            prefixIcon: <MessageOne theme="outline" size="12" fill="cyan" />,
            text: "待评审",
          },
        };
        const tagProps = tagConfig[text];
        return (
          <Tag shape="circle" {...tagProps} style={{ userSelect: "text" }}>
            {tagProps.text}
          </Tag>
        );
      },
    },
    {
      title: "所有者",
      dataIndex: "owner",
      render: (text, record) => {
        return (
          <div>
            <Avatar
              size="small"
              color={record.avatarBg}
              style={{ marginRight: 4 }}
            >
              {text.slice(0, 1)}
            </Avatar>
            {text}
          </div>
        );
      },
    },
    {
      title: "更新日期",
      dataIndex: "updateTime",
    },
  ];
  const data = [
    {
      key: "1",
      name: "Semi Design 设计稿.fig",
      nameIconSrc:
        "https://lf3-static.bytednsdoc.com/obj/eden-cn/ptlz_zlp/ljhwZthlaukjlkulzlp/figma-icon.png",
      size: "2M",
      owner: "姜鹏志",
      status: "success",
      updateTime: "2020-02-02 05:13",
      avatarBg: "grey",
    },
    {
      key: "2",
      name: "Semi Design 分享演示文稿",
      nameIconSrc:
        "https://lf3-static.bytednsdoc.com/obj/eden-cn/ptlz_zlp/ljhwZthlaukjlkulzlp/docs-icon.png",
      size: "2M",
      owner: "郝宣",
      status: "pending",
      updateTime: "2020-01-17 05:31",
      avatarBg: "red",
    },
    {
      key: "3",
      name: "设计文档",
      nameIconSrc:
        "https://lf3-static.bytednsdoc.com/obj/eden-cn/ptlz_zlp/ljhwZthlaukjlkulzlp/docs-icon.png",
      size: "34KB",
      status: "wait",
      owner: "Zoey Edwards",
      updateTime: "2020-01-26 11:01",
      avatarBg: "light-blue",
    },
  ] as DataType[];
  return (
    <Table
      columns={columns}
      dataSource={data}
      pagination={false}
      rowKey={(record) => record!.key}
    />
  );
};

export default WorkTable;
