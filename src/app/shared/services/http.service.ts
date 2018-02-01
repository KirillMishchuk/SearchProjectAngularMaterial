import { HttpClient, HttpParams, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import { IListItem } from '../list-item';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class HttpService {

  private baseUrl: string = 'https://www.googleapis.com/youtube/v3/';
  private key: string = 'AIzaSyDOfT_BO81aEZScosfTYMruJobmpjqNeEk';
  // favouriteList: ListItem[] = [];

  constructor(private httpClient: HttpClient) { }


  getList( params ): Observable<IListItem[]> {
    return this.httpClient.get(`${this.baseUrl}search`, {
      params: {
        'maxResults': params.max_results,
        'part': 'snippet, id',
        'q': params.search_query,
        'type': 'video',
        'key': this.key
      }
    })
      .map((response: HttpResponse<any>) => response['items'])
      .map(items => {
        return items.map(item => {
          return {
            videoId: item.id.videoId,
            title: item.snippet.title,
            channelTitle: item.snippet.channelTitle,
            description: item.snippet.description,
            publishedAt: item.snippet.publishedAt,
            thumb: item.snippet.thumbnails.high.url
          }
        })
      })
      .catch(this.handleError);
  }


  getVideo(videoId: string): Observable<IListItem> {
    return this.httpClient.get(`${this.baseUrl}videos`, {
      params: {
        part: 'snippet, contentDetails, statistics',
        id: videoId,
        key: this.key
      }
    })
      .map((response: HttpResponse<any>) => response['items'])
      .map(item => {
        let elem = item[0];
        return {
          videoId: elem.id,
          title: elem.snippet.title,
          channelTitle: elem.snippet.channelTitle,
          description: elem.snippet.description,
          publishedAt: elem.snippet.publishedAt,
          localized: elem.snippet.localized.title,
          commentCount: elem.statistics.commentCount,
          dislikeCount: elem.statistics.dislikeCount,
          likeCount: elem.statistics.likeCount,
          viewCount: elem.statistics.viewCount
        }
      })
      .catch(this.handleError);
  }

  private handleError(error: HttpErrorResponse): ErrorObservable {
    console.log(error);
    alert(`Ошибка запроса, статус ошибки: ${error.status}`);
    return Observable.throw(`${error.message} ${error.status}` || error)
  }

  
  // addToFavouriteList(item: ListItem) {
  //   this.favouriteList.push(item);
  // }
  //
  // getFavouriteList(): ListItem[] {
  //   return this.favouriteList;
  // }

}
