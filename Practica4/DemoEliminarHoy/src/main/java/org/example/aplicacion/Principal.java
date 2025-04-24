package org.example.aplicacion;

import org.example.modelo.dao.CategoriaDAO;
import org.example.modelo.entidades.Categoria;

import java.sql.SQLException;

public class Principal {
    public static void main (String[] args){
        Categoria categoria= new Categoria();
        categoria.setNombreCategoria("Cómputo");
        categoria.setDescripcionCategoria("Artículos de cómputo");

        CategoriaDAO dao= new CategoriaDAO();

        try{
            dao.create(categoria);
        }catch(SQLException e){
            throw new RuntimeException(e);
        }

    }
}
