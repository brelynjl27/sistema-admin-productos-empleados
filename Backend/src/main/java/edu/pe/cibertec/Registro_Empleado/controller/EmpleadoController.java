package edu.pe.cibertec.Registro_Empleado.controller;

import edu.pe.cibertec.Registro_Empleado.model.Empleado;
import edu.pe.cibertec.Registro_Empleado.service.EmpleadoService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/empleado")
@CrossOrigin(origins="http://localhost:4200")
public class EmpleadoController {

    private EmpleadoService empleadoService;

    public EmpleadoController(EmpleadoService empleadoService){
        this.empleadoService = empleadoService;}

    @PostMapping
    public Empleado save(@RequestBody Empleado empleado){
        System.out.println(empleado);
        return empleadoService.save(empleado);}

    @GetMapping
    public List<Empleado> findAll(){return empleadoService.findAll();}

    @GetMapping("/{id}")
    public Empleado findById(@PathVariable Integer id){
        return  empleadoService.findById(id);
    }

    @DeleteMapping("/{id}")
    public  void deleteById(@PathVariable Integer id){
        empleadoService.deleteById(id);
    }

    @PutMapping
    public Empleado updateCustomer(@RequestBody Empleado empleado){
        Empleado empleadoDb = empleadoService.findById(empleado.getId());
        empleadoDb.setNombre(empleado.getNombre());
        empleadoDb.setApellido(empleado.getApellido());
        empleadoDb.setDireccion(empleado.getDireccion());
        empleadoDb.setCargo(empleado.getCargo());
        empleadoDb.setTelefono(empleado.getTelefono());
        empleadoDb.setCorreo(empleado.getCorreo());

        return  empleadoService.update(empleadoDb);
    }
}
