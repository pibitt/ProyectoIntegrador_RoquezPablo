
package com.portfolio.pablo.Service;

import com.portfolio.pablo.entity.ProyectosMati;
import com.portfolio.pablo.repository.RProyectos;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
public class SProyectos {
    @Autowired
    RProyectos rProyectos;

    public List<ProyectosMati> list() {
        return rProyectos.findAll();
    }

    public Optional<ProyectosMati> getOne(int id) {
        return rProyectos.findById(id);
    }
    
   public Optional <ProyectosMati> getByNombrePro(String nombreP){
       return rProyectos.findByNombrePro(nombreP);
   }
   
   public void save(ProyectosMati pro) {
       rProyectos.save(pro);
   }
   
   public void delete(int id){
       rProyectos.deleteById(id);
   }
   
   public boolean existsById(int id){
       return rProyectos.existsById(id);
   }
   
   public boolean existsByNombrePro(String nombreP){
       return rProyectos.existsByNombrePro(nombreP);
   }
}
