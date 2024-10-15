import {createFileRoute} from '@tanstack/react-router'
import CusCard from "@src/components/cusCard.tsx";

export const Route = createFileRoute(
    '/(dashboard)/_dashboardLayout/menu1/menu1-1',
)({
    component: () => (
        <CusCard>Hello menu1-1!</CusCard>
    ),
})
