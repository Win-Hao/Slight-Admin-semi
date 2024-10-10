import {useCallback} from "react";
import {MenuItemType, RouteListItemType} from "#types/entity.ts";

export default (() => {
    const routeToMenuFn = useCallback((items: RouteListItemType[]) => {
        return items.map((item) => {
            const menuItem = {} as MenuItemType
            const {icon, children} = item
            menuItem.itemKey = item.name
            menuItem.text = item.label
            if (icon) {
                menuItem.icon = item.icon
            }
            if (children) {
                menuItem.items = routeToMenuFn(children)
            }
            return menuItem
        })
    }, [])
    return routeToMenuFn
})