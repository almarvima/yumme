package com.yumme.backendyumme.controller;

import com.yumme.backendyumme.domain.Recipe;
import com.yumme.backendyumme.domain.User;
import com.yumme.backendyumme.dto.request.CommentRequest;
import com.yumme.backendyumme.dto.request.RecipeRequest;
import com.yumme.backendyumme.dto.response.ValidationResponse;
import com.yumme.backendyumme.repository.UserRepository;
import com.yumme.backendyumme.security.jwt.JwtService;
import com.yumme.backendyumme.service.CommentService;
import com.yumme.backendyumme.service.RecipeService;
import com.yumme.backendyumme.utils.SpringUtils;
import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
/**
 * @author Albert i Marcos
 * @version 1.0
 * @since 1.0
 */
@RestController
@RequestMapping("/api/")
@RequiredArgsConstructor
public class RecipeController {

    private final JwtService jwtService;
    private final UserRepository userRepository;
    private final RecipeService recipeService;
    private final CommentService commentService;

    /**
     * Mètode que permet crear una recepta
     * @param request DTO que conté totes les variables per poder crear una recepta
     * @param header Permet recuperar el token del usuari i recuperar l'usuari
     * @return ResponseEntity conforme la recepta s'ha creat
     */
    @PostMapping("recipe")
    public ResponseEntity<?> createRecipe(
            @RequestBody RecipeRequest request,
            HttpServletRequest header) {
        ValidationResponse validationResponse = jwtService.validateTokenAndUser(header);

        if (!validationResponse.isValid()) {
            return SpringUtils.invalidToken();
        }
        String userName = validationResponse.getUserName();
        Optional<User> userOptional = userRepository.findByUsername(userName);

        if (!userOptional.isPresent()) {
            return SpringUtils.userNotExist();
        }

        User user = userOptional.get();
        long idRecipe = recipeService.createRecipe(request, user);

        if (idRecipe > 0) {
            return SpringUtils.recipeCreated(idRecipe);
        } else {
            return SpringUtils.errorCreationRecipe();
        }
    }

    /**
     * Mètode que per mostrar les receptes creades per un usuari
     * @param header Permet recuperar el token del usuari i recuperar l'usuari
     * @return ResponseEntity amb una llista de receptes
     */
    @GetMapping("recipe/user")
    public ResponseEntity<?> getRecipesByUsername(HttpServletRequest header) {
        List recipesById;

        ValidationResponse validationResponse = jwtService.validateTokenAndUser(header);

        if (!validationResponse.isValid()) {
            return SpringUtils.invalidToken();
        }

        String userName = validationResponse.getUserName();
        Optional<User> userOptional = userRepository.findByUsername(userName);

        if (!userOptional.isPresent()) {
            return SpringUtils.userNotExist();
        }

        Long userId = userOptional.get().getId();
        recipesById = recipeService.getRecipesById(userId);

        if (!recipesById.isEmpty()) {
            return ResponseEntity.ok(recipesById);
        } else {
            return null; // no hay recetas usuario crear nueva jsonresponse
        }

    }

    /**
     * Mètode que permet eliminar una recepta
     * @param header Permet recuperar el token del usuari i recuperar l'usuari
     * @param id Int id de la recepta
     * @return ResponseEntity conforme la recepta ha estat eliminada
     */
    @DeleteMapping("recipe/{id}")
    public ResponseEntity<?> deleteRecipe(
            HttpServletRequest header,
            @PathVariable int id
    ) {
        ValidationResponse validationResponse = jwtService.validateTokenAndUser(header);
        if (!validationResponse.isValid()) {
            return SpringUtils.invalidToken();
        }

        String userName = validationResponse.getUserName();
        Optional<User> userOptional = userRepository.findByUsername(userName);

        if (userOptional.isEmpty()) {
            return SpringUtils.userNotExist();
        }

        User user = userOptional.get();

        ResponseEntity<?> response;

        try {
            response = recipeService.deleteRecipe(id, user);
        } catch (Exception e) {
            response = SpringUtils.errorRecipeDeleted();
        }

        return response;

    }

    /**
     * Mètode per modificar una recepta
     * @param header Permet recuperar el token del usuari i recuperar l'usuari
     * @param request DTO de les dades que l'usuari vol modificar de la recepta
     * @param id Int id de la recepta
     * @return ResponseEntity conforme s'ha actualitzat la recepta
     */
    @PutMapping("recipe/{id}")
    public ResponseEntity<?> updateRecipe(
            HttpServletRequest header,
            @RequestBody RecipeRequest request,
            @PathVariable int id
    ) {
        ValidationResponse validationResponse = jwtService.validateTokenAndUser(header);
        if (!validationResponse.isValid()) {
            return SpringUtils.invalidToken();
        }

        String userName = validationResponse.getUserName();
        Optional<User> userOptional = userRepository.findByUsername(userName);

        if (userOptional.isEmpty()) {
            return SpringUtils.userNotExist();
        }

        User user = userOptional.get();

        ResponseEntity<?> response;

        try {
            response = recipeService.updateRecipe(id, user, request);
        } catch (Exception e) {
            response = SpringUtils.errorRecipeUpdated();
        }

        return response;
    }

    /**
     * Mètode que permet fer una comentari d'una recepta
     * @param header Permet recuperar el token del usuari i recuperar l'usuari
     * @param comment DTO amb el contingut del comentari
     * @param id Int id de la recepta
     * @return ResponseEntity conforme s'ha guardat el comentari
     */
    @PostMapping("recipe/{id}/comment")
    public ResponseEntity<?> addComment(
            HttpServletRequest header,
            @RequestBody CommentRequest comment,
            @PathVariable int id
    ){
        ValidationResponse validationResponse = jwtService.validateTokenAndUser(header);
        if (!validationResponse.isValid())
            return SpringUtils.invalidToken();

        String userName = validationResponse.getUserName();

        User user = userRepository.findByUsername(userName).get();

        Recipe recipe = recipeService.getRecipeById(id);
        if(recipe == null)
            return SpringUtils.recipeNotExist();

        long idComment = commentService.createComment(comment, user, recipe);

        return SpringUtils.commentCreate(userName, idComment);
    }

    /**
     * Mètode que permet afegir com a preferida una recepta
     * @param header Permet recuperar el token del usuari i recuperar l'usuari
     * @param id Int id de la recepta
     * @return ResponseEntity conforme la recepta s'ha guardat com a preferida
     */
    @PostMapping("recipe/{id}/favorite")
    public ResponseEntity<?> saveFavoriteRecipe(
            HttpServletRequest header,
            @PathVariable int id
    ) {
        ValidationResponse validationResponse = jwtService.validateTokenAndUser(header);
        if (!validationResponse.isValid()) {
            return SpringUtils.invalidToken();
        }

        String userName = validationResponse.getUserName();
        Optional<User> userOptional = userRepository.findByUsername(userName);

        if (userOptional.isEmpty()) {
            return SpringUtils.userNotExist();
        }

        User user = userOptional.get();

        ResponseEntity<?> response;

        try {
            response = recipeService.saveFavoriteRecipe(id, user);
        } catch (Exception e) {
            response = SpringUtils.favoriteRecipeSavedError();
        }

        return response;

    }

    /**
     * Mètode que per retornar les receptes preferides d'un usuari
     * @param header Permet recuperar el token del usuari i recuperar l'usuari
     * @return ResponseEntity amb un llistat de receptes
     */
    @GetMapping("recipe/favorite")
    public ResponseEntity<?> getMyFavoriteRecipes(
            HttpServletRequest header
    ) {
        ValidationResponse validationResponse = jwtService.validateTokenAndUser(header);
        if (!validationResponse.isValid()) {
            return SpringUtils.invalidToken();
        }

        String userName = validationResponse.getUserName();
        Optional<User> userOptional = userRepository.findByUsername(userName);

        if (userOptional.isEmpty()) {
            return SpringUtils.userNotExist();
        }

        User user = userOptional.get();

        ResponseEntity<?> response;

        try {
            response = recipeService.getMyFavoriteRecipes(user);
        } catch (Exception e) {
            response = SpringUtils.favoriteRecipeSavGetError();
        }

        return response;
    }

    /**
     * Mètode que retorna sugeriments de receptes
     * @param header Permet recuperar el token del usuari i recuperar l'usuari
     * @return ResponsEntity amb un llistat de receptes
     */
    @GetMapping("recipe/suggested")
    public ResponseEntity<?> getSuggestedRecipes(HttpServletRequest header) {
        ValidationResponse validationResponse = jwtService.validateTokenAndUser(header);

        if(!validationResponse.isValid())
            return SpringUtils.invalidToken();

        User user = userRepository.findByUsername(validationResponse.getUserName()).get();

        var currentRecipes = recipeService.getRecipesById(user.getId());

        if (currentRecipes.isEmpty())
            return SpringUtils.recipeNotExist();

        var categoryRecipeList = new ArrayList<String>();

        for (Recipe recipe : currentRecipes) {
            categoryRecipeList.add(recipe.getCategoryName());
        }

        var suggestedRecipes = recipeService.GetSuggestedRecipes(categoryRecipeList, user.getId());



        return ResponseEntity.ok(suggestedRecipes);
    }

}
