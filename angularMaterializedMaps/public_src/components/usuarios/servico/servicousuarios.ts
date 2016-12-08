import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

import { Usuario } from '../../modelos/usuario';

@Injectable()
export class ServicoUsuarios {
    url = 'http://201.24.26.23/servicosttpsiterest/api/servicosttpsite/ConsultaUsuarios?acao=S&segmento=STTP&grupo=&usuario=&todos=AFONSO%20LIGORIO%20DE%20BRITO';
    usuario: any = null;


    constructor(public http: Http) { }

    load(): Observable<Usuario[]> {
    return this.http.get(this.url)
      .map(res => <Usuario[]>res.json());
  }
  

}