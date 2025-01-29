import { Component, input, inject, computed } from '@angular/core';

import { TaskComponent } from './task/task.component';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  standalone: true,
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
  imports: [TaskComponent],
})
export class TasksComponent {
  private tasksService = inject(TasksService);

  // extract dynamic route parameter (path: 'users/:userId') via input binding, accessable via paramsInheritanceStrategy config
  userId = input.required<string>();

  userTasks = computed(() => 
    this.tasksService.allTasks().filter((task) => task.userId === this.userId())
  );

}
