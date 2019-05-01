import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Movies';
  value = '';
  searchForm: FormGroup;

  constructor(private router: Router, private fb:FormBuilder) {

  }

  ngOnInit() {
    this.searchForm = this.fb.group({
      query: ['', Validators.required]
    });
  }

  onEnter(value: string) { 
    console.log(value)
    this.router.navigate([`/searchResult/${value}`])
  }
}
