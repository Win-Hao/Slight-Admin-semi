/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './pages/__root'
import { Route as IndexImport } from './pages/index'
import { Route as dashboardDashboardLayoutImport } from './pages/(dashboard)/_dashboardLayout'
import { Route as authAuthLayoutImport } from './pages/(auth)/_authLayout'
import { Route as authAuthLayoutSignUpImport } from './pages/(auth)/_authLayout/signUp'
import { Route as authAuthLayoutLoginImport } from './pages/(auth)/_authLayout/login'
import { Route as dashboardDashboardLayoutUserManagementRouteImport } from './pages/(dashboard)/_dashboardLayout/userManagement/route'
import { Route as dashboardDashboardLayoutAdminIndexImport } from './pages/(dashboard)/_dashboardLayout/admin/index'
import { Route as dashboardDashboardLayoutMenu1Menu11Import } from './pages/(dashboard)/_dashboardLayout/menu1/menu1-1'
import { Route as dashboardDashboardLayoutDashboardWorkbenchImport } from './pages/(dashboard)/_dashboardLayout/dashboard/workbench'
import { Route as dashboardDashboardLayoutDashboardUserImport } from './pages/(dashboard)/_dashboardLayout/dashboard/user'
import { Route as dashboardDashboardLayoutMenu1Menu12Menu122Import } from './pages/(dashboard)/_dashboardLayout/menu1/menu1-2/menu1-2-2'
import { Route as dashboardDashboardLayoutMenu1Menu12Menu121Import } from './pages/(dashboard)/_dashboardLayout/menu1/menu1-2/menu1-2-1'
import { Route as dashboardDashboardLayoutDashboardAdminChildrenImport } from './pages/(dashboard)/_dashboardLayout/dashboard/admin/children'

// Create Virtual Routes

const dashboardImport = createFileRoute('/(dashboard)')()
const authImport = createFileRoute('/(auth)')()
const BlogIndexLazyImport = createFileRoute('/blog/')()

// Create/Update Routes

const dashboardRoute = dashboardImport.update({
  id: '/(dashboard)',
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const authRoute = authImport.update({
  id: '/(auth)',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const BlogIndexLazyRoute = BlogIndexLazyImport.update({
  id: '/blog/',
  path: '/blog/',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./pages/blog/index.lazy').then((d) => d.Route))

const dashboardDashboardLayoutRoute = dashboardDashboardLayoutImport.update({
  id: '/_dashboardLayout',
  getParentRoute: () => dashboardRoute,
} as any)

const authAuthLayoutRoute = authAuthLayoutImport.update({
  id: '/_authLayout',
  getParentRoute: () => authRoute,
} as any)

const authAuthLayoutSignUpRoute = authAuthLayoutSignUpImport.update({
  id: '/signUp',
  path: '/signUp',
  getParentRoute: () => authAuthLayoutRoute,
} as any)

const authAuthLayoutLoginRoute = authAuthLayoutLoginImport.update({
  id: '/login',
  path: '/login',
  getParentRoute: () => authAuthLayoutRoute,
} as any)

const dashboardDashboardLayoutUserManagementRouteRoute =
  dashboardDashboardLayoutUserManagementRouteImport.update({
    id: '/userManagement',
    path: '/userManagement',
    getParentRoute: () => dashboardDashboardLayoutRoute,
  } as any)

const dashboardDashboardLayoutAdminIndexRoute =
  dashboardDashboardLayoutAdminIndexImport.update({
    id: '/admin/',
    path: '/admin/',
    getParentRoute: () => dashboardDashboardLayoutRoute,
  } as any)

const dashboardDashboardLayoutMenu1Menu11Route =
  dashboardDashboardLayoutMenu1Menu11Import.update({
    id: '/menu1/menu1-1',
    path: '/menu1/menu1-1',
    getParentRoute: () => dashboardDashboardLayoutRoute,
  } as any)

const dashboardDashboardLayoutDashboardWorkbenchRoute =
  dashboardDashboardLayoutDashboardWorkbenchImport.update({
    id: '/dashboard/workbench',
    path: '/dashboard/workbench',
    getParentRoute: () => dashboardDashboardLayoutRoute,
  } as any)

const dashboardDashboardLayoutDashboardUserRoute =
  dashboardDashboardLayoutDashboardUserImport.update({
    id: '/dashboard/user',
    path: '/dashboard/user',
    getParentRoute: () => dashboardDashboardLayoutRoute,
  } as any)

const dashboardDashboardLayoutMenu1Menu12Menu122Route =
  dashboardDashboardLayoutMenu1Menu12Menu122Import.update({
    id: '/menu1/menu1-2/menu1-2-2',
    path: '/menu1/menu1-2/menu1-2-2',
    getParentRoute: () => dashboardDashboardLayoutRoute,
  } as any)

const dashboardDashboardLayoutMenu1Menu12Menu121Route =
  dashboardDashboardLayoutMenu1Menu12Menu121Import.update({
    id: '/menu1/menu1-2/menu1-2-1',
    path: '/menu1/menu1-2/menu1-2-1',
    getParentRoute: () => dashboardDashboardLayoutRoute,
  } as any)

const dashboardDashboardLayoutDashboardAdminChildrenRoute =
  dashboardDashboardLayoutDashboardAdminChildrenImport.update({
    id: '/dashboard/admin/children',
    path: '/dashboard/admin/children',
    getParentRoute: () => dashboardDashboardLayoutRoute,
  } as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/(auth)': {
      id: '/(auth)'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof authImport
      parentRoute: typeof rootRoute
    }
    '/(auth)/_authLayout': {
      id: '/(auth)/_authLayout'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof authAuthLayoutImport
      parentRoute: typeof authRoute
    }
    '/(dashboard)': {
      id: '/(dashboard)'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof dashboardImport
      parentRoute: typeof rootRoute
    }
    '/(dashboard)/_dashboardLayout': {
      id: '/(dashboard)/_dashboardLayout'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof dashboardDashboardLayoutImport
      parentRoute: typeof dashboardRoute
    }
    '/blog/': {
      id: '/blog/'
      path: '/blog'
      fullPath: '/blog'
      preLoaderRoute: typeof BlogIndexLazyImport
      parentRoute: typeof rootRoute
    }
    '/(dashboard)/_dashboardLayout/userManagement': {
      id: '/(dashboard)/_dashboardLayout/userManagement'
      path: '/userManagement'
      fullPath: '/userManagement'
      preLoaderRoute: typeof dashboardDashboardLayoutUserManagementRouteImport
      parentRoute: typeof dashboardDashboardLayoutImport
    }
    '/(auth)/_authLayout/login': {
      id: '/(auth)/_authLayout/login'
      path: '/login'
      fullPath: '/login'
      preLoaderRoute: typeof authAuthLayoutLoginImport
      parentRoute: typeof authAuthLayoutImport
    }
    '/(auth)/_authLayout/signUp': {
      id: '/(auth)/_authLayout/signUp'
      path: '/signUp'
      fullPath: '/signUp'
      preLoaderRoute: typeof authAuthLayoutSignUpImport
      parentRoute: typeof authAuthLayoutImport
    }
    '/(dashboard)/_dashboardLayout/dashboard/user': {
      id: '/(dashboard)/_dashboardLayout/dashboard/user'
      path: '/dashboard/user'
      fullPath: '/dashboard/user'
      preLoaderRoute: typeof dashboardDashboardLayoutDashboardUserImport
      parentRoute: typeof dashboardDashboardLayoutImport
    }
    '/(dashboard)/_dashboardLayout/dashboard/workbench': {
      id: '/(dashboard)/_dashboardLayout/dashboard/workbench'
      path: '/dashboard/workbench'
      fullPath: '/dashboard/workbench'
      preLoaderRoute: typeof dashboardDashboardLayoutDashboardWorkbenchImport
      parentRoute: typeof dashboardDashboardLayoutImport
    }
    '/(dashboard)/_dashboardLayout/menu1/menu1-1': {
      id: '/(dashboard)/_dashboardLayout/menu1/menu1-1'
      path: '/menu1/menu1-1'
      fullPath: '/menu1/menu1-1'
      preLoaderRoute: typeof dashboardDashboardLayoutMenu1Menu11Import
      parentRoute: typeof dashboardDashboardLayoutImport
    }
    '/(dashboard)/_dashboardLayout/admin/': {
      id: '/(dashboard)/_dashboardLayout/admin/'
      path: '/admin'
      fullPath: '/admin'
      preLoaderRoute: typeof dashboardDashboardLayoutAdminIndexImport
      parentRoute: typeof dashboardDashboardLayoutImport
    }
    '/(dashboard)/_dashboardLayout/dashboard/admin/children': {
      id: '/(dashboard)/_dashboardLayout/dashboard/admin/children'
      path: '/dashboard/admin/children'
      fullPath: '/dashboard/admin/children'
      preLoaderRoute: typeof dashboardDashboardLayoutDashboardAdminChildrenImport
      parentRoute: typeof dashboardDashboardLayoutImport
    }
    '/(dashboard)/_dashboardLayout/menu1/menu1-2/menu1-2-1': {
      id: '/(dashboard)/_dashboardLayout/menu1/menu1-2/menu1-2-1'
      path: '/menu1/menu1-2/menu1-2-1'
      fullPath: '/menu1/menu1-2/menu1-2-1'
      preLoaderRoute: typeof dashboardDashboardLayoutMenu1Menu12Menu121Import
      parentRoute: typeof dashboardDashboardLayoutImport
    }
    '/(dashboard)/_dashboardLayout/menu1/menu1-2/menu1-2-2': {
      id: '/(dashboard)/_dashboardLayout/menu1/menu1-2/menu1-2-2'
      path: '/menu1/menu1-2/menu1-2-2'
      fullPath: '/menu1/menu1-2/menu1-2-2'
      preLoaderRoute: typeof dashboardDashboardLayoutMenu1Menu12Menu122Import
      parentRoute: typeof dashboardDashboardLayoutImport
    }
  }
}

// Create and export the route tree

interface authAuthLayoutRouteChildren {
  authAuthLayoutLoginRoute: typeof authAuthLayoutLoginRoute
  authAuthLayoutSignUpRoute: typeof authAuthLayoutSignUpRoute
}

const authAuthLayoutRouteChildren: authAuthLayoutRouteChildren = {
  authAuthLayoutLoginRoute: authAuthLayoutLoginRoute,
  authAuthLayoutSignUpRoute: authAuthLayoutSignUpRoute,
}

const authAuthLayoutRouteWithChildren = authAuthLayoutRoute._addFileChildren(
  authAuthLayoutRouteChildren,
)

interface authRouteChildren {
  authAuthLayoutRoute: typeof authAuthLayoutRouteWithChildren
}

const authRouteChildren: authRouteChildren = {
  authAuthLayoutRoute: authAuthLayoutRouteWithChildren,
}

const authRouteWithChildren = authRoute._addFileChildren(authRouteChildren)

interface dashboardDashboardLayoutRouteChildren {
  dashboardDashboardLayoutUserManagementRouteRoute: typeof dashboardDashboardLayoutUserManagementRouteRoute
  dashboardDashboardLayoutDashboardUserRoute: typeof dashboardDashboardLayoutDashboardUserRoute
  dashboardDashboardLayoutDashboardWorkbenchRoute: typeof dashboardDashboardLayoutDashboardWorkbenchRoute
  dashboardDashboardLayoutMenu1Menu11Route: typeof dashboardDashboardLayoutMenu1Menu11Route
  dashboardDashboardLayoutAdminIndexRoute: typeof dashboardDashboardLayoutAdminIndexRoute
  dashboardDashboardLayoutDashboardAdminChildrenRoute: typeof dashboardDashboardLayoutDashboardAdminChildrenRoute
  dashboardDashboardLayoutMenu1Menu12Menu121Route: typeof dashboardDashboardLayoutMenu1Menu12Menu121Route
  dashboardDashboardLayoutMenu1Menu12Menu122Route: typeof dashboardDashboardLayoutMenu1Menu12Menu122Route
}

const dashboardDashboardLayoutRouteChildren: dashboardDashboardLayoutRouteChildren =
  {
    dashboardDashboardLayoutUserManagementRouteRoute:
      dashboardDashboardLayoutUserManagementRouteRoute,
    dashboardDashboardLayoutDashboardUserRoute:
      dashboardDashboardLayoutDashboardUserRoute,
    dashboardDashboardLayoutDashboardWorkbenchRoute:
      dashboardDashboardLayoutDashboardWorkbenchRoute,
    dashboardDashboardLayoutMenu1Menu11Route:
      dashboardDashboardLayoutMenu1Menu11Route,
    dashboardDashboardLayoutAdminIndexRoute:
      dashboardDashboardLayoutAdminIndexRoute,
    dashboardDashboardLayoutDashboardAdminChildrenRoute:
      dashboardDashboardLayoutDashboardAdminChildrenRoute,
    dashboardDashboardLayoutMenu1Menu12Menu121Route:
      dashboardDashboardLayoutMenu1Menu12Menu121Route,
    dashboardDashboardLayoutMenu1Menu12Menu122Route:
      dashboardDashboardLayoutMenu1Menu12Menu122Route,
  }

const dashboardDashboardLayoutRouteWithChildren =
  dashboardDashboardLayoutRoute._addFileChildren(
    dashboardDashboardLayoutRouteChildren,
  )

interface dashboardRouteChildren {
  dashboardDashboardLayoutRoute: typeof dashboardDashboardLayoutRouteWithChildren
}

const dashboardRouteChildren: dashboardRouteChildren = {
  dashboardDashboardLayoutRoute: dashboardDashboardLayoutRouteWithChildren,
}

const dashboardRouteWithChildren = dashboardRoute._addFileChildren(
  dashboardRouteChildren,
)

export interface FileRoutesByFullPath {
  '/': typeof dashboardDashboardLayoutRouteWithChildren
  '/blog': typeof BlogIndexLazyRoute
  '/userManagement': typeof dashboardDashboardLayoutUserManagementRouteRoute
  '/login': typeof authAuthLayoutLoginRoute
  '/signUp': typeof authAuthLayoutSignUpRoute
  '/dashboard/user': typeof dashboardDashboardLayoutDashboardUserRoute
  '/dashboard/workbench': typeof dashboardDashboardLayoutDashboardWorkbenchRoute
  '/menu1/menu1-1': typeof dashboardDashboardLayoutMenu1Menu11Route
  '/admin': typeof dashboardDashboardLayoutAdminIndexRoute
  '/dashboard/admin/children': typeof dashboardDashboardLayoutDashboardAdminChildrenRoute
  '/menu1/menu1-2/menu1-2-1': typeof dashboardDashboardLayoutMenu1Menu12Menu121Route
  '/menu1/menu1-2/menu1-2-2': typeof dashboardDashboardLayoutMenu1Menu12Menu122Route
}

export interface FileRoutesByTo {
  '/': typeof dashboardDashboardLayoutRouteWithChildren
  '/blog': typeof BlogIndexLazyRoute
  '/userManagement': typeof dashboardDashboardLayoutUserManagementRouteRoute
  '/login': typeof authAuthLayoutLoginRoute
  '/signUp': typeof authAuthLayoutSignUpRoute
  '/dashboard/user': typeof dashboardDashboardLayoutDashboardUserRoute
  '/dashboard/workbench': typeof dashboardDashboardLayoutDashboardWorkbenchRoute
  '/menu1/menu1-1': typeof dashboardDashboardLayoutMenu1Menu11Route
  '/admin': typeof dashboardDashboardLayoutAdminIndexRoute
  '/dashboard/admin/children': typeof dashboardDashboardLayoutDashboardAdminChildrenRoute
  '/menu1/menu1-2/menu1-2-1': typeof dashboardDashboardLayoutMenu1Menu12Menu121Route
  '/menu1/menu1-2/menu1-2-2': typeof dashboardDashboardLayoutMenu1Menu12Menu122Route
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/(auth)': typeof authRouteWithChildren
  '/(auth)/_authLayout': typeof authAuthLayoutRouteWithChildren
  '/(dashboard)': typeof dashboardRouteWithChildren
  '/(dashboard)/_dashboardLayout': typeof dashboardDashboardLayoutRouteWithChildren
  '/blog/': typeof BlogIndexLazyRoute
  '/(dashboard)/_dashboardLayout/userManagement': typeof dashboardDashboardLayoutUserManagementRouteRoute
  '/(auth)/_authLayout/login': typeof authAuthLayoutLoginRoute
  '/(auth)/_authLayout/signUp': typeof authAuthLayoutSignUpRoute
  '/(dashboard)/_dashboardLayout/dashboard/user': typeof dashboardDashboardLayoutDashboardUserRoute
  '/(dashboard)/_dashboardLayout/dashboard/workbench': typeof dashboardDashboardLayoutDashboardWorkbenchRoute
  '/(dashboard)/_dashboardLayout/menu1/menu1-1': typeof dashboardDashboardLayoutMenu1Menu11Route
  '/(dashboard)/_dashboardLayout/admin/': typeof dashboardDashboardLayoutAdminIndexRoute
  '/(dashboard)/_dashboardLayout/dashboard/admin/children': typeof dashboardDashboardLayoutDashboardAdminChildrenRoute
  '/(dashboard)/_dashboardLayout/menu1/menu1-2/menu1-2-1': typeof dashboardDashboardLayoutMenu1Menu12Menu121Route
  '/(dashboard)/_dashboardLayout/menu1/menu1-2/menu1-2-2': typeof dashboardDashboardLayoutMenu1Menu12Menu122Route
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | '/'
    | '/blog'
    | '/userManagement'
    | '/login'
    | '/signUp'
    | '/dashboard/user'
    | '/dashboard/workbench'
    | '/menu1/menu1-1'
    | '/admin'
    | '/dashboard/admin/children'
    | '/menu1/menu1-2/menu1-2-1'
    | '/menu1/menu1-2/menu1-2-2'
  fileRoutesByTo: FileRoutesByTo
  to:
    | '/'
    | '/blog'
    | '/userManagement'
    | '/login'
    | '/signUp'
    | '/dashboard/user'
    | '/dashboard/workbench'
    | '/menu1/menu1-1'
    | '/admin'
    | '/dashboard/admin/children'
    | '/menu1/menu1-2/menu1-2-1'
    | '/menu1/menu1-2/menu1-2-2'
  id:
    | '__root__'
    | '/'
    | '/(auth)'
    | '/(auth)/_authLayout'
    | '/(dashboard)'
    | '/(dashboard)/_dashboardLayout'
    | '/blog/'
    | '/(dashboard)/_dashboardLayout/userManagement'
    | '/(auth)/_authLayout/login'
    | '/(auth)/_authLayout/signUp'
    | '/(dashboard)/_dashboardLayout/dashboard/user'
    | '/(dashboard)/_dashboardLayout/dashboard/workbench'
    | '/(dashboard)/_dashboardLayout/menu1/menu1-1'
    | '/(dashboard)/_dashboardLayout/admin/'
    | '/(dashboard)/_dashboardLayout/dashboard/admin/children'
    | '/(dashboard)/_dashboardLayout/menu1/menu1-2/menu1-2-1'
    | '/(dashboard)/_dashboardLayout/menu1/menu1-2/menu1-2-2'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  authRoute: typeof authRouteWithChildren
  dashboardRoute: typeof dashboardRouteWithChildren
  BlogIndexLazyRoute: typeof BlogIndexLazyRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  authRoute: authRouteWithChildren,
  dashboardRoute: dashboardRouteWithChildren,
  BlogIndexLazyRoute: BlogIndexLazyRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/(auth)",
        "/(dashboard)",
        "/blog/"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/(auth)": {
      "filePath": "(auth)",
      "children": [
        "/(auth)/_authLayout"
      ]
    },
    "/(auth)/_authLayout": {
      "filePath": "(auth)/_authLayout.tsx",
      "parent": "/(auth)",
      "children": [
        "/(auth)/_authLayout/login",
        "/(auth)/_authLayout/signUp"
      ]
    },
    "/(dashboard)": {
      "filePath": "(dashboard)",
      "children": [
        "/(dashboard)/_dashboardLayout"
      ]
    },
    "/(dashboard)/_dashboardLayout": {
      "filePath": "(dashboard)/_dashboardLayout.tsx",
      "parent": "/(dashboard)",
      "children": [
        "/(dashboard)/_dashboardLayout/userManagement",
        "/(dashboard)/_dashboardLayout/dashboard/user",
        "/(dashboard)/_dashboardLayout/dashboard/workbench",
        "/(dashboard)/_dashboardLayout/menu1/menu1-1",
        "/(dashboard)/_dashboardLayout/admin/",
        "/(dashboard)/_dashboardLayout/dashboard/admin/children",
        "/(dashboard)/_dashboardLayout/menu1/menu1-2/menu1-2-1",
        "/(dashboard)/_dashboardLayout/menu1/menu1-2/menu1-2-2"
      ]
    },
    "/blog/": {
      "filePath": "blog/index.lazy.tsx"
    },
    "/(dashboard)/_dashboardLayout/userManagement": {
      "filePath": "(dashboard)/_dashboardLayout/userManagement/route.tsx",
      "parent": "/(dashboard)/_dashboardLayout"
    },
    "/(auth)/_authLayout/login": {
      "filePath": "(auth)/_authLayout/login.tsx",
      "parent": "/(auth)/_authLayout"
    },
    "/(auth)/_authLayout/signUp": {
      "filePath": "(auth)/_authLayout/signUp.tsx",
      "parent": "/(auth)/_authLayout"
    },
    "/(dashboard)/_dashboardLayout/dashboard/user": {
      "filePath": "(dashboard)/_dashboardLayout/dashboard/user.tsx",
      "parent": "/(dashboard)/_dashboardLayout"
    },
    "/(dashboard)/_dashboardLayout/dashboard/workbench": {
      "filePath": "(dashboard)/_dashboardLayout/dashboard/workbench.tsx",
      "parent": "/(dashboard)/_dashboardLayout"
    },
    "/(dashboard)/_dashboardLayout/menu1/menu1-1": {
      "filePath": "(dashboard)/_dashboardLayout/menu1/menu1-1.tsx",
      "parent": "/(dashboard)/_dashboardLayout"
    },
    "/(dashboard)/_dashboardLayout/admin/": {
      "filePath": "(dashboard)/_dashboardLayout/admin/index.tsx",
      "parent": "/(dashboard)/_dashboardLayout"
    },
    "/(dashboard)/_dashboardLayout/dashboard/admin/children": {
      "filePath": "(dashboard)/_dashboardLayout/dashboard/admin/children.tsx",
      "parent": "/(dashboard)/_dashboardLayout"
    },
    "/(dashboard)/_dashboardLayout/menu1/menu1-2/menu1-2-1": {
      "filePath": "(dashboard)/_dashboardLayout/menu1/menu1-2/menu1-2-1.tsx",
      "parent": "/(dashboard)/_dashboardLayout"
    },
    "/(dashboard)/_dashboardLayout/menu1/menu1-2/menu1-2-2": {
      "filePath": "(dashboard)/_dashboardLayout/menu1/menu1-2/menu1-2-2.tsx",
      "parent": "/(dashboard)/_dashboardLayout"
    }
  }
}
ROUTE_MANIFEST_END */
