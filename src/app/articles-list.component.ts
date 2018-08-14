import { Component } from '@angular/core';

@Component({
  selector: 'articles-list',
  templateUrl: './articles-list.component.html'
})
export class ArticlesListComponent {
  articles = [
    {
      name: 'First article',
      date: '01/01/2000',
      tagline: 'this is the very first article',
      journal: 'The Guardian'
    },
    {
      name: 'Second article',
      date: '01/01/2000',
      tagline: 'this is the second article',
      journal: 'The Intercept'
    }
  ];
  
  articlesToDisplay = this.articles;
}
