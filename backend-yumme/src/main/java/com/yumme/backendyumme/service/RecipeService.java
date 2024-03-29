package com.yumme.backendyumme.service;

import com.yumme.backendyumme.domain.Recipe;
import com.yumme.backendyumme.domain.User;
import com.yumme.backendyumme.dto.request.RecipeRequest;

import java.util.List;

public interface RecipeService {

    boolean createRecipe(RecipeRequest request, User user);

    List<Recipe> getAllRecipes();
    List<Recipe> getRecipesById(Long id);
}
