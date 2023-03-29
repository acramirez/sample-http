import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  constructor(
    private router: Router
  ) {}

  validateToken(token?: string): void {
    if (token && token != undefined) {
      this.redirect(token);
    }
  }

  redirect(token?: string): void {
    switch (token) {
      // success - 200
      case '3Wx70vPbGpHJNZl1tq69':
        this.router.navigate(['success']);
        break;
      // not found - 404
      case 'B5fUDzXhj9gRnLkE71mw':
        this.router.navigate(['not-found']);
        break;
      //  internal server error - 500
      case 'yQc2SdW4nZvLjK1hgsTp':
        this.router.navigate(['internal-server-error']);
        break;
      // unauthorized - 401
      case 'G6xL4vDwKjHbC7q3t8Pz':
        this.router.navigate(['unauthorized']);
        break;
      // unauthorized - 401
      default:
        this.router.navigate(['/unauthorized']);
        break;
    }
  }
}
