package edu.pe.cibertec.Registro_Empleado.service;

import edu.pe.cibertec.Registro_Empleado.model.Empleado;

import java.util.List;

public interface EmpleadoService {

    Empleado save(Empleado empleado);
    List<Empleado> findAll();

    Empleado findById(Integer id);

    void deleteById (Integer id);
    Empleado update (Empleado empleado);
}
