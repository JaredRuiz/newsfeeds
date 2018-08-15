import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { HttpClientModule } from '@angular/common/http'
import { RouterModule } from '@angular/router'

import { AppComponent } from './app.component'
import { ArticlesListComponent } from './articles-list.component'
import { ArticlePickerComponent } from './article-picker.component'
import { ArticleThumbnailComponent } from './article-thumbnail.component'
import { ArticlesListService } from './articles-list.service'
import { ArticlesListResolver } from './articles-list-resolver.service'


import { appRoutes } from './routes'

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    AppComponent,
    ArticlePickerComponent,
    ArticlesListComponent,
    ArticleThumbnailComponent
  ],
  providers: [
    ArticlesListService,
    ArticlesListResolver
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
