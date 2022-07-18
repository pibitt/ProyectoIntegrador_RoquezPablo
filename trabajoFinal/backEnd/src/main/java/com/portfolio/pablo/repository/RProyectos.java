package com.portfolio.pablo.repository;


import com.portfolio.pablo.entity.ProyectosMati;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository

public interface RProyectos extends JpaRepository<ProyectosMati, Integer>{
    public Optional <ProyectosMati> findByNombrePro(String nombreE);
    public boolean existsByNombrePro(String nombreE);
    
}
