import {Breadcrumb} from "@douyinfe/semi-ui";
import {useChildMatches} from "@tanstack/react-router";
import {routerList} from "@src/config/routerList.tsx";
import {RouteListItemType} from "#types/entity.ts";

const CustomBreadcrumb = () => {
    const childMatches = useChildMatches()
    const findRouteLabel = (pathname: string, routesArray: RouteListItemType[]): string[] | undefined => {
        // let routeLabelArray = [] as string[]
        // routesArray.forEach(route => {
        //     if (route.route === pathname) {
        //         routeLabelArray.push(route.label)
        //     }
        //     if (route.children) {
        //         const nestedLabels = findRouteLabel(pathname, route.children);
        //         if (nestedLabels) {
        //             routeLabelArray.push(route.label)
        //             routeLabelArray = routeLabelArray.concat(nestedLabels)
        //         }
        //     }
        // })
        // return routeLabelArray
        for (const route of routesArray) {
            if (route.route === pathname) {
                return [route.label];
            }
            if (route.children) {
                const nestedLabels = findRouteLabel(pathname, route.children);
                if (nestedLabels) {
                    return [route.label, ...nestedLabels];
                }
            }
        }
    };


    const breadcrumbs = findRouteLabel(childMatches[0].pathname, [...routerList])

    return (
        <Breadcrumb moreType={'popover'}>
            {breadcrumbs?.map((breadcrumb) => (<Breadcrumb.Item key={breadcrumb}>{breadcrumb}</Breadcrumb.Item>))}
        </Breadcrumb>
    );
};

export default CustomBreadcrumb;