import { Injectable } from '@angular/core'
import { Resolve } from '@angular/router'
import { ArticlesListService } from './articles-list.service'
import { map } from 'rxjs/operators'

@Injectable()
export class ArticlesListResolver implements Resolve<any> {
  constructor(private articlesListService: ArticlesListService) {

  }
  
  resolve() {
     return this.articlesListService.getArticles()
      .pipe(map(articles => { return articles} ));

    // this.articlesListService.getArticles()
    //   .subscribe(data => {
    //     return data;
    //   },
    //   err => console.error(err),
    //   () => console.log('done fetching articles')
    //   );
  }
}
