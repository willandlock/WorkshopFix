import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-stat-filters',
  templateUrl: './stat-filters.component.html',
  styleUrls: ['./stat-filters.component.css']
})
export class StatFiltersComponent implements OnInit {
  filtersForm: FormGroup;

  regions = ['North America', 'Europe', 'Asia', 'All'];

  constructor(fb: FormBuilder) { 
    this.filtersForm = fb.group({
      region: ['All', Validators.required]
    });
  }

  ngOnInit() {
  }

}