package edu.pe.cibertec.Registro_Empleado.repository;

import edu.pe.cibertec.Registro_Empleado.model.Empleado;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EmpleadoRepository extends JpaRepository <Empleado,Integer> {
}
