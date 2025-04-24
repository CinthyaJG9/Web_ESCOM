package org.example.modelo.dao;

import org.example.modelo.entidades.Categoria;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.SQLException;

public class CategoriaDAO {
    private static final String SQL_INSERT=
            "INSERT INTO categoria (nombreCategoria, descripcionCategoria) VALUES (?,?)";

    private static final String SQL_UPDATE=
            "update CATEGORIA set nombreCategoria=?, descripcionCategoria=? where idCategoria=?";
    private static final String SQL_DELETE=
            "delete from Categoria where idCategoria=?";
    private static final String SQL_SELECT_ALL=
            "select * from Categoria";
    private static final String SQL_SELECT=
            "select * from Categoria where idCategoria=?";

    private Connection connection= null;
    public CategoriaDAO(){}
    private void conectar(){
        String driver= "com.mysql.cj.jdbc.Driver";
        String url= "jdbc:mysql//localhost:3306/categoria";
        String user ="root";
        String password= "alumno";
        try{
            Class.forName(driver);
            connection= DriverManager.getConnection(url, user, password);
        }catch(ClassNotFoundException | SQLException e){
            e.printStackTrace();
        }
    }
    public void create(Categoria categoria) throws SQLException{
        conectar();
        PreparedStatement ps =null;
        try{
            ps= connection.prepareStatement(SQL_INSERT);
            ps.setString(1, categoria.getNombreCategoria());
            ps.setString(2, categoria.getDescripcionCategoria());
            ps.executeUpdate();

        }finally{
            if (ps!= null){
                ps.close();
            }
            if(connection!= null){
                connection.close();
            }
        }
    }
}

