import { Component } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'voizfonica';
  description= 'Angular-Fire-Voizfonica';
  items:Observable<any[]>;

  constructor(public db: AngularFireDatabase){
    this.items=db.list('items').valueChanges();
  }
}
