import {Component} from '@angular/core';
import {Usuario} from '../modelos/usuario';
import {ServicoUsuarios} from './servico/servicousuarios';
import { Router } from '@angular/router';

@Component({
	selector: 'usuarios',
	templateUrl: 'usuarios.component.html',
  	providers: [ServicoUsuarios]
})
export class UsuariosComponent {
	 usuarios: Usuario[];
	 selectedUsuario: Usuario;
	 acao = 'S';
	 segmento = 'STTP';
	 grupo = '';
	 usuario = '';
	 todos='A';
  errorMessage: string;


  constructor(private router: Router,private servicoUsuarios: ServicoUsuarios) {


  //servicoUsuarios.load().then(usuarios => this.usuarios = usuarios )
  servicoUsuarios.load().subscribe(usuarios => this.usuarios = usuarios,
                       error =>  this.errorMessage = <any>error,() => console.log(this.usuarios) );



  }
   novo(): void {
    console.log('novo usuario');
  }

onSelect(usuario: Usuario): void {
	console.log('on select usuario')
	console.log(usuario)
    this.selectedUsuario = usuario;
    this.gotoDetail(usuario)
  }

  gotoDetail(usuario: Usuario): void {
    //console.log('gotoDetail')
    //console.log(usuario)
    this.router.navigate(['/home/usuarios/edit', usuario]);
  }
}
