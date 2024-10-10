import {Typography} from "@douyinfe/semi-ui";
import data from "@src/assets/images/data.png";
import CusCard from "@src/components/cusCard.tsx";

const WelcomeCard = () => {
    return (
        <CusCard className='!bg-semi-color-primary-light-default'>
            <div className='flex flex-col lg:flex-row lg:justify-between items-center justify-center gap-2'>
                <div className='order-2 lg:order-1 text-center lg:text-left w-full lg:max-w-80'>
                    <Typography.Title className='!text-semi-color-primary'>
                        Welcome back Slight Admin👋
                    </Typography.Title>
                    <p className='!mt-2 !text-sm text-semi-color-primary-disabled'>Hello This is Slight admin
                        which is
                        made
                        by
                        semi-design,I hope you can
                        learn more about
                        react and semi-design through this project</p>
                </div>
                <img src={data} alt='' className='w-72 h-72 lg:w-80 lg:h-80 order-1 lg:order-2'/>
            </div>
        </CusCard>
    );
};

export default WelcomeCard;