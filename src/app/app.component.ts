import { Component } from '@angular/core';
import { ArticlesListService } from './articles-list.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})

export class AppComponent {
  allArticles:any[];
  
  constructor(private articlesListService: ArticlesListService) {
    this.allArticles = articlesListService.getArticles();
    this.articlesToDisplay = this.allArticles;
  }
    
  filterList(journal) {
    if (journal !== 0) {
      this.articlesToDisplay = this.allArticles.filter(article => return article.journal === journal);
    } else {
      this.articlesToDisplay = this.allArticles;
    }
  }
}
