import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';

import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})

export class AuthInterceptor implements HttpInterceptor  {

  constructor(
      private token: TokenService,
      private router: Router
  ) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let authReq = req;
    const token = this.token.getToken();
    if (token !== null) {
        authReq = req.clone({
            headers: req.headers.set('Authorization', 'Token ' + token)
        });
    } else {
      this.token.signOut();
      this.router.navigate(['/']);
    }

    return next.handle(authReq);
  }
}
