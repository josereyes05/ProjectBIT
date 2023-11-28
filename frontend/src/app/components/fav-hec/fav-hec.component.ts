import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AppState } from 'src/app/app.state';
import { Hechizos } from 'src/app/interfaces/schema';
import { delFavHec } from 'src/app/store/hec.action';


@Component({
  selector: 'app-fav-hec',
  templateUrl: './fav-hec.component.html',
  styleUrls: ['./fav-hec.component.css']
})
export class FavHecComponent {

  hec: Hechizos[] = []

  constructor(
    private store: Store<AppState>
  ) {}

  ngOnInit(){

    this.store.pipe(select('favHec')).subscribe((hec: Hechizos[]) => {
      this.hec = hec
    })

  }


  delFavHec(_id: number){
    this.store.dispatch(delFavHec({_id}))
  }


}
