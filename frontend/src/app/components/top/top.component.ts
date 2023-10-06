import { Component } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.css'],
})
export class TopComponent {
  constructor(public loginservice: LoginService){}
  //lo ponemos publico pa que lo podamos usar en el html de esta carpeta :)
}
