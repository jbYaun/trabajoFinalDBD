import { Component, OnInit } from '@angular/core';
import {RegistroUsuario, TipoDocIdent, Usuario} from "../../interfaces";
import {FormGroup} from "@angular/forms";
import {Observable} from "rxjs";
import {CargaScriptsService} from "../../cargaScripts";
import {ApiService} from "../../apiService";
import {Router} from "@angular/router";
import {Store, select} from "@ngrx/store";

/* import * as action from '../action'; */

@Component({
  selector: 'app-inventario',
  templateUrl: './addempleado.component.html',
  styleUrls: ['./addempleado.component.scss']
})
export class AddempleadoComponent implements OnInit {

  nombre: String = '';
  apellido: String = '';
  contrasena: String = '';
  correo: String = '';
  numero_doc: String = '';

  mensaje: string = '';

  constructor(private api: ApiService, private router: Router) {
  }

  ngOnInit(): void {

  }

  registrar(): void{
    const usuario: RegistroUsuario = {
      nombres: this.nombre,
      apellidos: this.apellido,
      num_doc_ident: this.numero_doc,
      correo: this.correo,
      contrasenia: this.contrasena
    }

    this.api.registrarUsuario(usuario).subscribe(respuesta => {
      this.mensaje = "usuario Creado";
    })

  }
}
