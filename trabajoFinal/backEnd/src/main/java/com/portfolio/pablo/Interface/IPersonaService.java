package com.portfolio.pablo.Interface;

import com.portfolio.pablo.entity.Persona;
import java.util.List;

public interface IPersonaService {
    //trae una lista de personas
    public List<Persona> getPersona();
    
    //guarda un objeto tipo persona
    public void savePersona(Persona persona);
    
    //Eliminar un objeto
    public void deletePersona(Long id);
    
    //busca una persona
    public Persona findPersona(Long id);
}
