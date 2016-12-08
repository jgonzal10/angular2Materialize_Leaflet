import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UsuariosComponent } from './usuarios.component';

@NgModule({
    imports: [CommonModule, RouterModule],
    declarations: [UsuariosComponent],
    exports: [UsuariosComponent]
})

export class UsuariosModule { }