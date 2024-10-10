import {RouteListItemType} from "#types/entity.ts";
import {flattenRoutes} from "@src/utils";
import {useCallback} from "react";

export default (() => {
    return useCallback((items: RouteListItemType[]) => {
        const flattenedItems = flattenRoutes(items);
        const LinkItem: Record<string, string> = {}
        flattenedItems.forEach((item) => {
            LinkItem[item.name] = item.route
        })
        return LinkItem
    }, [])
})