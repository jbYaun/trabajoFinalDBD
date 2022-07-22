import {createReducer, on} from '@ngrx/store';
import * as states from './action';
import {RegistroUsuario} from "./interfaces";

export const initialRegistroUsuario: RegistroUsuario = {
  nombres:'',
  apellidos: '',
  contrasenia: '',
  correo: '',
  num_doc_ident:  ''
};

const _registroUsuarioReducer = createReducer(
  initialRegistroUsuario,
  on(states.registroUsuario,(states,{nombres,apellidos,contrasenia,correo,num_doc_ident})=>(
    {nombres: nombres, contrasenia: contrasenia, correo:correo, apellidos: apellidos, num_doc_ident: num_doc_ident}
  ))
);

export function registroUsuarioReducer(state: RegistroUsuario, action: any){
  return _registroUsuarioReducer(state,action);
}
