import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Hechizos } from "../interfaces/schema";
import { environment } from 'src/environments/environment';
/* siempre que en este archivo se menciona Hechizos con mayuscula
nos referimos al esquema pa :) ojo con confundirse 
*/

@Injectable({
  providedIn: 'root'
})
export class HechizosService {

  constructor(private http: HttpClient) { }
  /* aqui ponemos la peticion a la api */

  hechizos: Hechizos[] = [];
  //el [] es donde vamos a guardar tooooodos los Hechizos que lleguen en readAllHec
  /* aqui le digo que el objeto hechizos es de tipo Hechizos
  y que es un []de hechizos  */
  selectedHec: Hechizos = {
    nombre: "",
    efecto: "",
    mortal: false
  }
  
  createHec(hechizo: Hechizos){ 
    //vamos a hacer la petición al backend
    console.log(hechizo);
    return this.http.post(`${environment.urlBackend}/hechizos/`, hechizo)
    /*aqui retornamos la instancia de http llamada post
    yyyyy de ahí le damos la segunda que es hechizo que es la peticion:)*/
  }
  
  readAllHec(){ 
    return this.http.get<any>(`${environment.urlBackend}/hechizos/`)
    //hacemos la peticion al back
  }

  readOneHec(nombre : string){
    return this.http.get<any>(`${environment.urlBackend}/hechizos/${nombre}`)
  }
  
  updateHec(hechizo: Hechizos){
    return this.http.put(`${environment.urlBackend}/hechizos/${hechizo._id}`, hechizo)
    /*aqui pedimos el id y el url al back y lo que hay en el cuerpo del hechizo*/
  }
  
  deleteHec(id: string){
    return this.http.delete(`${environment.urlBackend}/hechizos/${id}`)
    /*recuerda que pa eliminar pediste en la api el id entonces
    pones el url que tiraste arriba yyy pones / pa que a la hora de ejecutarse 
    se una con el id*/
  }
}
