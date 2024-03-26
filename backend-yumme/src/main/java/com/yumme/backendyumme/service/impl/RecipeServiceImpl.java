package com.yumme.backendyumme.service.impl;

import com.yumme.backendyumme.domain.Recipe;
import com.yumme.backendyumme.domain.User;
import com.yumme.backendyumme.dto.request.RecipeRequest;
import com.yumme.backendyumme.repository.RecipeRepository;
import com.yumme.backendyumme.service.RecipeService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class RecipeServiceImpl implements RecipeService {

    private final RecipeRepository recipeRepository;

    @Override
    public boolean createRecipe(RecipeRequest request, User user) {

        Recipe recipe = Recipe.builder()
                .title(request.getTitle())
                .description(request.getDescription())
                .ownerId(user)
                .cookingTime(request.getCookingTime())
                .perPerson(request.getPerPerson())
                .ingredients(request.getIngredients())
                .receipeCategory(request.getRecipeCategory())
                .build();

        recipe.onCreate();
        recipe.onUpdate();

        Recipe savedRecipe = recipeRepository.save(recipe);

        return savedRecipe != null;
    }

    @Override
    public List<Recipe> getAllRecipes() {

        return recipeRepository.findAll();
    }

    @Override
    public List<Recipe> getRecipesById(Long id) {
        return recipeRepository.findByOwnerId(id);
    }
}
