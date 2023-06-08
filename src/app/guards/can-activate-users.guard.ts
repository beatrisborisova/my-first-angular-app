import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { UserService } from '../services/user.service';

export const canActivateUsersGuard: CanActivateFn = (route, state) => {

  const userService = inject(UserService)
  const router = inject(Router)

  if (userService.isUserAuthenticated()) {
    return true
  }

  router.navigate(['/login'])
  return false;
};
