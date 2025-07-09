package edu.pe.cibertec.Registro_Empleado.service;


import edu.pe.cibertec.Registro_Empleado.model.Empleado;
import edu.pe.cibertec.Registro_Empleado.repository.EmpleadoRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EmpleadoServiceImpl  implements EmpleadoService{

    private final EmpleadoRepository empleadoRepository;

    public EmpleadoServiceImpl(EmpleadoRepository empleadoRepository){
      this.empleadoRepository = empleadoRepository;
    }

    @Override
    public Empleado save(Empleado empleado ){return empleadoRepository.save(empleado);}

    @Override
    public List<Empleado> findAll() {
        return empleadoRepository.findAll();}

    @Override
    public Empleado findById(Integer id) {
        Empleado customer = empleadoRepository.findById(id).orElseThrow();
        return empleadoRepository.findById(id).get();}

    @Override
    public void deleteById(Integer id) {
        empleadoRepository.deleteById(id);
    }

    @Override
    public Empleado update(Empleado empleado) {
        return empleadoRepository.save(empleado);
    }

}
