import {Component, OnInit } from '@angular/core';
import { MaterializeModule } from 'angular2-materialize';
import { FormGroup, FormArray, FormBuilder, Validators } from '@angular/forms';
import { RouterModule, ActivatedRoute } from '@angular/router';
import {ServicoLogin} from './servico/servicologin';

@Component({
    selector: "login",
    template: require<any>("./login.component.html"),
    styles: [
        require<any>("./login.component.less"),
        require<any>("../../styles/main.less")
    ],
    providers: [ServicoLogin]
})
export class LoginComponent implements OnInit {
	public myForm: FormGroup;
    data: any;

    constructor(private servicoLogin: ServicoLogin, private _fb: FormBuilder) {



    }

    ngOnInit() {
        // we will initialize our form model here
        this.myForm = this._fb.group({
             login: ['login'],
            senha: ['xxxx']

        });

    }



    save(model:any) {
    
        let usuario =model;
        console.log(model);
        //this.router.navigate(['/home/usuarios']);

    }

}
