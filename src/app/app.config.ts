import { ApplicationConfig } from "@angular/core";
import { provideRouter, withComponentInputBinding, withRouterConfig } from "@angular/router";
import { routes } from "./app.routes";

export const appConfig: ApplicationConfig = {
    // withComponentInputBinding - configuration object passed to provider, telling that input binding is enabled (setter for input is in UserTasksComponent)
    providers: [
        provideRouter(routes, withComponentInputBinding(), withRouterConfig({
            paramsInheritanceStrategy: 'always', // dynamic path parameters will be injected to child components
        }))
    ],
}