
package com.portfolio.pablo.Service;

import com.portfolio.pablo.entity.PersonaNuevo;
import com.portfolio.pablo.repository.RPersonaNuevo;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;



@Service
@Transactional
public class SPersonaNuevo {
    @Autowired
    RPersonaNuevo rPersonaNuevo;
    
    public List <PersonaNuevo> list(){
        return rPersonaNuevo.findAll();
    }
    
    public Optional<PersonaNuevo> getOne (int id){
        return rPersonaNuevo.findById(id);
    }
    
    public Optional<PersonaNuevo> getByNombreP(String nompreP){
        return rPersonaNuevo.findByNombreP(nompreP);
    }
    
    public void save (PersonaNuevo pers){
        rPersonaNuevo.save(pers);
    }
    
    public boolean existsById(int id){
        return rPersonaNuevo.existsById(id);
    }
    
    public boolean existsByNombreP(String nombreP){
        return rPersonaNuevo.existsByNombreP(nombreP);
    }
}
