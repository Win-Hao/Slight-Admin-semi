import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/(dashboard)/_dashboardLayout/admin/')({
  component: () => <div>Hello /(dashboard)/admin/!</div>,
})
