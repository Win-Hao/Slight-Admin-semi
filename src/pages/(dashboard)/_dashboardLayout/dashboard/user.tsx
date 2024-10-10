import {createFileRoute} from '@tanstack/react-router'

export const Route = createFileRoute(
    '/(dashboard)/_dashboardLayout/dashboard/user',
)({
    component: () => <div>Hello /(dashboard)/dashboard/user!Hello /(dashboard)/dashboard/user!Hello
        /(dashboard)/dashboard/user!Hello /(dashboard)/dashboard/user!</div>,
})
