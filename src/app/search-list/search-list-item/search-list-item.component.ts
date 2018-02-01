import { Component, OnInit, Input } from '@angular/core';
import { IListItem } from '../../shared/list-item';

@Component({
  selector: 'app-search-list-item',
  templateUrl: './search-list-item.component.html',
  styleUrls: ['./search-list-item.component.css']
})
export class SearchListItemComponent implements OnInit {

  @Input() item: IListItem;

  constructor() { }

  ngOnInit() {
  }

}
