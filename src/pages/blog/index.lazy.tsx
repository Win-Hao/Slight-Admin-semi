import {createLazyFileRoute} from '@tanstack/react-router'

export const Route = createLazyFileRoute('/blog/')({
    component: () => <div>Hello blog!</div>,
})
