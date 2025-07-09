import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductoService } from '../services/producto.service';


enum FormType{
  Crear = 0,
  Actualizar = 1
  }

@Component({
  selector: 'app-productos-add',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './productos-add.component.html',
  styleUrl: './productos-add.component.css'
})
export class ProductosAddComponent {

  id: number | null = null;
  nombre: string = "";
  marca: string = "";
  precio: string = "";
  cantidad: string = "";
  formType: FormType = FormType.Crear;
  titulo: string = "Registro de Empleados";
  FormType = FormType;

    constructor(
    private route: ActivatedRoute,
    private productoService: ProductoService,
    private router: Router,
  ) {}

    ngOnInit(): void {
    const productoId = this.route.snapshot.paramMap.get("id");
    if (productoId && productoId !== 'nuevo') {
      this.titulo = "Editar Producto";
      this.formType = FormType.Actualizar;
      this.id = Number(productoId);
      this.getProductoById();
    } else {
      this.titulo = "Crear Producto";
      this.formType = FormType.Crear;
      this.id = null; // Asegura que sea null para creación
    }
  }
    getProductoById() {
    if (this.id === null) return;

     this.productoService.getProductoById(this.id).subscribe({
      next: (response) => {
        this.nombre = response.nombre;
        this.marca = response.marca;
        this.precio = response.precio;
        this.cantidad = response.cantidad;
      }, 
        error: (err) => {
        console.error('Error al obtener Producto:', err);
        alert('Error al cargar los datos del producto');
      }
    });
  }

  addProducto(event?: Event): void {
    event?.preventDefault();
  
    if (!this.isFormValid()) {
      return;
    }

    const productoData = this.prepareProductoData();

    const operation = this.formType === FormType.Crear
      ? this.productoService.createProducto(productoData)
      : this.productoService.updateProducto(productoData);

    operation.subscribe({
      next: () => {
        alert('Producto guardado exitosamente');
        this.router.navigate(['/producto']);
      },
      error: (err) => this.handleError(err)
    });
  }

  private isFormValid(): boolean {
    if (!this.nombre.trim()) {
      alert('El nombre es obligatorio');
      return false;
    }
     if (!this.marca.trim()) {
      alert('La marca es obligatoria');
      return false;
    }
     if (!this.precio.trim()) {
      alert('El precio es obligatorio');
      return false;
    }
       if (!this.cantidad.trim()) {
      alert('El cantidad es obligatoria');
      return false;
    }
    return true;
  }

    private prepareProductoData(): any {
    return {
      id: this.formType === FormType.Actualizar ? this.id : undefined,
      nombre: this.nombre.trim(),
      marca: this.marca.trim(),
      precio: this.precio.trim(),
      cantidad: this.cantidad.trim(),
    };
  }

   private handleError(err: any): void {
    console.error('Error detallado:', err);
    if (err.status === 409) {
      alert('La marca ya esta registrada');
    } else {
      alert('Error al guarda producto');
    }
  }

}
