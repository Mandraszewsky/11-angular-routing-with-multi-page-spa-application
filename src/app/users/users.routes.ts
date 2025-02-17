import { Routes } from "@angular/router";
import { TasksComponent } from "../tasks/tasks.component";
import { NewTaskComponent } from "../tasks/new-task/new-task.component";
import { TasksService } from "../tasks/tasks.service";

export const routes: Routes = [
    {
        path: '',
        providers: [TasksService],
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
    },
]