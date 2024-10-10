import {Rating, Tag} from "@douyinfe/semi-ui";
import Drive from '@src/assets/images/icons/drive.png'
import Discord from '@src/assets/images/icons/discord.png'
import google from '@src/assets/images/icons/google.png'
import {ReactNode} from "react";
import {Apple, Windows} from "@icon-park/react";

interface dataSourceType {
    logo: ReactNode,
    title: string,
    platform: string,
    type: string,
    star: number,
    reviews: string,
}

const dataSource: dataSourceType[] = [
    {
        logo: <img src={google} alt='google' className='h-8 w-8'/>,
        title: 'Chrome',
        platform: 'Mac',
        type: 'free',
        star: 4,
        reviews: '9.99k'
    },
    {
        logo: <img src={Drive} alt='drive' className='h-8 w-8'/>,
        title: 'Drive',
        platform: 'Mac',
        type: 'free',
        star: 3.5,
        reviews: '1.95k'
    },
    {
        logo: <img src={Discord} alt='discord' className='h-8 w-8'/>,
        title: 'Discord',
        platform: 'Windows',
        type: 'free',
        star: 3.5,
        reviews: '8.45k'
    }
]


const RelatedApplications = () => {
    return (
        <>
            <div>
                <main>
                    {dataSource.map((item) => (
                        <div key={item.title} className='flex flex-row items-center justify-between !mt-4'>
                            <div className='flex flex-row items-center gap-2'>
                                {/*logo*/}
                                {item.logo}
                                <div className='flex flex-col justify-center gap-1'>
                                    {/*title*/}
                                    <h1 className='!text-xs !font-bold'>{item.title}</h1>
                                    <div className='flex flex-row items-center gap-2'>
                                        {/*mac or window*/}
                                        <div className='flex flex-row items-center gap-1'>
                                            {item.platform === 'Mac' ?
                                                <Apple theme="outline" size="14" className='text-gray-500'/> :
                                                <Windows theme="outline" size="14" className='text-gray-500'/>}
                                            <span
                                                className='text-gray-500 !text-xs !font-semibold'>{item.platform}</span>
                                        </div>
                                        {/*tag*/}
                                        <Tag color={item.type === 'free' ? 'green' : "red"}>{item.type}</Tag>
                                    </div>
                                </div>
                            </div>
                            <div className='flex flex-col gap-2'>
                                <Rating allowHalf defaultValue={item.star} disabled size='small'/>
                                <span
                                    className='!text-xs !font-semibold text-gray-500/30 text-right'>{item.reviews}</span>
                            </div>
                        </div>
                    ))}
                </main>
            </div>
        </>
    );
};

export default RelatedApplications;