import { Component, OnInit } from '@angular/core';
import {RegistroUsuario, TipoDocIdent, Usuario} from "../../interfaces";
import {FormGroup} from "@angular/forms";
import {Observable} from "rxjs";
import {CargaScriptsService} from "../../cargaScripts";
import {ApiService} from "../../apiService";
import {Router} from "@angular/router";
import {Store, select} from "@ngrx/store";
import * as action from '../action';

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

  form?: FormGroup;
  usuarioregistro?: RegistroUsuario;
  usuario?: Usuario;

  registroUsuario$: Observable<any>;
  registroUsuario: RegistroUsuario;


  constructor(private cargaScripts: CargaScriptsService, private api: ApiService, private router: Router, private storeSesion: Store<{registroUsuario:any}>) {
    cargaScripts.cargaStyles(["adminlte.min", "all.min", "icheck-bootstrap.min"]);
  }

  ngOnInit(): void {
    const usuario: RegistroUsuario = {
      apellido: '',
      nombre: '',
      num_doc_ident: '',
      correo: '',
      contrasenia: ''
    }
  }
}
