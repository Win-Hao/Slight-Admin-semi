import {createFileRoute} from '@tanstack/react-router'

export const Route = createFileRoute(
    '/(dashboard)/_dashboardLayout/dashboard/user',
)({
    component: () => <div>Hello user!</div>,
})
