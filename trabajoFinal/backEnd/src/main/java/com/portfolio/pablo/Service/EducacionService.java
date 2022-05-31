
package com.portfolio.pablo.Service;

import com.portfolio.pablo.repository.EducacionRepo;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
public class EducacionService {
    private final EducacionRepo educacionRepo;
    
    public EducacionService(EducacionRepo educacionRepo){
        this.educacionRepo = educacionRepo;
    }
    
}
