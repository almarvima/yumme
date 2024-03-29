package com.yumme.backendyumme.utils;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;


public class SpringUtils {

    public static ResponseEntity<JsonResponse> recipeCreated() {
        JsonResponse response = new JsonResponse(HttpStatus.OK.value(), "RECIPE_CREATED");
        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    public static ResponseEntity<JsonResponse> errorCreationRecipe(){
        JsonResponse response = new JsonResponse(HttpStatus.BAD_REQUEST.value(), "RECIPE_CREATION_ERROR");
        return new ResponseEntity<>(response, HttpStatus.BAD_REQUEST);
    }

    public static ResponseEntity<JsonResponse> notOwnerRecipe(){
        JsonResponse response = new JsonResponse(HttpStatus.NOT_FOUND.value(), "NOT_OWNER_RECIPE");
        return new ResponseEntity<>(response, HttpStatus.BAD_REQUEST);
    }

    public static ResponseEntity<JsonResponse> recipeNotExist(){
        JsonResponse response = new JsonResponse(HttpStatus.NOT_FOUND.value(), "RECIPE_NOT_EXIST");
        return new ResponseEntity<>(response, HttpStatus.BAD_REQUEST);
    }

    public static ResponseEntity<JsonResponse> recipeDeleted(){
        JsonResponse response = new JsonResponse(HttpStatus.OK.value(), "RECIPE_DELETED");
        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    public static ResponseEntity<JsonResponse> errorRecipeDeleted(){
        JsonResponse response = new JsonResponse(HttpStatus.OK.value(), "RECIPE_DELETED_ERROR");
        return new ResponseEntity<>(response, HttpStatus.OK);
    }

     //TODO: Falta afegir més respostes, es podría separar la clase JsonResponse

    public static ResponseEntity<JsonResponse> invalidToken(){
        JsonResponse response = new JsonResponse(HttpStatus.UNAUTHORIZED.value(), "INVALID_TOKEN");
        return new ResponseEntity<>(response, HttpStatus.UNAUTHORIZED);
    }

    public static ResponseEntity<JsonResponse> userNotExist(){
        JsonResponse response = new JsonResponse(HttpStatus.UNAUTHORIZED.value(), "USER_NOT_EXIST");
        return new ResponseEntity<>(response, HttpStatus.UNAUTHORIZED);
    }

    public static ResponseEntity<JsonResponse> userAlreadyExist(){
        JsonResponse response = new JsonResponse(HttpStatus.BAD_REQUEST.value(), "USER_ALREADY_EXIST");
        return new ResponseEntity<>(response, HttpStatus.BAD_REQUEST);
    }

    public static ResponseEntity<JsonResponse> wrongPassword() {
        JsonResponse response = new JsonResponse(HttpStatus.UNAUTHORIZED.value(), "WRONG_PASSWORD");
        return new ResponseEntity<>(response, HttpStatus.UNAUTHORIZED);
    }


    public static class JsonResponse {
        private int status;
        private String code;

        public JsonResponse(int status, String code) {
            this.status = status;
            this.code = code;
        }

        public int getStatus() {
            return status;
        }

        public void setStatus(int status) {
            this.status = status;
        }

        public String getCode() {
            return code;
        }

        public void setCode(String code) {
            this.code = code;
        }
    }

}

