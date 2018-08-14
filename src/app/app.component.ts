import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})

export class AppComponent {
  title = 'app';
 
  filterList(journal) {
    console.log('in app component: ' + journal);
  }
}
