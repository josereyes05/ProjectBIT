import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';
import { HechizosService } from '../../services/hechizos.service';
/* pa usar las funciones pa llamar al backend
ps llamamos al service que fue donde hicimos esas funciones :)*/

@Component({
  selector: 'app-hechizos',
  templateUrl: './hechizos.component.html',
  styleUrls: ['./hechizos.component.css']
})
export class HechizosComponent {
  constructor(
    public hechizosService: HechizosService,
    private toastr: ToastrService,) {}
  
    ngOnInit(): void{
      this.getAllHec();
      /*
      aqui es pa que cuando se inicie el front
      cargue tooodos los datos o la funcion ahí llamada
      */
    }

    /*addHec(form: NgForm){
    if(!this.hechizosService.selectedHec.nombre || !this.hechizosService.selectedHec.efecto){
      this.toastr.error('Todos los campos son necesrios', 'error')
    }else{
      this.toastr.success('agregado', this.hechizosService.selectedHec.nombre)
      this.hechizosService.createHec(form.value).subscribe((res)=>{
        console.log('res: ', res);
        
        this.getAllHec()
        Llamas a la funcion de llamarlas todas para que cuando la guardes la 
        veas enseguida

         el subscribe esta reciviendo esto 
        return this.http.post(this.urlBackend, hechizo)
        y si sale bien da a res y se sale mal da a err :)
        asocialo a una promesa de js con el .then y el .catch
        
      },
      (err)=>{
        console.log('err: ', err);
      })
    }
  }*/

  getAllHec(){
    this.hechizosService.readAllHec().subscribe(
      (res) => {
        this.hechizosService.hechizos = res.allHechizos
        //asignale al arreglo lo que esta en el res.allHechizos
      },
      (err) => {
        console.log('err', err);
      }
    )
  }

  editHec(hec: any){
    this.hechizosService.selectedHec = hec
  }

  delHec(id: string | any){
    /*id es un string pero pon el any para que no tire mas errores en un futuro*/
    this.hechizosService.deleteHec(id).subscribe(
      (res) => {
        this.toastr.show(`se eliminó: ${id}`, 'eliminación')
        this.getAllHec()
      },
      (err) => {
        console.log(err);
      }
    )
  }

  handleSubmithec(form: NgForm){
    if(form.value._id){
      this.hechizosService.updateHec(form.value).subscribe(
        (res) => {
          form.reset();
          this.getAllHec();
          console.log('res: ', res)
          this.toastr.info('Esta actualizadisisisisisimo')
        },
        (err) => {
          console.log(err);
        }
      )
    } else{
        
      if(!this.hechizosService.selectedHec.nombre 
        || !this.hechizosService.selectedHec.efecto){
        this.toastr.error('Todos los campos son necesrios', 'error')
      }else{
          this.toastr.success('agregado', this.hechizosService.selectedHec.nombre)
        this.hechizosService.createHec(form.value).subscribe(
          (res)=>{
          console.log('res: ', res);
          this.getAllHec()
          /*Llamas a la funcion de llamarlas todas para que cuando la guardes la 
          veas enseguida*/
          
          form.reset()
          /*esto es pa que el formulario se resetee*/

          /* el subscribe esta reciviendo esto 
          return this.http.post(this.urlBackend, hechizo)
          y si sale bien da a res y se sale mal da a err :)
          asocialo a una promesa de js con el .then y el .catch
          */
        },
        (err)=>{
          console.log('err: ', err);
        })
      }
    }
  }

  resetForm(form : NgForm){
    form.reset()
    this.hechizosService.selectedHec = {
      nombre: '',
      efecto: '',
      mortal: false
    },
    this.getAllHec()
  }
}
