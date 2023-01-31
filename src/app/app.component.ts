import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'Centralna Ewidencja i Informacja o Działalności Gospodarczej';


  getdate(): Date{
    return new Date();
  }



  
}
