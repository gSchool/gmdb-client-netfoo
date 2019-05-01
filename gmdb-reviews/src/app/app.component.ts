import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Movies';
  value = '';

  constructor(private router: Router) {

  }

  onEnter(value: string) { 
    console.log(value)
    this.router.navigate([`/searchResult/${value}`])
  }
}
