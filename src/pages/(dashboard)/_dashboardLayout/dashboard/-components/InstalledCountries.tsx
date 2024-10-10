import {Apple} from "@icon-park/react";

interface DataSourceType {
    country: string,
    icon: string,
    android: string,
    windows: string,
    ios: string,
}

const dataSource: DataSourceType[] = [
    {
        country: 'China',
        icon: 'China',
        android: '9.91k',
        windows: '1.95k',
        ios: '1.95k',
    },
    {
        country: 'Australia',
        icon: 'Australia',
        android: '9.91k',
        windows: '1.95k',
        ios: '1.95k',
    },
    {
        country: 'France',
        icon: 'France',
        android: '9.91k',
        windows: '1.95k',
        ios: '1.95k',
    }, {
        country: 'Germany',
        icon: 'Germany',
        android: '9.91k',
        windows: '1.95k',
        ios: '1.95k',
    }
    , {
        country: 'USA',
        icon: 'USA',
        android: '9.91k',
        windows: '1.95k',
        ios: '1.95k',
    },
]

const InstalledCountries = () => {
    return (
        <>
            <main>
                {dataSource.map((item) => (
                    <div className='flex flex-row items-center justify-between !mt-8' key={item.country}>
                        {/*Title*/}
                        <div className='flex flex-row items-center gap-2'>
                            <img src={`/src/assets/images/countries/${item.icon}.png`} alt={item.country}
                                 className='h-6 w-9'/>
                            <span className='!font-bold !text-gray-500'>{item.country}</span>
                        </div>
                        {/*sources*/}
                        <div className='grid grid-cols-3 gap-2'>
                            <div className='flex flex-row gap-1 items-center'>
                                <Apple theme="outline" size="14" className='text-gray-500/40'/>
                                <span className='!font-semibold !text-sm text-gray-400/40'>{item.android}</span>
                            </div>
                            <div className='flex flex-row gap-1 items-center'>
                                <Apple theme="outline" size="14" className='text-gray-500/40'/>
                                <span className='!font-semibold !text-sm text-gray-400/40'>{item.ios}</span>
                            </div>
                            <div className='flex flex-row gap-1 items-center'>
                                <Apple theme="outline" size="14" className='text-gray-500/40'/>
                                <span className='!font-semibold !text-sm text-gray-400/40'>{item.windows}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </main>
        </>
    );
};

export default InstalledCountries;