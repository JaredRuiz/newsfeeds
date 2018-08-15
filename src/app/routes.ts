import { Routes } from '@angular/router';
import { ArticlesListComponent } from './articles-list.component';
import { ArticlesListResolver } from './articles-list-resolver.service';

export const appRoutes:Routes = [
  {
    path: 'articles',
    component: ArticlesListComponent
    resolve: {
      articles: ArticlesListResolver
    }
  },
  {
    path: '',
    redirectTo: '/articles',
    pathMatch: 'full'
  }
]
