import { CanActivateFn } from '@angular/router';
import { inject } from '@angular/core'; 
import {  Router } from '@angular/router';
import { LoginService } from '../services/login.service';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const loginService = inject(LoginService);
  /*aqui inyectamos el enrutador pa proteger la ruta de hechizos:)
  si no tas logueado*/
  if(loginService.isLogged()){
    return true
  }else{
    router.navigate(['/login'])
    return false
    /*aqui estoy redirigiendo a login si intentas entrar
    a hechizos si no tas logueado:)
    y el Guard pide true y false para saber si puede o no activar la ruta*/
  }
};
