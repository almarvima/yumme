package com.yumme.backendyumme.utils;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;


public class SpringUtils {

    public static ResponseEntity<JsonResponse> retornarRecetaCreada() {
        JsonResponse respuesta = new JsonResponse(HttpStatus.OK.value(), "Receta creada correctamente");
        return new ResponseEntity<>(respuesta, HttpStatus.OK);
    }
    public static ResponseEntity<JsonResponse> errorReceta(){
        JsonResponse respuesta = new JsonResponse(HttpStatus.BAD_REQUEST.value(), "Error al crear receta");
        return new ResponseEntity<>(respuesta, HttpStatus.BAD_REQUEST);
    }
     //TODO: Falta afegir més respostes, es podría separar la clase JsonResponse

    public static ResponseEntity<JsonResponse> invalidToken(){
        JsonResponse respuesta = new JsonResponse(HttpStatus.UNAUTHORIZED.value(), "Token no valid");
        return new ResponseEntity<>(respuesta, HttpStatus.UNAUTHORIZED);
    }

    public static ResponseEntity<JsonResponse> usuerNotExist(){
        JsonResponse respuesta = new JsonResponse(HttpStatus.UNAUTHORIZED.value(), "L'usuari no existeix");
        return new ResponseEntity<>(respuesta, HttpStatus.UNAUTHORIZED);
    }

    public static ResponseEntity<JsonResponse> userAlreadyExist(){
        JsonResponse response = new JsonResponse(HttpStatus.BAD_REQUEST.value(), "L'usuari ja esta registrat");
        return new ResponseEntity<>(response, HttpStatus.BAD_REQUEST);
    }



    public static class JsonResponse {
        private int status;
        private String mensaje;

        public JsonResponse(int status, String mensaje) {
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

