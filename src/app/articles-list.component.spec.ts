import { ArticlesListComponent } from './articles-list.component'
import { ActivatedRoute } from '@angular/router';

describe('ArticlesListComponent', () => {
  let articleListComponent, route;
  let defaultArticles = [
    {
      name: 'first Guardian article',
      date: '1/1/2000',
      tagline: 'the first Guardian article',
      journal: 1
    },
    {
      name: 'first Intercept article',
      date: '1/1/2000',
      tagline: 'the first Intercept article',
      journal: 2
    },
    {
      name: 'second Guardian article',
      date: '1/1/2000',
      tagline: 'the second Guardian article',
      journal: 2
    }
  ];

  beforeEach(() => {
    route = { snapshot: { data: { articles: defaultArticles } } } as ActivatedRoute;
    articleListComponent = new ArticlesListComponent(route);
  });

  describe('#ngOnInit', () => {
    beforeEach(() => {
      articleListComponent.ngOnInit();
    });

    it('articles is defined', () => {
      expect(articleListComponent.articles).toBe(defaultArticles);
    });

    it('articlesToDisplay is defined', () => {
      expect(articleListComponent.articlesToDisplay).toBe(defaultArticles);
    });
  });

  describe('#filterList', () => {
    describe('when there are journals in the articles list that match the journal we are filtering by', () => {
      beforeEach(() => {
        articleListComponent.ngOnInit();
        articleListComponent.filterList(2);
      });
      
      it('articles is not mutated', () => {
        expect(articleListComponent.articles).toBe(defaultArticles);
      });

      it('articlesToDisplay should be filtered to articles only coming from the desired journal', () => {
        expect(articleListComponent.articlesToDisplay).toEqual([
          {
            name: 'first Intercept article',
            date: '1/1/2000',
            tagline: 'the first Intercept article',
            journal: 2
          },
          {
            name: 'second Guardian article',
            date: '1/1/2000',
            tagline: 'the second Guardian article',
            journal: 2
          }
        ]);
      });
    });

    describe('when 0 is passed as the journal (ie. we do not want to filter)', () => {
      beforeEach(() => {
        articleListComponent.ngOnInit();
        articleListComponent.filterList(0);
      });
      
      it('articles is not mutated', () => {
        expect(articleListComponent.articles).toBe(defaultArticles);
      });

      it('articlesToDisplay should have the same content as articles', () => {
        expect(articleListComponent.articlesToDisplay).toBe(defaultArticles);
      });
    });
  });
});
