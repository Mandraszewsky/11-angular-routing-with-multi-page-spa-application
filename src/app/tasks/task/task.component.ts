import { Component, inject, input } from '@angular/core';
import { DatePipe } from '@angular/common';

import { type Task } from './task.model';
import { CardComponent } from '../../shared/card/card.component';
import { TasksService } from '../tasks.service';
// import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-task',
  standalone: true,
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
  imports: [DatePipe, CardComponent],
})
export class TaskComponent {
  task = input.required<Task>();
  private tasksService = inject(TasksService);

  // programmatic navigation example:
  // private router = inject(Router);
  // private activatedRoute = inject(ActivatedRoute);

  onComplete() {
    this.tasksService.removeTask(this.task().id);

    // programmatic navigation example:
    // this.router.navigate(['./'], {
    //   relativeTo: this.activatedRoute,
    //   onSameUrlNavigation: 'reload',
    //   queryParamasHandling: 'preserve',
    // });
    // also in app.routes.ts for this component, runGuardsAndResolvers needs to be set up as 'always'
  }
}
