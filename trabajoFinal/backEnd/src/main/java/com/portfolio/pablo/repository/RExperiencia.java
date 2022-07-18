
package com.portfolio.pablo.repository;

import com.portfolio.pablo.entity.ExperienciaMati;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository

public interface RExperiencia extends JpaRepository<ExperienciaMati, Integer>{
    public Optional <ExperienciaMati> findByNombreE(String nombreE);
    public boolean existsByNombreE(String nombreE);
    
}
