import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {BehaviorSubject, Observable, Subject, throwError} from "rxjs";
import {Cliente, RegistroUsuario, TipoDocIdent} from "./interfaces";
import {retry, catchError} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json;charset=utf-8'
    })
  };

  errorHandl(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }

  url: string = `http://127.0.0.1:8080/buscar-productos-nombre`;
  url2: string = `http://127.0.0.1:8080/buscar-producto`;

  constructor(private http: HttpClient) {
  }

  registrarUsuario(data: RegistroUsuario): Observable<RegistroUsuario>{
    return this.http.post<RegistroUsuario>('http://127.0.0.1:8080/registrar-usuario', data, this.httpOptions).pipe(retry(1),
      catchError(this.errorHandl)
    );
  }
}
