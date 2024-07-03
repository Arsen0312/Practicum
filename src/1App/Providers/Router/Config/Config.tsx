import React from "react";
import {RouteProps} from "react-router-dom"
import {Main} from "../../../../2Pages/Main";

enum AppRoutes {
    MAIN = "main",

    NOT_FOUND = "not_found",
}

export type AppRouteProps = RouteProps & {}

export const RoutePaths: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: "/",
    //last
    [AppRoutes.NOT_FOUND]: "*"
};


export const routerConfig: Record<AppRoutes, AppRouteProps> = {
    [AppRoutes.MAIN]: {
        path: RoutePaths.main,
        element: <Main/>
    },
    [AppRoutes.NOT_FOUND]: {
        path: RoutePaths.not_found,
        element: <div>Not Found</div>
    }
};