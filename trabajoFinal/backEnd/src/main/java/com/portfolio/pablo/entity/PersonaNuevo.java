
package com.portfolio.pablo.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class PersonaNuevo {
    @Id
    @GeneratedValue (strategy = GenerationType.IDENTITY)
    private int id;
    private String nombreP;
    private String apellidoP;
    private String imgP;
    private String imgPortada;
    private String tituloP;
    private String descP;

    public PersonaNuevo(String nombreP, String apellidoP, String imgP, String imgPortada, String tituloP, String descP) {
        this.nombreP = nombreP;
        this.apellidoP = apellidoP;
        this.imgP = imgP;
        this.imgPortada = imgPortada;
        this.tituloP = tituloP;
        this.descP = descP;
    }

    public PersonaNuevo() {
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getNombreP() {
        return nombreP;
    }

    public void setNombreP(String nombreP) {
        this.nombreP = nombreP;
    }

    public String getApellidoP() {
        return apellidoP;
    }

    public void setApellidoP(String apellidoP) {
        this.apellidoP = apellidoP;
    }

    public String getImgP() {
        return imgP;
    }

    public void setImgP(String imgP) {
        this.imgP = imgP;
    }

    public String getImgPortada() {
        return imgPortada;
    }

    public void setImgPortada(String imgPortada) {
        this.imgPortada = imgPortada;
    }

    public String getTituloP() {
        return tituloP;
    }

    public void setTituloP(String tituloP) {
        this.tituloP = tituloP;
    }

    public String getDescP() {
        return descP;
    }

    public void setDescP(String descP) {
        this.descP = descP;
    }
    
    
    
}
