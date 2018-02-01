import { Component, OnInit } from '@angular/core';
import { IListItem } from '../shared/list-item';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { HttpService } from '../shared/services/http.service';
// import { ViewResolverService } from './view-resolver.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  public item: IListItem;
  private id: string = '';
  private viewUrl: string = `http://www.youtube.com/embed/`;
  private querySubscription: Subscription;

  constructor(private activatedRoute: ActivatedRoute,
    private httpService: HttpService) { }

  // constructor(private activatedRoute: ActivatedRoute,
  //             private viewResolverService: ViewResolverService) { }


  ngOnInit() {
    this.querySubscription = this.activatedRoute.queryParams.subscribe((queryParam: any) => {
      let id = queryParam['id'];
      this.id = id;
      this.getVideo();
    })
  }

  getVideo() {
    this.viewUrl = `${this.viewUrl}${this.id}`;
    this.httpService.getVideo(this.id).subscribe((item: IListItem) => {
      this.item = item;
    });
  }

  // ngOnInit(): void {
  //   this.activatedRoute.data.subscribe(data => {
  //     console.log(data);
  //     let item = data['item'];
  //     this.item = item;
  //   })
  // }

}
