import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { HechizosComponent } from './components/hechizos/hechizos.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { authGuard } from './guards/auth.guard';
//importamos los componentes pa poder enrutarlos en el front :)

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'login', component: LoginComponent},
  //papi  lo del path es la ruta
  {path:'hechizos', component: HechizosComponent, canActivate: [authGuard]},
  // el canactivate el lo que pide el true o el false del guard

  /*los ** son en caso de cualquier maricada :)
  tipo una ruta que no existe ajaj*/
  {path:'**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
