import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IListItem } from '../shared/list-item';
import { HttpService } from '../shared/services/http.service';

@Component({
  selector: 'app-search-list',
  templateUrl: './search-list.component.html',
  styleUrls: ['./search-list.component.css']
})
export class SearchListComponent implements OnInit {

  public list: IListItem[] = [];
  isEmpty: boolean = false;

  constructor(private route: ActivatedRoute,
              private httpService: HttpService) { }


  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.getList(params);
    });
  }

  getList(params): void {
    this.httpService.getList(params).subscribe((list: IListItem[]) => {
      this.isEmpty = !list.length;
      this.list = list;
    });
  }

  // ngOnInit(): void {
  //   this.route.data.subscribe(data => {
  //     console.log(data);
  //     let list = data['list'];
  //     this.list = list;
  //   })
  // }

}
