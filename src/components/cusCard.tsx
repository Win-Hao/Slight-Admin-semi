import {HTMLAttributes, ReactNode} from "react";
import {cn} from "@src/utils/motion.ts";
import {Typography} from "@douyinfe/semi-ui";

interface CusCardProps extends HTMLAttributes<HTMLDivElement> {
    title?: string
    children: ReactNode;
}

const CusCard = (props: CusCardProps) => {
    const {children, className, title} = props;
    return (
        <div className={cn('bg-semi-color-bg-1 !p-4 rounded-lg flex flex-col justify-center', className)}>
            {title && <Typography.Title heading={3} type="tertiary" className='!mb-2'>{title}</Typography.Title>}
            {children}
        </div>
    );
};

export default CusCard;