package com.yumme.backendyumme.service;

import com.yumme.backendyumme.domain.Recipe;
import com.yumme.backendyumme.domain.User;
import com.yumme.backendyumme.dto.request.RecipeRequest;
import org.springframework.http.ResponseEntity;

import java.util.List;

public interface RecipeService {

    Long createRecipe(RecipeRequest request, User user);

    List<Recipe> getAllRecipes();
    List<Recipe> getRecipesById(Long id);

    Recipe getRecipeById (int id);

    ResponseEntity<?> deleteRecipe(int recipeId, User user);

    ResponseEntity<?> updateRecipe(int recipeId, User user, RecipeRequest request);
}
