package com.portfolio.pablo.Controller;

import com.portfolio.pablo.Service.ExperienciaService;
import com.portfolio.pablo.entity.Experiencia;
import java.util.List;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/experiencia")
@CrossOrigin(origins = "http://localhost:4200")
public class ExperienciaController {

    private final ExperienciaService ExperienciaService;

    public ExperienciaController(ExperienciaService ExperienciaService) {
        this.ExperienciaService = ExperienciaService;
    }

    @GetMapping("/id/{id}")
    public ResponseEntity<Experiencia> obtenerExperiencia(@PathVariable("id") Long id) {
        Experiencia experiencia=ExperienciaService.buscarExperienciaPorId(id);
        return new ResponseEntity<>(experiencia, HttpStatus.OK);
    }
    
    @PutMapping("/update")
    public ResponseEntity<Experiencia> editarExperiencia(@RequestBody Experiencia experiencia){
        Experiencia updateExperiencia=ExperienciaService.editarExperiencia(experiencia);
        return new ResponseEntity<>(updateExperiencia, HttpStatus.OK);
    }
    
    @GetMapping("/all")
    public ResponseEntity<List <Experiencia>> obtenerExperiencia(){
        List <Experiencia> experiencias =ExperienciaService.buscarexperiencia();
        return new ResponseEntity<>(experiencias, HttpStatus.OK);
    }
    
    @PostMapping ("/add")
    public ResponseEntity <Experiencia> crearExperiencia (@RequestBody Experiencia experiencia){
        Experiencia nuevaExperiencia=ExperienciaService.addexperiencia(experiencia);
        return new ResponseEntity<>(nuevaExperiencia, HttpStatus.CREATED);
    }
    
    @DeleteMapping ("/delete/{id}")
    public ResponseEntity <?> borrarExperiencia(@PathVariable("id") Long id){
        ExperienciaService.borrarExperiencia(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }
    
}
