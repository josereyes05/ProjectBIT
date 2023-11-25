import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  //se crea al crear el servicio
  constructor(private http: HttpClient, private router: Router) {}
  /* el private le dice que toodo esto lo de aqui existe aqui en este archivo no se ve afuera
  esto de arriba es como una clase que tiene la funcion http que 
  nos ayuda a hacer la peticion al backend*/


  login(user: any){
    /*esta funcion sirve pa hacer la consulta al Backend
    el post es un metodo del http :)
    el user es lo que vamos a recibir del login :)*/
    return this.http.post<any>(`${environment.urlBackend}/login/`, user);
  }

  isLogged() {
    if(localStorage.getItem('token')){
      return true
      //true por si existe el token
    }else{
      return false
      //false por si no existe el token
    }
  }

  logOut (){
    localStorage.removeItem('token');
    this.router.navigate(['/login'])
  }
}
