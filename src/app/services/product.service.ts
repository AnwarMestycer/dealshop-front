import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
 
  constructor(private http: HttpClient) {}

  loadProductListService(): Observable<any> {
    return this.http.get('http://localhost:8081/rest/load-list');
  }
  loadById(id: number):Observable<any>{
    return this.http.get('http://localhost:8081/rest/load/' + id);
  }
  loadAllCategories(): Observable<any> {
    return this.http.get<any>('http://localhost:8081/rest/categories');
  }
  loadByCategory(category: string):Observable<any>{
    return this.http.get('http://localhost:8081/rest/category/'+category)
  }
  loadByStatus(status : string):Observable<any>{
    return this.http.get('http://localhost:8081/rest/'+ 'status/' + status)
  }
}
