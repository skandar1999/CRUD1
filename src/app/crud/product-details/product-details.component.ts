import { CrudServiceService } from './../crud-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  constructor(private crudServiceService:CrudServiceService) { }

  ngOnInit(): void {
  }

}
