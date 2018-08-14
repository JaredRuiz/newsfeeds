import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ArticlesListComponent } from './articles-list.component';
import { ArticlePickerComponent } from './article-picker.component';

@NgModule({
  declarations: [
    AppComponent,
    ArticlesListComponent,
    ArticlePickerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
