import {Progress, Typography} from "@douyinfe/semi-ui";
import {HTMLAttributes, ReactNode, useEffect, useRef, useState} from "react";
import {cn} from "@src/utils/motion.ts";

interface ProgressCardProps extends HTMLAttributes<HTMLDivElement> {
    number: number,
    title: string,
    icon: ReactNode,
}

const ProgressCard = (props: ProgressCardProps) => {
    const {number, title, icon, className} = props;
    const [percentInterval, setPercentInterval] = useState(0);
    const timer = useRef<NodeJS.Timeout | null>(null);
    useEffect(() => {
        timer.current = setTimeout(
            () => {
                setPercentInterval(percentInterval > 100 ? 0 : percentInterval + 3);
            },
            percentInterval === 0 || percentInterval > 100 ? 1200 : 290 - (percentInterval % 50) * 3
        );
        return () => {
            if (timer.current) clearTimeout(timer.current);
        }
    }, [percentInterval]);
    return (
        <>
            <div className='flex flex-row gap-4 items-center '>
                <Progress
                    percent={percentInterval}
                    strokeGradient={true}
                    strokeWidth={8}
                    type="circle"
                    stroke=''
                    showInfo
                    className={cn('text-white !text-xl', className)}
                    width={100}
                />
                <div className='flex flex-col justify-center'>
                    <Typography.Title className='!text-white'>{number}</Typography.Title>
                    <p className='text-gray-400'>{title}</p>
                </div>
            </div>
            {icon}
        </>
    )

        ;
};

export default ProgressCard;