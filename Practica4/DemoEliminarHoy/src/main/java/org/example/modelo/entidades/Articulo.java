package org.example.modelo.entidades;

import java.io.Serializable;

public class Articulo implements Serializable {
    private int idArticulo;
    private String nombreArticulo;
    private String descripcionArticulo;
    private double precio;
    private int existencias;
    private int idCategoria;

    public int getIdArticulo() {
        return idArticulo;
    }

    public void setIdArticulo(int idArticulo) {
        this.idArticulo = idArticulo;
    }

    public String getNombreArticulo() {
        return nombreArticulo;
    }

    public void setNombreArticulo(String nombreArticulo) {
        this.nombreArticulo = nombreArticulo;
    }

    public String getDescripcionArticulo() {
        return descripcionArticulo;
    }

    public void setDescripcionArticulo(String descripcionArticulo) {
        this.descripcionArticulo = descripcionArticulo;
    }

    public double getPrecio() {
        return precio;
    }

    public void setPrecio(double precio) {
        this.precio = precio;
    }

    public int getExistencias() {
        return existencias;
    }

    public void setExistencias(int existencias) {
        this.existencias = existencias;
    }

    public int getIdCategoria() {
        return idCategoria;
    }

    public void setIdCategoria(int idCategoria) {
        this.idCategoria = idCategoria;
    }

    public Categoria getCategoria() {
        return categoria;
    }

    public void setCategoria(Categoria categoria) {
        this.categoria = categoria;
    }

    private Categoria categoria;

    @Override
    public String toString() {
        final StringBuilder sb = new StringBuilder("Articulo{");
        sb.append("idArticulo=").append(idArticulo).append("\n");
        sb.append(", nombreArticulo='").append(nombreArticulo).append("\n");
        sb.append(", descripcionArticulo='").append(descripcionArticulo).append("\n");
        sb.append(", precio=").append(precio).append("\n");
        sb.append(", existencias=").append(existencias).append("\n");
        sb.append(", idCategoria=").append(idCategoria).append("\n");
        sb.append(", categoria=").append(categoria).append("\n");
        sb.append('}').append("\n");
        sb.append('}').append("\n");
        return sb.toString();
    }
}
