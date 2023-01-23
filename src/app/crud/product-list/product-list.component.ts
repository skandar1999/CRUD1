import { CrudServiceService } from './../crud-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  columnDefs = [

    { field: 'p_name' ,
     headerName: 'Product Name',
      sortable:true,
      headerClass: 'header1' },

    { field: 'p_description' ,
     headerName: 'Product description ',
     sortable:true,
     headerClass: 'header2' 
     },

    { field: 'p_price'  , 
    headerName: 'Product price ',
    sortable:true,
    headerClass: 'header3' 
    },

    { field: ''  , 
    headerName: 'Actions ',
    headerClass: 'header3' ,
    width:210,
    cellRenderer : this.actionRender
    }


  ]; 

  rowData:any =[];
  gridOptions = {
    rowHeight :50
  }

  ProductList:any =[];
  ProductListSubscribe:any;

  constructor(private crudServiceService:CrudServiceService) {
   }

  ngOnInit(): void {
    this.getProductList();
  }


  getProductList(){
    this.ProductListSubscribe = this.crudServiceService.loadProducts().subscribe(res =>{
      this.ProductList = res ; 
      this.rowData = res;
      
    })
  }

  actionRender(params:any){
    let div = document.createElement('div');
    let htmlcode = ' <button type="button" class="btn btn-success" > View </button>\n'+
                   ' <button type="button" class="btn btn-danger" > delete </button>\n'+
                   ' <button type="button" class="btn btn-warning" > Edit </button>'
    div.innerHTML = htmlcode;
    return div ;
  }

}
