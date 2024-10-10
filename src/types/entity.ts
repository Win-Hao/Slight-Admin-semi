import {ReactNode} from "react";
import {PermissionType} from "#types/enum.ts";

export interface MenuItemType {
    itemKey: string,
    text: string,
    icon: ReactNode,
    items?: MenuItemType[]
}

export interface RouteListItemType {
    id: number
    label: string
    name: string
    icon?: ReactNode
    type: PermissionType
    route: string
    order: number,
    children?: RouteListItemType[]
}