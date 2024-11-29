import { Button, Form, Toast } from "@douyinfe/semi-ui";
import { zodResolver } from "@hookform/resolvers/zod";
import { createUser } from "@src/api/users";
import { CustomModal } from "@src/components/commons/CustomModal";
import { FormInputField } from "@src/components/commons/FormField/FormInputField";
import { FormTextAreaField } from "@src/components/commons/FormField/FormTextAreaField";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
  username: z.string().min(1, { message: "Username is required" }),
  email: z.string().email(),
  description: z.string(),
});
export type ValidationSchema = z.infer<typeof formSchema>;

export const CreateUser = () => {
  const queryClient = useQueryClient();
  const [visible, setVisible] = useState(false);
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ValidationSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
      description: "",
    },
  });
  const onSubmit: SubmitHandler<ValidationSchema> = (data) => {
    createUserMutation.mutate(data);
  };
  const createUserMutation = useMutation({
    mutationFn: (data: ValidationSchema) => createUser(data),
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["users"] });
      Toast.success({ content: data.msg, duration: 2 });
      setVisible(false);
      reset();
    },
    onError: (error) => {
      Toast.error({ content: error.message, duration: 3 });
    },
  });
  return (
    <>
      <Button
        size="large"
        type="primary"
        theme="solid"
        onClick={() => setVisible(true)}
      >
        新增用户
      </Button>
      <CustomModal
        title="Create User"
        visible={visible}
        onOk={handleSubmit(onSubmit)}
        confirmLoading={createUserMutation.isPending}
        onCancel={() => {
          setVisible(false);
          reset();
        }}
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
