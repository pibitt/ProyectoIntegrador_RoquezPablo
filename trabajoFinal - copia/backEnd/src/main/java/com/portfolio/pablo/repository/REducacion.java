
package com.portfolio.pablo.repository;

import com.portfolio.pablo.entity.EducacionMati;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface REducacion extends JpaRepository<EducacionMati, Integer>{
    public Optional<EducacionMati> findByNombreEdu(String nombreEdu);
    public boolean existsByNombreEdu(String nombreEdu);
    
}
