import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'articles-list',
  templateUrl: './articles-list.component.html'
})

export class ArticlesListComponent implements OnInit {
  @Input() articles: any[];
  articlesToDisplay: any[];

  constructor(private route: ActivatedRoute) {

  }

  ngOnInit() {
    this.articles = this.route.snapshot.data['articles'];
    this.articlesToDisplay = this.articles;
  }

  filterList(journal) {
    if (journal !== 0) {
      this.articlesToDisplay = this.articles.filter(article => article.journal === journal );
    } else {
      this.articlesToDisplay = this.articles;
    }
  }
}
