package edu.pe.cibertec.Registro_Empleado.service;

import edu.pe.cibertec.Registro_Empleado.model.Producto;
import edu.pe.cibertec.Registro_Empleado.repository.ProductoRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductoServiceIpml  implements ProductoService{

    private final ProductoRepository productoRepository;

    public ProductoServiceIpml(ProductoRepository productoRepository) {
        this.productoRepository = productoRepository;
    }

    @Override
    public Producto save(Producto producto) {
        return productoRepository.save(producto);
    }

    @Override
    public List<Producto> findAll() {
        return productoRepository.findAll();
    }
    @Override
    public Producto findById(Integer id) {
        Producto customer = productoRepository.findById(id).orElseThrow();
        return productoRepository.findById(id).get();
    }

    @Override
    public void deleteById(Integer id) {
        productoRepository.deleteById(id);
    }

    @Override
    public Producto update(Producto producto) {
        return productoRepository.save(producto);
    }


}
