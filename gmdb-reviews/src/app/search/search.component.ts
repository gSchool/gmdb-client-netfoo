import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchForm: FormGroup;

  constructor(private fb:FormBuilder) { }

  ngOnInit() {
    this.searchForm = this.fb.group({
      query: ['', Validators.required]
    });
  }

}
