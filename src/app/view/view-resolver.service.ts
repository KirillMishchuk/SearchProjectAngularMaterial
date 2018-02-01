// import { Injectable } from '@angular/core';
// import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
// import { IListItem } from '../shared/list-item';
// import { Observable } from 'rxjs/Observable';
// import { SearchListService } from '../shared/services/search-list.service';
//
// @Injectable()
// export class ViewResolverService implements Resolve<IListItem> {
//
//   constructor(private searchListService: SearchListService) { }
//
//   resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IListItem> {
//     let videoId = route.queryParams['id'];
//     let item = this.searchListService.getVideo(videoId);
//     return item;
//   }
// }
