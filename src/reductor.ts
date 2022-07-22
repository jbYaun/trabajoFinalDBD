import {createReducer, on} from '@ngrx/store';
import * as states from './action';
import {RegistroUsuario} from "./interfaces";

export const initialRegistroUsuario: RegistroUsuario = {
  nombre:'',
  apellido: '',
  contrasenia: '',
  correo: '',
  num_doc_ident:  ''
};

const _registroUsuarioReducer = createReducer(
  initialRegistroUsuario,
  on(states.registroUsuario,(states,{nombre,apellido,contrasenia,correo,num_doc_ident})=>(
    {nombre: nombre, contrasenia: contrasenia, correo:correo, apellido: apellido, num_doc_ident: num_doc_ident}
  ))
);

export function registroUsuarioReducer(state: RegistroUsuario, action: any){
  return _registroUsuarioReducer(state,action);
}
