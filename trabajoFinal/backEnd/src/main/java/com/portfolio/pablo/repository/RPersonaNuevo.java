
package com.portfolio.pablo.repository;

import com.portfolio.pablo.entity.PersonaNuevo;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RPersonaNuevo extends JpaRepository<PersonaNuevo, Integer>{
    public Optional<PersonaNuevo> findByNombreP(String nombreP);
    public boolean existsByNombreP(String nombreP);
}
    
