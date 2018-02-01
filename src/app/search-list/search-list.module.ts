import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material.module';

import { SearchListRoutingModule } from './search-list-routing.module';

import { SearchListComponent } from './search-list.component';
import { SearchListItemComponent } from './search-list-item/search-list-item.component';

// import { SearchListResolverService } from './search-list-resolver.service';


@NgModule({
  imports: [
    CommonModule,
    SearchListRoutingModule,
    MaterialModule
  ],
  exports: [
    CommonModule,
  ],
  declarations: [SearchListComponent, SearchListItemComponent],
  providers: []
})
export class SearchListModule { }
