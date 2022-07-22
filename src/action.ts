import {createAction, props} from '@ngrx/store';
import {RegistroUsuario} from "./interfaces";

export const registroUsuario = createAction('registroUsuario', props<RegistroUsuario>());

