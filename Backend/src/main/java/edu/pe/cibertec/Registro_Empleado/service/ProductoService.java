package edu.pe.cibertec.Registro_Empleado.service;

import edu.pe.cibertec.Registro_Empleado.model.Producto;

import java.util.List;

public interface ProductoService {

    Producto save(Producto producto);
    List<Producto> findAll();

    Producto findById(Integer id);

    void deleteById (Integer id);
    Producto update (Producto producto);
}
