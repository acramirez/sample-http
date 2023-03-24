import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  isLoggedIn(): boolean {
    // aquí comprueba si el usuario está conectado
    // por ejemplo, puedes verificar si hay un token de autenticación en el almacenamiento local
    // y si el token es válido
    return true;
  }

}
