import { Component, OnInit } from '@angular/core';
import { CrudServiceService } from '../crud-service.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  constructor(private crudServiceService:CrudServiceService) { }

  ngOnInit(): void {
  }

}
