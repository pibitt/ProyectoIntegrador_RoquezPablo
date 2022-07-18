package com.portfolio.pablo.Service;

import com.portfolio.pablo.entity.ExperienciaMati;
import com.portfolio.pablo.repository.RExperiencia;
import java.util.List;
import java.util.Optional;
import javax.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
@Transactional
public class SExperiencia {

    @Autowired
    RExperiencia rExperiencia;

    public List<ExperienciaMati> list() {
        return rExperiencia.findAll();
    }

    public Optional<ExperienciaMati> getOne(int id) {
        return rExperiencia.findById(id);
    }
    
   public Optional <ExperienciaMati> getByNombreE(String nombreE){
       return rExperiencia.findByNombreE(nombreE);
   }
   
   public void save(ExperienciaMati expe) {
       rExperiencia.save(expe);
   }
   
   public void delete(int id){
       rExperiencia.deleteById(id);
   }
   
   public boolean existsById(int id){
       return rExperiencia.existsById(id);
   }
   
   public boolean existsByNombreE(String nombreE){
       return rExperiencia.existsByNombreE(nombreE);
   }
}
