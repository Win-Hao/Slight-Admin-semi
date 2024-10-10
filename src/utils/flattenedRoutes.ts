import {RouteListItemType} from "#types/entity.ts";

export function flattenRoutes(routes: RouteListItemType[]) {
    return routes.reduce((prev, item) => {
        const {id, label, name, icon, type, route, children} = item
        const newItem = {id, label, name, icon, type, route}
        prev.push(newItem as RouteListItemType)
        if (children) {
            prev.push(...flattenRoutes(children))
        }
        return prev
    }, [] as RouteListItemType[])
}