import { Component, input, inject, computed } from '@angular/core';

import { TaskComponent } from './task/task.component';
import { TasksService } from './tasks.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-tasks',
  standalone: true,
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
  imports: [TaskComponent, RouterLink],
})
export class TasksComponent {
  private tasksService = inject(TasksService);

  // extract dynamic route parameter (path: 'users/:userId') via input binding, accessable via paramsInheritanceStrategy config
  userId = input.required<string>();
  // query parameters:
  order = input<'asc' | 'desc'>('desc'); // this will be set automatically thanks by withComponentInputBinding() configuration, delivered in app.config.ts

  userTasks = computed(() =>
    this.tasksService.allTasks().filter((task) => task.userId === this.userId()).sort((a, b) => {
      if (this.order() === 'desc') {
        return a.id > b.id ? -1 : 1;
      }
      else {
        return a.id > b.id ? 1 : -1;
      }
    })
  );

}
