import {RouteListItemType} from "#types/entity.ts";
import {flattenRoutes} from "@src/utils";
import {useCallback} from "react";

export default (() => {
    return useCallback((items: RouteListItemType[]) => {
        const basepath = import.meta.env.VITE_BASE_PATH
        const flattenedItems = flattenRoutes(items);
        const LinkItem: Record<string, string> = {}
        flattenedItems.forEach((item) => {
            const route = item.route.startsWith('/') ? item.route.slice(1) : item.route
            LinkItem[item.name] = `${basepath}${route}`
        })
        return LinkItem
    }, [])
})