import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})

export class AppComponent {
  title = 'app';

  allArticles = [
    {
      name: 'First article',
      date: '01/01/2000',
      tagline: 'this is the very first article',
      journal: 1
    },
    {
      name: 'Second article',
      date: '01/01/2000',
      tagline: 'this is the second article',
      journal: 2
    }
    ];

  articlesToDisplay = this.allArticles;
  
  filterList(journal) {
    if (journal !== 0) {
      this.articlesToDisplay = this.allArticles.filter(article => return article.journal === journal);
    } else {
      this.articlesToDisplay = this.allArticles;
    }
  }
}
