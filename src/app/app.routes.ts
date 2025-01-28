import { Routes } from "@angular/router";
import { TasksComponent } from "./tasks/tasks.component";
import { NoTaskComponent } from "./tasks/no-task/no-task.component";
import { UserTasksComponent } from "./users/user-tasks/user-tasks.component";

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
        component: UserTasksComponent
    }
]