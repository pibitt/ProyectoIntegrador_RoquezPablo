
package com.portfolio.pablo.Service;

import com.portfolio.pablo.entity.EducacionMati;
import com.portfolio.pablo.repository.REducacion;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
public class SEducacion {
    @Autowired
    REducacion rEducacion;

    public List<EducacionMati> list() {
        return rEducacion.findAll();
    }

    public Optional<EducacionMati> getOne(int id) {
        return rEducacion.findById(id);
    }
    
   public Optional <EducacionMati> getByNombreE(String nombreE){
       return rEducacion.findByNombreEdu(nombreE);
   }
   
   public void save(EducacionMati edu) {
       rEducacion.save(edu);
   }
   
   public void delete(int id){
       rEducacion.deleteById(id);
   }
   
   public boolean existsById(int id){
       return rEducacion.existsById(id);
   }
   
   public boolean existsByNombreEdu(String nombreE){
       return rEducacion.existsByNombreEdu(nombreE);
   }
}
