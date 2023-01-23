import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CrudServiceService {

  constructor(private  httpClient:HttpClient) { }

  loadProducts(){
    const url = environment.API_EndPoint + 'view.php';
    return this.httpClient.get(url).pipe(map(data=>data));
  }
}


