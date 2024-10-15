import {createFileRoute} from '@tanstack/react-router'

export const Route = createFileRoute(
    '/(dashboard)/_dashboardLayout/dashboard/admin/children',
)({
    component: () => (
        <div className=''>Hello admin children!</div>
    ),
})
