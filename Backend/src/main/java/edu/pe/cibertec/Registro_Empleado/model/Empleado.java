package edu.pe.cibertec.Registro_Empleado.model;

import jakarta.persistence.*;

@Entity
@Table(name = "empleado")
public class Empleado {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer Id;
    private String nombre;
    private String apellido;
    private String direccion;
    private String cargo;
    private String telefono;
    @Column(unique = true, nullable = false)
    private String correo;

    public Empleado() {
    }

    public Empleado(Integer id, String nombre, String apellido, String direccion, String cargo, String telefono, String correo) {
        this.Id = id;
        this.nombre = nombre;
        this.apellido = apellido;
        this.direccion = direccion;
        this.cargo = cargo;
        this.telefono = telefono;
        this.correo = correo;
    }

    public Integer getId() {
        return Id;
    }

    public void setId(Integer id) {
        Id = id;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getApellido() {
        return apellido;
    }

    public void setApellido(String apellido) {
        this.apellido = apellido;
    }

    public String getDireccion() {
        return direccion;
    }

    public void setDireccion(String direccion) {
        this.direccion = direccion;
    }

    public String getCargo() {
        return cargo;
    }

    public void setCargo(String cargo) {
        this.cargo = cargo;
    }

    public String getTelefono() {
        return telefono;
    }

    public void setTelefono(String telefono) {
        this.telefono = telefono;
    }

    public String getCorreo() {
        return correo;
    }

    public void setCorreo(String correo) {
        this.correo = correo;
    }

    @Override
    public String toString() {
        return "Empleado{" +
                "id=" + Id +
                ", nombre='" + nombre + '\'' +
                ", apellido='" + apellido + '\'' +
                ", direccion='" + direccion + '\'' +
                ", telefono='" + telefono + '\'' +
                ", cargo='" + cargo + '\'' +
                ", correo='" + correo + '\'' +
                '}';
    }
}
