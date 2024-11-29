import { Form } from "@douyinfe/semi-ui";
import { CommonFieldProps } from "@douyinfe/semi-ui/lib/es/form";
import { InputProps } from "@douyinfe/semi-ui/lib/es/input";
import { Controller, FieldValues, Path, UseFormReturn } from "react-hook-form";

interface FormInputFieldProps<TFormInput extends FieldValues>
  extends Omit<CommonFieldProps, "field" | "initValue">,
    Omit<InputProps, "defaultValue"> {
  name: Path<TFormInput>;
  control: UseFormReturn<TFormInput>["control"];
  errors: UseFormReturn<TFormInput>["formState"]["errors"];
  required?: boolean;
}
export const FormInputField = <TFromInput extends FieldValues>({
  name,
  control,
  errors,
  required,
  ...others
}: FormInputFieldProps<TFromInput>) => {
  return (
    <div>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <Form.Input
            field={name}
            rules={[{ required, message: "" }]}
            initValue={field.value}
            {...field}
            validateStatus={errors[name] ? "error" : "default"}
            fieldStyle={{ padding: 0 }}
            {...others}
          />
        )}
      />
      {errors[name] && (
        <Form.Slot style={{ padding: 0 }}>
          <Form.ErrorMessage error={errors[name].message as string} />
        </Form.Slot>
      )}
    </div>
  );
};
