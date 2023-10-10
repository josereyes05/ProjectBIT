export class Hechizos {
    constructor(_id: string, nombre: string, efecto: string, mortal: boolean){
        /*lo de arriba es una funcion constructora*/
        this._id = _id;
        this.nombre = nombre;
        this.efecto = efecto;
        this.mortal = mortal;
        /* con los this se refiere a lo de abajo y hay con el 
        = le asignamos que va a ser el this. igual :)
        */
        /*
        los nombres de los objetos tienen que ser iguales que en el postman
        */
    }
    _id?:string;
    nombre:string;
    efecto:string;
    mortal:boolean;
    /*se repiten aqui abajo pa que el ts nos deje usarlos despues 
    */
}