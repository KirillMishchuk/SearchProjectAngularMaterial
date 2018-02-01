// import { Injectable } from '@angular/core';
// import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
// import { IListItem } from './list-item';
// import { Observable } from 'rxjs/Observable';
// import { SearchListService } from './search-list.service';
//
// @Injectable()
// export class SearchListResolverService implements Resolve<IListItem[]> {
//
//   constructor(private searchListService: SearchListService) { }
//
//   resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IListItem[]> {
//     let searchQuery = route.queryParams['search_query'];
//     let maxResults = route.queryParams['max_results'];
//     console.log(searchQuery, maxResults);
//     let list = this.searchListService.getList(searchQuery, maxResults);
//     return list;
//   }
// }
