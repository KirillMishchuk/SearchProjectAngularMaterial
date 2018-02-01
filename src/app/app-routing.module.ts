import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShellComponent } from './home/shell.component';
import { PageNotFoundComponent } from './home/page-not-found/page-not-found.component';
import { ViewComponent } from './view/view.component';


const routes: Routes = [
  {path: '', component: ShellComponent,
  children: [
      { path: 'results', loadChildren: './search-list/search-list.module#SearchListModule' },
      { path: 'view', component: ViewComponent}
    ]},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
