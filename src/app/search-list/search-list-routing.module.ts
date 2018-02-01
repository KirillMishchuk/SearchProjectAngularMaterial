import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchListComponent } from './search-list.component';
// import { SearchListResolverService } from './search-list-resolver.service';

const routes: Routes = [{path: '', component: SearchListComponent}];
// const routes: Routes = [{path: '', resolve: {list: SearchListResolverService}, component: SearchListComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SearchListRoutingModule { }
