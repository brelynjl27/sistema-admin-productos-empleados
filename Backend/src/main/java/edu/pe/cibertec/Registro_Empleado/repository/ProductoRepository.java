package edu.pe.cibertec.Registro_Empleado.repository;

import edu.pe.cibertec.Registro_Empleado.model.Producto;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductoRepository  extends JpaRepository <Producto, Integer> {
}
