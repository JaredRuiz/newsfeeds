import { Injectable } from '@angular/core';

@Injectable()

export class ArticlesListService {
  getArticles() {
    return [
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
  }

}
