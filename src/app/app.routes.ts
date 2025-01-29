import { Routes } from "@angular/router";
import { TasksComponent } from "./tasks/tasks.component";
import { NoTaskComponent } from "./tasks/no-task/no-task.component";
import { UserTasksComponent } from "./users/user-tasks/user-tasks.component";
import { NewTaskComponent } from "./tasks/new-task/new-task.component";
import { NotFoundComponent } from "./not-found/not-found.component";

export const routes: Routes = [
    {
        path: '',
        component: NoTaskComponent,
    },
    {
        // static route: 
        // path: 'tasks',
        // component: TasksComponent,

        // dynamic route, "/:" syntax tells angular that is dynamic segment:
        path: 'users/:userId',
        component: UserTasksComponent,
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
        ]
    },
    {
        path: '**', //when no other path matches, this path will be activated
        component: NotFoundComponent,
    },
]