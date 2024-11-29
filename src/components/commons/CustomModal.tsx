import { Modal } from "@douyinfe/semi-ui";
import { ModalReactProps } from "@douyinfe/semi-ui/lib/es/modal";
interface CustomModalProps extends Omit<ModalReactProps, "onCancel"> {
  onCancel: () => void;
}
export const CustomModal = ({
  onCancel,
  onOk,
  visible,
  children,
  title,
  maskClosable = false,
  ...others
}: CustomModalProps) => {
  return (
    <Modal
      title={title}
      visible={visible}
      onCancel={onCancel}
      onOk={onOk}
      centered
      keepDOM={false}
      lazyRender={true}
      closeOnEsc={true}
      maskClosable={maskClosable}
      {...others}
    >
      {children}
    </Modal>
  );
};
