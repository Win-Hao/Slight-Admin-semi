import {createFileRoute} from '@tanstack/react-router'
import WelcomeCard from "@src/pages/(dashboard)/_dashboardLayout/dashboard/-components/WelcomeCard.tsx";
import {MessageOne, User} from "@icon-park/react";
import CusCard from "@src/components/cusCard.tsx";
import ProgressCard from "@src/pages/(dashboard)/_dashboardLayout/dashboard/-components/ProgressCard.tsx";
import WorkTable from "@src/pages/(dashboard)/_dashboardLayout/dashboard/-components/WorkTable.tsx";
import RelatedApplications from "@src/pages/(dashboard)/_dashboardLayout/dashboard/-components/RelatedApplications.tsx";
import InstalledCountries from "@src/pages/(dashboard)/_dashboardLayout/dashboard/-components/InstalledCountries.tsx";
import TopAuthors from "@src/pages/(dashboard)/_dashboardLayout/dashboard/-components/TopAuthors.tsx";

export const Route = createFileRoute(
    '/(dashboard)/_dashboardLayout/dashboard/workbench',
)({
    component: Workbench
})

function Workbench() {
    return (

        <>
            <div className='flex flex-col lg:grid lg:grid-cols-3 gap-3'>
                <div className='lg:col-span-2'>
                    <WelcomeCard/>
                </div>
                <div className='lg:col-span-1 flex flex-col gap-3 justify-center'>
                    <CusCard className='!bg-semi-color-primary flex-1 flex flex-row justify-between overflow-hidden'>
                        <ProgressCard
                            number={3333}
                            title={'conversion'}
                            className='stroke-semi-color-primary-light-default'
                            icon={<User
                                theme='outline'
                                size='127'
                                className='text-semi-color-primary-light-default'/>}
                        />
                    </CusCard>
                    <CusCard className='!bg-cyan-600/20 flex-1 flex flex-row justify-between overflow-hidden'>
                        <ProgressCard
                            number={4232}
                            title={'Application'}
                            className='stroke-cyan-500'
                            icon={<MessageOne
                                theme="outline"
                                size='127'
                                className='text-cyan-500'/>}
                        />
                    </CusCard>
                </div>
            </div>
            <div className='!mt-3 flex flex-col lg:grid lg:grid-cols-3 gap-3'>
                <div className='col-span-2'>
                    <CusCard title='table'>
                        <WorkTable/>
                    </CusCard>
                </div>
                <div className='col-span-1'>
                    <CusCard title='Top Related Applications'>
                        <RelatedApplications/>
                    </CusCard>
                </div>
            </div>
            <div className='!mt-3 flex flex-col lg:grid lg:grid-cols-2 gap-3'>
                <div className='col-span-1'>
                    <CusCard title='Top Installed Counries'>
                        <InstalledCountries/>
                    </CusCard>
                </div>
                <div className='col-span-1'>
                    <CusCard>
                        <TopAuthors/>
                    </CusCard>
                </div>
            </div>
        </>

    )
}
