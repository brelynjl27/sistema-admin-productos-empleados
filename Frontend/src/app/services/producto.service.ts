import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Producto } from '../producto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  private api: string = 'http://localhost:8080/api/producto';

  constructor(private http:HttpClient, private router: Router) { }

  getProductoList():Observable<Producto []> {
    return this.http.get<Producto[]>(this.api);
  }

  createProducto(producto: Producto): Observable<Producto> {
    
  alert(producto);
    return this.http.post<Producto>(
      "http://localhost:8080/api/producto", producto);
  }

  getProductoById(id: number): Observable<Producto> {
    return this.http.get<Producto>(
      "http://localhost:8080/api/producto/"+id );
  }  

  updateProducto(producto: Producto): Observable<Producto> {
    return this.http.put<Producto>(
      "http://localhost:8080/api/producto/"+producto.id,producto);
  }

  deleteProductoBtId(id : number): Observable<any>{
    return this.http.delete(this.api + '/' +id);
  }
}
