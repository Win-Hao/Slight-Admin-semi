import {faker} from "@faker-js/faker";
import {Like, Trophy} from "@icon-park/react";

interface DataSourceType {
    fullName: string;
    avatar: string;
    nice: number
}

const TopAuthors = () => {
    const dataSource: DataSourceType[] = Array.from({length: 3}, () => ({
        fullName: faker.person.fullName(), // 使用 faker 生成一个随机全名
        avatar: faker.image.avatar(), // 使用 faker 生成随机头像 URL
        nice: faker.number.int({min: 1, max: 100}) // 使用 faker 生成一个 1 到 100 之间的随机整数
    }))
    console.log(dataSource)
    return (
        <>
            {dataSource.map((item) => (
                <div className='flex flex-row items-center justify-between !mt-8'>
                    {/*avatar*/}
                    <div className='flex flex-row items-center gap-3'>
                        <img src={item.avatar} alt={item.fullName} className='h-10 w-10 rounded-full'/>
                        <div className='flex flex-col justify-center gap-1'>
                            <h1 className='!text-sm !font-bold text-gray-500/50'>{item.fullName}</h1>
                            <div className='flex flex-row items-center gap-2'>
                                <Like theme="filled" size="14" className='text-semi-color-primary'/>
                                <span className='text-gray-400/40 !text-sm !font-semibold'>{item.nice}</span>
                            </div>
                        </div>
                    </div>
                    {/*cup*/}
                    <div className='border border-semi-color-primary rounded-full !p-2'>
                        <Trophy theme="filled" size="30"
                                className={`text-yellow-500`}/>
                    </div>
                </div>
            ))}
        </>
    );
};

export default TopAuthors;