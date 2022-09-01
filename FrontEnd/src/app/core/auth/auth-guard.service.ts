import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

import { NzMessageService } from 'ng-zorro-antd/message';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate {

  constructor(private tokenService: TokenService, public router: Router, private message: NzMessageService) {}

  canActivate(): boolean {
    if (this.tokenService.getToken() === null) {
      this.message.info('Login expirado, logue novamente!');
      this.router.navigate(['/login']);
      return false;
    }
    return true;
  }
}
