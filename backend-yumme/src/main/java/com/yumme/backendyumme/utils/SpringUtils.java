package com.yumme.backendyumme.utils;

import com.yumme.backendyumme.service.RecipeService;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;


public class SpringUtils {

    public static ResponseEntity<RespuestaJson> retornarRecetaCreada() {
        RespuestaJson respuesta = new RespuestaJson(HttpStatus.OK.value(), "Receta creada correctamente");
        return new ResponseEntity<>(respuesta, HttpStatus.OK);
    }
    public static ResponseEntity<RespuestaJson> errorReceta(){
        RespuestaJson respuesta = new RespuestaJson(HttpStatus.BAD_REQUEST.value(), "Error al crear receta");
        return new ResponseEntity<>(respuesta, HttpStatus.BAD_REQUEST);
    }


    public static class RespuestaJson {
        private int status;
        private String mensaje;

        public RespuestaJson(int status, String mensaje) {
            this.status = status;
            this.mensaje = mensaje;
        }

        public int getStatus() {
            return status;
        }

        public void setStatus(int status) {
            this.status = status;
        }

        public String getMensaje() {
            return mensaje;
        }

        public void setMensaje(String mensaje) {
            this.mensaje = mensaje;
        }
    }
}

