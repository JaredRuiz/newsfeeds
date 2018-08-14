import { Routes } from '@angular/router'
import { AppComponent } from './app.component'

export const appRoutes:Routes = [
  { path: 'articles', component: AppComponent },
  { path: '', redirectTo: '/articles', pathMatch: 'full' }
]
