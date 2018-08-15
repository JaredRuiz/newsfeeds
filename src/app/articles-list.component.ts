import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArticlesListService } from './articles-list.service';

interface NewsArticle {
  name: string;
  date: string;
  tagline: string;
  journal: string;
}

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
    console.log('when is this line happening');
    console.log(this.route.snapshot.data);
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
