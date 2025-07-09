package edu.pe.cibertec.Registro_Empleado.model;

import jakarta.persistence.*;

import java.math.BigDecimal;

@Entity
@Table (name = "producto")
public class Producto {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer Id;
    private String nombre;
    private String marca;
    private BigDecimal precio;
    private Integer cantidad;

    public Producto() {
    }

    public Producto(Integer id, String nombre, String marca, BigDecimal precio, Integer cantidad) {
        Id = id;
        this.nombre = nombre;
        this.marca = marca;
        this.precio = precio;
        this.cantidad = cantidad;
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

    public String getMarca() {
        return marca;
    }

    public void setMarca(String marca) {
        this.marca = marca;
    }

    public BigDecimal getPrecio() {
        return precio;
    }

    public void setPrecio(BigDecimal precio) {
        this.precio = precio;
    }

    public Integer getCantidad() {
        return cantidad;
    }

    public void setCantidad(Integer cantidad) {
        this.cantidad = cantidad;
    }

    @Override
    public String toString() {
        return "Producto{" +
                "id=" + Id +
                ", nombre='" + nombre + '\'' +
                ", marca='" + marca + '\'' +
                ", precio='" + precio + '\'' +
                ", cantidad='" + cantidad + '\'' +
                '}';
    }
}
