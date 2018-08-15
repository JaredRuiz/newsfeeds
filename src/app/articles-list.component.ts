import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArticlesListService } from './articles-list.service';

@Component({
  selector: 'articles-list',
  templateUrl: './articles-list.component.html'
})

export class ArticlesListComponent implements OnInit {
  // @Input() articles: any[];
  articles: any[];
  articlesToDisplay: any[];

  // constructor(private articlesListService: ArticlesListService, private route: ActivatedRoute) {

  // }

  ngOnInit() {
    // console.log(this.route.snapshot.data['articles']);
    // this.articles = this.route.snapshot.data['articles'];

    this.articles = [
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

    console.log(this.articles);

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
