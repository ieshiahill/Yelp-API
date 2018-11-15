import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup } from '@angular/forms';
import { SearchService } from './key/search.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  baseURL = "http://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search";
  _budget: string = "";
  _state: string = "";
  _city: string = "";
  budgetForm: FormGroup;
  diner: any;

  constructor(
    private data: SearchService,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.budgetForm = this.fb.group({
      price: new FormControl(''),
      city: new FormControl(''),
      state: new FormControl(''),
    })
  }
  
  searchFood(_budget: string, _state: string, _city: string) {
    this.data.getFood(this.budgetForm.value.city, this.budgetForm.value.state, this.budgetForm.value.price).subscribe(data => {
      this.diner = data.businesses[Math.floor(Math.random() * data.businesses.length)]
      return this.diner
    })
  
  }
}

