import { NgFor } from '@angular/common';
import { Router } from '@angular/router';
import { Producto } from '../producto';
import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../services/producto.service';

@Component({
  selector: 'app-productos-lista',
  imports: [NgFor],
  templateUrl: './productos-lista.component.html',
  styleUrl: './productos-lista.component.css'
})
export class ProductosListaComponent implements OnInit{

   productos: Producto[] = [];

    constructor(
       private productoService: ProductoService,
       private router: Router // Inyecta Router
     ) {}

   ngOnInit(): void {
    this.listProductos();
  }

    listProductos() {
    this.productoService.getProductoList().subscribe(
      data => {
        this.productos = data;
        console.log(this.productos);
      }
    );
  }

     editProducto(id: number) {
    this.router.navigate(['producto-add', id]); // Navega a la ruta de edición
  }

    deleteProducto(id: number) {
    console.log(id);
    this.productoService.deleteProductoBtId(id).subscribe(
      () => this.listProductos() // Agregué los paréntesis para ejecutar la función
    );
  }


}
