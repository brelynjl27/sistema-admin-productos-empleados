import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EmpleadoService } from '../service/empleado.service';
import { ActivatedRoute, Router } from '@angular/router';


enum FormType{
  Crear = 0,
  Actualizar = 1
  }

@Component({
  selector: 'app-empleados-add',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './empleados-add.component.html',
  styleUrl: './empleados-add.component.css'
})

export class EmpleadosAddComponent {
  
  id: number | null = null;
  nombre: string = "";
  apellido: string = "";
  direccion: string = "";
  telefono: string = "";
  cargo: string = "";
  correo: string = "";
  formType: FormType = FormType.Crear;
  titulo: string = "Registro de Empleados";
  FormType = FormType;

   constructor(
    private route: ActivatedRoute,
    private empleadoService: EmpleadoService,
    private router: Router,
  ) {}

    ngOnInit(): void {
    const empleadoId = this.route.snapshot.paramMap.get("id");
    if (empleadoId && empleadoId !== 'nuevo') {
      this.titulo = "Editar Empleado";
      this.formType = FormType.Actualizar;
      this.id = Number(empleadoId);
      this.getEmpleadoById();
    } else {
      this.titulo = "Crear Empleado";
      this.formType = FormType.Crear;
      this.id = null; // Asegura que sea null para creación
    }
  }
  getEmpleadoById() {
    if (this.id === null) return;

     this.empleadoService.getEmpleadoById(this.id).subscribe({
      next: (response) => {
        this.nombre = response.nombre;
        this.apellido = response.apellido;
        this.direccion = response.direccion;
        this.telefono = response.telefono;
        this.cargo = response.cargo;
        this.correo = response.correo;
      }, 
        error: (err) => {
        console.error('Error al obtener Empleado:', err);
        alert('Error al cargar los datos del empleado');
      }
    });
  }

  addEmpleado(event?: Event): void {
    event?.preventDefault();
  
    if (!this.isFormValid()) {
      return;
    }

    const empleadoData = this.prepareEmpleadoData();

    const operation = this.formType === FormType.Crear
      ? this.empleadoService.createEmpleado(empleadoData)
      : this.empleadoService.updateEmpleado(empleadoData);

    operation.subscribe({
      next: () => {
        alert('Empleado guardado exitosamente');
        this.router.navigate(['/empleado']);
      },
      error: (err) => this.handleError(err)
    });
  }

   private isFormValid(): boolean {
    if (!this.nombre.trim()) {
      alert('El nombre es obligatorio');
      return false;
    }
    if (!this.apellido.trim()) {
      alert('El apellido es obligatorio');
      return false;
    }
     if (!this.direccion.trim()) {
      alert('La direccion es obligatorio');
      return false;
    }
     if (!this.telefono.trim()) {
      alert('El Telefono es obligatorio');
      return false;
    }
      if (!this.cargo.trim()) {
      alert('El Cargo es obligatorio');
      return false;
    }
    if (!this.correo.trim()) {
      alert('El email es obligatorio');
      return false;
    }
    return true;
  }

    private prepareEmpleadoData(): any {
    return {
      id: this.formType === FormType.Actualizar ? this.id : undefined,
      nombre: this.nombre.trim(),
      apellido: this.apellido.trim(),
      direccion: this.direccion.trim(),
      telefono: this.telefono.trim(),
      cargo: this.cargo.trim(),
      correo: this.correo.trim()
    };
  }

    private handleError(err: any): void {
    console.error('Error detallado:', err);
    if (err.status === 409) {
      alert('El correo ya está registrado');
    } else {
      alert('Error al guardar el empleado. Por favor intente nuevamente');
    }
  }

}
