import {Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AuthService } from '../../auth/auth.service';

import {ServicoLogin} from './servico/servicologin';

@Component({
    selector: "login",
    template: require<any>("./login.component.html"),
    styles: [
        require<any>("./login.component.less"),
        require<any>("../../styles/main.less")
    ],
    providers: [AuthService]
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  error = false;
  errorMessage = '';

  constructor(
    private fb: FormBuilder,
    private authService: AuthService) {}

  onSignin() {
    this.authService.signIn(this.form.value);
  }

  ngOnInit():any {
    this.form = this.fb.group({
        nome: ['', Validators.required],
        senha: ['', Validators.required],
    });
  }

}
