import { Routes } from '@angular/router';
import { EmpleadosListaComponent } from './empleados-lista/empleados-lista.component';
import { ProductosListaComponent } from './productos-lista/productos-lista.component';
import { EmpleadosAddComponent } from './empleados-add/empleados-add.component';
import { ProductosAddComponent } from './productos-add/productos-add.component';

export const routes: Routes = [

    {path:"empleados-lista", component:EmpleadosListaComponent},
    {path:"productos-lista", component:ProductosListaComponent},
    {path:"empleados-add", component:EmpleadosAddComponent},
    {path:"productos-add", component:ProductosAddComponent}
];
