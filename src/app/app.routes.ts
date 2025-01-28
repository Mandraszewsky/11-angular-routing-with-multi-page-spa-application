import { Routes } from "@angular/router";
import { TasksComponent } from "./tasks/tasks.component";
import { NoTaskComponent } from "./tasks/no-task/no-task.component";
import { UserTasksComponent } from "./users/user-tasks/user-tasks.component";
import { NewTaskComponent } from "./tasks/new-task/new-task.component";

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
                path: 'tasks', //users/userId/tasks
                component: TasksComponent,
            },
            {
                path: 'tasks/new',
                component: NewTaskComponent,
            }
        ]
    }
]