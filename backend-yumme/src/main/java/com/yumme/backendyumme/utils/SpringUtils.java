package com.yumme.backendyumme.utils;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;


public class SpringUtils {

    public static ResponseEntity<JsonResponse> recipeCreated(long id) {
        JsonResponse response = new JsonResponse(id ,HttpStatus.OK.value(), "RECIPE_CREATED");
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

    public static ResponseEntity<JsonResponse> recipeUpdated(){
        JsonResponse response = new JsonResponse(HttpStatus.OK.value(), "RECIPE_UPDATED");
        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    public static ResponseEntity<JsonResponse> errorRecipeUpdated(){
        JsonResponse response = new JsonResponse(HttpStatus.OK.value(), "RECIPE_UPDATED_ERROR");
        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    public static ResponseEntity<JsonResponse> favoriteRecipeSaved(){
        JsonResponse response = new JsonResponse(HttpStatus.OK.value(), "FAVOURITE_RECIPE_SAVED");
        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    public static ResponseEntity<JsonResponse> favoriteRecipeRemoved(){
        JsonResponse response = new JsonResponse(HttpStatus.OK.value(), "FAVOURITE_RECIPE_REMOVED");
        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    public static ResponseEntity<JsonResponse> favoriteRecipeSavedError(){
        JsonResponse response = new JsonResponse(HttpStatus.OK.value(), "FAVOURITE_RECIPE_SAVED_ERROR");
        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    public static ResponseEntity<JsonResponse> favoriteRecipeSavGetError(){
        JsonResponse response = new JsonResponse(HttpStatus.OK.value(), "FAVOURITE_RECIPE_GET_ERROR");
        return new ResponseEntity<>(response, HttpStatus.OK);
    }

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

    public static ResponseEntity<JsonResponse> userDeleted(){
        JsonResponse response = new JsonResponse(HttpStatus.UNAUTHORIZED.value(), "USER_DELETED");
        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    public static ResponseEntity<JsonResponse> wrongPassword() {
        JsonResponse response = new JsonResponse(HttpStatus.UNAUTHORIZED.value(), "WRONG_PASSWORD");
        return new ResponseEntity<>(response, HttpStatus.UNAUTHORIZED);
    }

    public static ResponseEntity<JsonResponse> passwordChanged() {
        JsonResponse response = new JsonResponse(HttpStatus.OK.value(), "PASSWORD_CHANGED");
        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    public static ResponseEntity<JsonResponse> errorChangingpassword() {
        JsonResponse response = new JsonResponse(HttpStatus.OK.value(), "PASSWORD_CHANGing_ERROR");
        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    public static ResponseEntity<?> suggestionCreated() {
        JsonResponse response = new JsonResponse(HttpStatus.OK.value(), "SUGGESTION_CREATED");
        return new ResponseEntity<>(response, HttpStatus.OK);
    }
    public static ResponseEntity<?> wrongSuggestion() {
        JsonResponse response = new JsonResponse(HttpStatus.BAD_REQUEST.value(), "WRONG_SUGGESTION");
        return new ResponseEntity<>(response, HttpStatus.BAD_REQUEST);
    }

    public static ResponseEntity<?> noRecipesCategory() {
        JsonResponse response = new JsonResponse(HttpStatus.NOT_FOUND.value(), "NO_RECIPES_CATEGORY");
        return new ResponseEntity<>(response, HttpStatus.NOT_FOUND);
    }

    public static ResponseEntity<?> wrongCategory() {
        JsonResponse response = new JsonResponse(HttpStatus.NOT_FOUND.value(), "WRONG_CATEGORY");
        return new ResponseEntity<>(response, HttpStatus.NOT_FOUND);
    }

    public static ResponseEntity<?> commentCreate(String username, long id) {
        JsonResponse response = new JsonResponse(username,id,HttpStatus.OK.value(), "COMMENT_CREATED");
        return new ResponseEntity<>(response, HttpStatus.OK);
    }
    public static ResponseEntity<JsonResponse> scoreSaved(){
        JsonResponse response = new JsonResponse(HttpStatus.OK.value(), "SCORE_SAVED");
        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    public static ResponseEntity<JsonResponse> errorSavingScore(){
        JsonResponse response = new JsonResponse(HttpStatus.BAD_REQUEST.value(), "SAVING_SCORE_ERROR");
        return new ResponseEntity<>(response, HttpStatus.BAD_REQUEST);
    }

    public static ResponseEntity<JsonResponse> randomResponse(){
        JsonResponse response = new JsonResponse(HttpStatus.OK.value(), "RANDOM_RESPONSE");
        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    public static class JsonResponse {
        private int status;
        private String username;
        private long id;
        private String code;

        public JsonResponse(int status, String code) {
            this.status = status;
            this.code = code;
        }
        public JsonResponse(long id, int status, String code) {
            this.id = id;
            this.status = status;
            this.code = code;
        }
        public JsonResponse(String username, long id, int status, String code) {
            this.username = username;
            this.id = id;
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

        public long getId() {return id;}

        public void setId(long id) { this.id = id;}

        public String getUsername() {return username;}

        public void setUsername(String username) {this.username = username;}
    }

}

