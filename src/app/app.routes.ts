import { Routes } from "@angular/router";
import { TasksComponent } from "./tasks/tasks.component";
import { NoTaskComponent } from "./tasks/no-task/no-task.component";
import { resolveComponentTitle, resolveUserName, UserTasksComponent } from "./users/user-tasks/user-tasks.component";
import { NewTaskComponent } from "./tasks/new-task/new-task.component";
import { NotFoundComponent } from "./not-found/not-found.component";

export const routes: Routes = [
    {
        path: '',
        component: NoTaskComponent,
        title: 'No task selected' // static title
    },
    {
        // static route: 
        // path: 'tasks',
        // component: TasksComponent,

        // dynamic route, "/:" syntax tells angular that is dynamic segment:
        path: 'users/:userId',
        component: UserTasksComponent,
        title: resolveComponentTitle, // dynamic title
        children: [
            {
                path: '', // redirection to /tasks, the difference between prefix and full parameter is how they checks url
                redirectTo: 'tasks',
                pathMatch: 'prefix',
            },
            {
                path: 'tasks', //users/userId/tasks
                component: TasksComponent,
            },
            {
                path: 'tasks/new',
                component: NewTaskComponent,
            }
        ],
        // static data:
        data: {
            staticUserName: 'staticUserName'
        },
        // dynamic data:
        resolve: {
            dynamicUserName: resolveUserName
        }
    },
    {
        path: '**', //when no other path matches, this path will be activated
        component: NotFoundComponent,
    },
]