import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { ServiceService } from '../services/service.service';

export const authGuard: CanActivateFn = (route, state) => {
  const service = inject(ServiceService);
  const router = inject(Router);
  if (service.isLoggedIn()) {
    return true
  }
  else{
    router.navigateByUrl('login');
    return false
  }
};
