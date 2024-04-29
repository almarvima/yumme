package com.yumme.backendyumme.service;

import com.yumme.backendyumme.domain.Recipe;
import com.yumme.backendyumme.domain.User;
import com.yumme.backendyumme.dto.request.RecipeRequest;
import com.yumme.backendyumme.dto.response.RecipeResponse;
import org.springframework.http.ResponseEntity;
import java.util.List;

public interface RecipeService {

    Long createRecipe(RecipeRequest request, User user);

    List<Recipe> getAllRecipes();

    List<Recipe> getRecipesById(Long id);

    Recipe getRecipeById (int id);

    RecipeResponse getRecipeResponseById (int id, User user);

    ResponseEntity<?> deleteRecipe(int recipeId, User user);

    ResponseEntity<?> updateRecipe(int recipeId, User user, RecipeRequest request);

    List<Recipe> GetSuggestedRecipes(List<String> categories, Long id);
}
