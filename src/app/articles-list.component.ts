import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArticlesListService } from './articles-list.service';

@Component({
  selector: 'articles-list',
  templateUrl: './articles-list.component.html'
})

export class ArticlesListComponent implements OnInit {
  @Input() articles: any[];
  articlesToDisplay: any[];

  constructor(private articlesListService: ArticlesListService, private route: ActivatedRoute) {

  }

  ngOnInit() {
    this.articles = this.route.snapshot.data['articles'];
    this.articlesToDisplay = this.articles;
  }

  filterList(journal) {
    if (journal !== 0) {
      this.articlesToDisplay = this.articles.filter(article => return article.journal === journal);
    } else {
      this.articlesToDisplay = this.articles;
    }
  }
}
