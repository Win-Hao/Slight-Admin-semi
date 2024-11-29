import { Button, Form, Toast } from "@douyinfe/semi-ui";
import { zodResolver } from "@hookform/resolvers/zod";
import { EditTwo } from "@icon-park/react";
import { editUser } from "@src/api/users";
import { CustomModal } from "@src/components/commons/CustomModal";
import { FormInputField } from "@src/components/commons/FormField/FormInputField";
import { FormTextAreaField } from "@src/components/commons/FormField/FormTextAreaField";
import { UserInfoType } from "@src/types/users";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";

interface EditUserProps {
  userInfo: UserInfoType;
}

const formSchema = z.object({
  username: z.string().min(1, { message: "Username is required" }),
  email: z.string().email(),
  description: z.string(),
});
export type ValidationSchema = z.infer<typeof formSchema>;

export const EditUser = ({ userInfo }: EditUserProps) => {
  const queryClient = useQueryClient();
  const [visible, setVisible] = useState(false);
  const defaultValues = { ...userInfo };
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ValidationSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: defaultValues,
  });
  const handleOpen = () => {
    // 每次打开模态框时更新表单的默认值
    reset(defaultValues);
    setVisible(true);
  };
  const handleCancel = () => {
    reset(defaultValues);
    setVisible(false);
  };
  const editUserMutation = useMutation({
    mutationFn: (data: ValidationSchema & { id: number }) => editUser(data),
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["users"] });
      Toast.success({ content: data.msg, duration: 2 });
      handleCancel();
    },
  });
  const onSubmit: SubmitHandler<ValidationSchema> = (data) => {
    editUserMutation.mutate({ ...data, id: userInfo.id });
  };
  return (
    <>
      <Button
        className="!rounded-full !h-auto"
        icon={
          <EditTwo
            theme="outline"
            size="20"
            className="fill-semi-color-primary"
          />
        }
        onClick={handleOpen}
      />

      <CustomModal
        title="Edit User"
        visible={visible}
        onOk={handleSubmit(onSubmit)}
        confirmLoading={editUserMutation.isPending}
        onCancel={handleCancel}
      >
        <Form
          wrapperCol={{ span: 18 }}
          labelCol={{ span: 6 }}
          labelPosition="left"
          labelAlign="right"
          className="flex flex-col gap-8"
        >
          <FormInputField<ValidationSchema>
            name="username"
            label="用户名"
            required
            control={control}
            errors={errors}
            placeholder={"Username"}
          />
          <FormInputField<ValidationSchema>
            name="email"
            label="邮箱"
            control={control}
            errors={errors}
            placeholder={"Email"}
          />
          <FormTextAreaField<ValidationSchema>
            name="description"
            label="描述"
            control={control}
            errors={errors}
            placeholder="Description"
            maxCount={100}
          />
        </Form>
      </CustomModal>
    </>
  );
};
