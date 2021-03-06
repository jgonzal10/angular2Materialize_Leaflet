import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { Usuario } from './user.interface';

@Injectable()
export class AuthService {

  private authenticated = false;

  constructor(private router: Router) {}

  signIn(user: Usuario) {
    console.log('here I am')
    if (user.login === 'user' && user.senha === '123456'){
      this.authenticated = true;
      this.router.navigate(['/usuarios']);
    } else {
      this.authenticated = false;
    }
  }

  logout() {
    this.authenticated = false;
    this.router.navigate(['/login']);
  }

  isAuthenticated() {
    return this.authenticated;
  }
}
