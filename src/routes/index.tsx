import React from "react";
import { Page1 } from "../pages/Page1";
import { Page2 } from "../pages/Page2";
import { PageSolo } from "../pages/PageSolo";

export interface IRouter {
    path: string;
    element: React.ComponentType;
}

export enum RouteNames {
    PAGE1 = '/',
    PAGE2 = '/page',
    PAGESOLO = '/page/:pageId'
}

export const publicRoutes: IRouter[] = [
    { path: RouteNames.PAGE1, element: Page1 },
    { path: RouteNames.PAGE2, element: Page2 },
    { path: RouteNames.PAGESOLO, element: PageSolo },
]