import { Button, Popconfirm, Toast } from "@douyinfe/semi-ui";
import { useState } from "react";
import { IconAlertTriangle } from "@douyinfe/semi-icons";
import { DeleteFive } from "@icon-park/react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteUser } from "@src/api/users";

interface DeleteUserProps {
  id: number;
}

export const DeleteUser = ({ id }: DeleteUserProps) => {
  const queryClient = useQueryClient();
  const [visible, setVisible] = useState(false);
  const deleteUserMutation = useMutation({
    mutationFn: (id: number) => deleteUser(id),
    onSuccess(data) {
      queryClient.invalidateQueries({ queryKey: ["users"] });
      setVisible(false);
      Toast.success({ content: data.msg, duration: 2 });
    },
  });
  return (
    <Popconfirm
      okType="danger"
      icon={
        <IconAlertTriangle
          style={{ color: "var(--semi-color-danger)" }}
          size="extra-large"
        />
      }
      visible={visible}
      onCancel={() => setVisible(false)}
      onConfirm={() => deleteUserMutation.mutate(id)}
      okButtonProps={{ loading: deleteUserMutation.isPending }}
      position="bottomRight"
      trigger="custom"
      title="确定是否要保存此修改？"
      content="此修改将不可逆"
    >
      <Button
        onClick={() => setVisible(true)}
        icon={<DeleteFive theme="outline" size="20" />}
        className="!rounded-full !h-auto"
      />
    </Popconfirm>
  );
};
