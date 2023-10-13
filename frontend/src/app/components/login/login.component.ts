
import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { ToastrService } from 'ngx-toastr';
import { JwtHelperService } from '@auth0/angular-jwt';
//esto es pa que las peticiones entren a esta carpeta :)

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor( private loginservise: LoginService, 
    private router: Router,
    private toastr: ToastrService,
    private jwtHelper: JwtHelperService){}
  //aqui es la instancia para que el login service funcione aqui:)

    user = {
      email: '',
      password: ''
    };
    //user es ps lo que vamos a pedir:)

    login(){
      if (!this.user.email || !this.user.password) {
        this.toastr.info('Todas los campos son necesrios', 'ojo!')
        //el toastr es pa unos avisos o alerts mas bonitos
      }else{
        
      this.loginservise.login(this.user).subscribe(
        //aqui llamamos con metodos osea lo (sd.sda.sa) y en subscribe la respuesta:) 
        (res) => {
          if(res.token){
            console.log(res.token);
          localStorage.setItem("token", res.token)
          /*aqui estamos guardando en el sistema el token :)
          el localStorage va a pares así ("token", res.token)*/
          
          const decoded = this.jwtHelper.decodeToken(res.token)
          //aqui cogemos el token y lo decodificamos pa poder saludar con usrname :)
          
          this.toastr.success(`Hi ${decoded.name}!`, 'welcome!')
          //esto es para saludar si todo sale bien
          
          this.router.navigate(['/hechizos'])
          /*aqui redirigimos al usuario a la pagina de hechizos depues de que su
          inicio de sesion sea valido*/
        }else{
          this.toastr.error(
            `${res.msg}`, 'Error'
          )
        }
        },
        (err) => {
          this.toastr.error('error', 'error')
        }
      )
    }
      }
    }