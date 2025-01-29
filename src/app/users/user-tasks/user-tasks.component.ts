import { Component, computed, inject, input } from '@angular/core';
import { UsersService } from '../users.service';
import { ActivatedRouteSnapshot, ResolveFn, RouterLink, RouterOutlet, RouterStateSnapshot } from '@angular/router';

@Component({
  selector: 'app-user-tasks',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './user-tasks.component.html',
  styleUrl: './user-tasks.component.css',
})
export class UserTasksComponent {
  // extract dynamic route parameter (path: 'users/:userId') via input binding, accessable only for parent route component:
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

    // static data from routes:
    staticUserName = input.required<string>();

    // dynamic data from routes:
    dynamicUserName = input.required<string>();
}

// dynamic data from routes via function (modern way):
// it will invoked and re-executed every time when this route parameter changes for UserTasksComponent (thats why we dont need subscription here)
export const resolveUserName: ResolveFn<string> = (activatedRoute: ActivatedRouteSnapshot, routeState: RouterStateSnapshot) => {
  const usersService = inject(UsersService);
  const userName = usersService.users.find(user => user.id === activatedRoute.paramMap.get('userId'))?.name || '';

  return userName;
};

// dynamic  for app.config.ts for this component
export const resolveComponentTitle: ResolveFn<string> = (activatedRoute: ActivatedRouteSnapshot, routeState: RouterStateSnapshot) => {
  return resolveUserName(activatedRoute, routeState) + '\'s Tasks';
};