import { NgFor } from '@angular/common';
import { Router } from '@angular/router';
import { Empleado } from '../empleado';
import { EmpleadoService } from '../service/empleado.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-empleados-lista',
  imports: [NgFor],
  templateUrl: './empleados-lista.component.html',
  styleUrl: './empleados-lista.component.css'
})
export class EmpleadosListaComponent implements OnInit {
  empleados: Empleado[] = [];

  constructor(
    private empleadoService: EmpleadoService,
    private router: Router // Inyecta Router
  ) {}

  ngOnInit(): void {
    this.listEmpleados();
  }

  listEmpleados() {
    this.empleadoService.getEmpleadoList().subscribe(
      data => {
        this.empleados = data;
        console.log(this.empleados);
      }
    );
  }
    editEmpleado(id: number) {
    this.router.navigate(['empleado-add', id]); // Navega a la ruta de edición
  }

  deleteEmpleado(id: number) {
    console.log(id);
    this.empleadoService.deleteEmpleadoBtId(id).subscribe(
      () => this.listEmpleados() // Agregué los paréntesis para ejecutar la función
    );
  }
}



