import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  default_max_results: string = '50';
  max_results: string = '';
  search_query: string = '';
  showSpinner: boolean = false;

  constructor(private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      if (params.search_query && params.max_results) {
        this.search_query = params.search_query;
        this.max_results = params.max_results;
      }
    });
  }

  onSubmit() {
    if (this.search_query) {
      this.showSpinner = true;
      if (!this.max_results || +this.max_results > 50) {
        this.max_results = this.default_max_results;
      }
      setTimeout(() => {
        this.router.navigate(['/results'], {
          queryParams: {
            'search_query': this.search_query,
            'max_results': this.max_results
          }
        });
        this.showSpinner = false;
      }, 1000)
    }
  }

}
