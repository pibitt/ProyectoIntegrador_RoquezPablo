package com.portfolio.pablo.Controller;

import com.portfolio.pablo.Dto.dtoPersona;
import com.portfolio.pablo.Interface.IPersonaService;
import com.portfolio.pablo.Security.Controller.Mensaje;
import com.portfolio.pablo.Service.ImpPersonaService;
import com.portfolio.pablo.entity.Persona;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:4200")

public class PersonaController {

    @Autowired
    IPersonaService ipersonaService;

    @GetMapping("/personas/lista")
    public List<Persona> getPersona() {
        return ipersonaService.getPersona();
    }

    @PreAuthorize("hasRole('ADMIN')")
    @PostMapping("/personas/crear")
    public String createPersona(@RequestBody Persona persona) {
        ipersonaService.savePersona(persona);
        return "La persona fue creada correctamente";
    }

    @PreAuthorize("hasRole('ADMIN')")
    @DeleteMapping("/personas/borrar/{id}")
    public String deletePersona(@PathVariable Long id) {
        ipersonaService.deletePersona(id);
        return "La persona fue eliminada correctamente";
    }

    @PreAuthorize("hasRole('ADMIN')")
    @PutMapping("/personas/editar/{id}")
    public Persona editPersona(@PathVariable Long id,
            @RequestParam("nombre") String nuevoNombre,
            @RequestParam("apellido") String nuevoApellido,
            @RequestParam("img") String nuevoImg,
            @RequestParam("titulo") String nuevoTitulo,
            @RequestParam("descripcion") String nuevaDescripcion,
            @RequestParam("imgPortada") String nuevoImgPortada) {
        Persona persona = ipersonaService.findPersona(id);

        persona.setNombre(nuevoNombre);
        persona.setApellido(nuevoApellido);
        persona.setImg(nuevoImg);
        persona.setImgPortada(nuevoImgPortada);
        persona.setTitulo(nuevoTitulo);
        persona.setDescripcion(nuevaDescripcion);

        ipersonaService.savePersona(persona);
        return persona;
    }

    @GetMapping("/personas/traer/perfil")
    public Persona findPersona() {
        return ipersonaService.findPersona((long) 1);
    }
    
    //@PutMapping("/update/{id}")
    //public ResponseEntity<?> update(@PathVariable("id") int id, @RequestBody dtoPersona dtopers) {
        

   //     Persona persona = ipersonaService.getOne(id).get();
   //     persona.setNombre(dtopers.getNombre());
   //     persona.setApellido(dtopers.getApellido());
   //     persona.setTitulo(dtopers.getTitulo());

    //    ipersonaService.savePersona(persona);
   //    return new ResponseEntity(new Mensaje("Persona Actualizada"), HttpStatus.OK);
   // }

    

}
