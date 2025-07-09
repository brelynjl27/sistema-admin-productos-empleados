package edu.pe.cibertec.Registro_Empleado.controller;

import edu.pe.cibertec.Registro_Empleado.model.Producto;
import edu.pe.cibertec.Registro_Empleado.service.ProductoService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/producto")
@CrossOrigin(origins="http://localhost:4200")
public class ProductoController {

    private ProductoService productoService;

    public  ProductoController(ProductoService productoService){

        this.productoService = productoService;
    }

    @PostMapping
    public Producto save(@RequestBody Producto producto){

        System.out.println(producto);

        return productoService.save(producto);
    }

    @GetMapping
    public List<Producto> findAll(){
        return productoService.findAll();
    }

    @GetMapping("/{id}")
    public Producto findById(@PathVariable Integer id){
        return  productoService.findById(id);
    }

    @DeleteMapping("/{id}")
    public  void deleteById(@PathVariable Integer id){
        productoService.deleteById(id);
    }

    @PutMapping
    public Producto updateCustomer(@RequestBody Producto producto){
        Producto productoDb = productoService.findById(producto.getId());
        productoDb.setNombre(producto.getNombre());
        productoDb.setMarca(producto.getMarca());
        productoDb.setPrecio(producto.getPrecio());
        productoDb.setCantidad(producto.getCantidad());

        return  productoService.update(productoDb);
    }
}
