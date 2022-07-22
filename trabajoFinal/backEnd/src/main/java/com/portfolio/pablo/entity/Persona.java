package com.portfolio.pablo.entity;

import java.util.List;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
public class Persona {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotNull
    @Size(min = 1, max = 50, message = "no cumple con la longitud")
    private String nombre;

    @NotNull
    @Size(min = 1, max = 50, message = "no cumple con la longitud")
    private String apellido;

    @Size(min = 1, max = 50, message = "no cumple con la longitud")
    private String img;

    @Size(min = 1, max = 50, message = "no cumple con la longitud")
    private String titulo;

    @Size(min = 1, max = 50, message = "no cumple con la longitud")
    private String descripcion;
    
    @Size(min = 1, max = 50, message = "no cumple con la longitud")
    private String imgPortada;

    @OneToMany(fetch = FetchType.LAZY, mappedBy = "id")
    private List<EducacionMati> educacionList;

    @OneToMany(fetch = FetchType.LAZY, mappedBy = "id")
    private List<Skills> skillsList;

    @OneToMany(fetch = FetchType.LAZY, mappedBy = "id")
    private List<ExperienciaMati> experienciaList;
    
    @OneToMany(fetch = FetchType.LAZY, mappedBy = "id")
    private List<ProyectosMati> proyectosList;

  
    
    
}





