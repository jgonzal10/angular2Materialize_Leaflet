import { Injectable } from '@angular/core';
import {Http, Response, Headers, RequestOptions} from "@angular/http";
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

//import {Usuario} from '../../dashboard/modelos/usuario'

@Injectable()
export class ServicoLogin {
    url = '';
    data: any = null;
   // u: Usuario;


    constructor(public http: Http) { }

     login(usuario:string, senha:string){

    // let user = this.u;
    //return user;
  }    
/*
     login3(usuario, senha): Observable<Usuario[]> {
     console.log('inside login service')
     console.log(usuario)
     console.log(senha)
    return this.http.post().subscribe(
      (res:any)=>{

        let data = res.json();
      }
    );
  }
*/
    login2(usuario:string, senha:string) {
        /*return this.http.post('', JSON.stringify({ usuario: usuario, senha: senha }))
            .map((response: Response) => {
                // login successful if there's a jwt token in the response
                let user = response.json();
                if (user && user.token) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(user));
                }
            });*/

            return {codigo:'1',nome:'Teresio',perfil:'A', segmento:'STTP', grupo:'1'};
    }



}