import { Component, ElementRef, ViewChild } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';
import { HechizosService } from '../../services/hechizos.service';
import Swal from 'sweetalert2';

/* pa usar las funciones pa llamar al backend
ps llamamos al service que fue donde hicimos esas funciones :)*/

@Component({
  selector: 'app-hechizos',
  templateUrl: './hechizos.component.html',
  styleUrls: ['./hechizos.component.css']
})
export class HechizosComponent {
  hecQueEli : string | any;
  constructor(
    public hechizosService: HechizosService,
    private toastr: ToastrService,) {
      this.hecQueEli = '';
      //le damo qui valo a la variable :)
    }

  
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

  getOne(nombre: string){
    this.hechizosService.readOneHec(nombre).subscribe(
      (res) => {
        this.hechizosService.hechizos = res.msg
        if(!nombre) {
          this.toastr.warning('Introduce algun hechizo bro');
          this.getAllHec()
        }
        console.log(res);
      },
      (err) => {
        console.log('err: ', err);
      }
    )
  }

  editHec(hec: any){
    this.hechizosService.selectedHec = hec
  }

  delHec(id: string | any){
    /*id es un string pero pon el any para que no tire mas errores en un futuro*/
    Swal.fire({
      title: '¿Estás seguro?',
      text: "Si lo quieres de vuelta crealo de nuevo :(",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#DC3545',
      cancelButtonColor: '#FFC107',
      confirmButtonText: 'Sipi, eliminalo :)',
      background: '#5C246F url(../../../assets/fondo.jpg)',
      color: '#ffff00c7'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: 'Eliminadisimo',
          text: "Tu hechizo fue eliminado :(",
          icon: 'error',
          background: '#5C246F url(../../../assets/fondo.jpg)',
          color: '#ffff00c7'
        })
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
    }) 
  }

  confDel(hec_id: string | any){
    this.hecQueEli = hec_id
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
        this.hechizosService.createHec(form.value).subscribe(
          (res)=>{
          console.log('res: ', res);
          this.toastr.success('agregado', this.hechizosService.selectedHec.nombre)
          
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
          this.toastr.error(err.error.msg)
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
