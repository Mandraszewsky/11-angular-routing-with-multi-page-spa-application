import { Component, computed, inject, input } from '@angular/core';
import { UsersService } from '../users.service';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-user-tasks',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './user-tasks.component.html',
  styleUrl: './user-tasks.component.css',
})
export class UserTasksComponent {
  // extract dynamic route parameter (path: 'users/:userId') via input binding:
  userId = input.required<string>();

  private userService = inject(UsersService);

  userName = computed(() => this.userService.users.find(user => user.id === this.userId())?.name);

  // extract dynamic route parameter (path: 'users/:userId') via observables (older way & more complex):
  // private activatedRoute = inject(ActivatedRoute);
  // userName = '';

  // ngOnInit(): void {
  //   this.activatedRoute.paramMap.subscribe({
  //     next: paramMap => {
  //       this.userName = this.userService.users.find(user => user.id === paramMap.get('userId'))?.name || '',
  //     }
  //   });
  // }
}
