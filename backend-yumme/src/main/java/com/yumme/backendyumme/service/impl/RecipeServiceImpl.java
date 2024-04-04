package com.yumme.backendyumme.service.impl;

import com.yumme.backendyumme.domain.Category;
import com.yumme.backendyumme.domain.Recipe;
import com.yumme.backendyumme.domain.User;
import com.yumme.backendyumme.dto.request.RecipeRequest;
import com.yumme.backendyumme.repository.CategoryRepository;
import com.yumme.backendyumme.repository.RecipeRepository;
import com.yumme.backendyumme.service.RecipeService;
import com.yumme.backendyumme.utils.SpringUtils;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class RecipeServiceImpl implements RecipeService {

    private final RecipeRepository recipeRepository;
    private final CategoryRepository categoryRepository;


    @Override
    public boolean createRecipe(RecipeRequest request, User user) {

        String categoryName = request.getRecipeCategory();

        Optional<Category> category = categoryRepository.findByCategory(categoryName);

        Recipe recipe = Recipe.builder()
                .title(request.getTitle())
                .description(request.getDescription())
                .ownerId(user)
                .cookingTime(request.getCookingTime())
                .perPerson(request.getPerPerson())
                .ingredients(request.getIngredients())
                .recipeCategory(category.get())
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

    @Override
    public Recipe getRecipeById(int id) {

        Optional<Recipe> recipeOptional = recipeRepository.findById(id);

        if(!recipeOptional.isPresent())
            return null;

        return recipeOptional.get();
    }

    @Override
    public ResponseEntity<?> deleteRecipe(int recipeId, User user) {

        Optional<Recipe> recipeOptional = recipeRepository.findById(recipeId);

        if (recipeOptional.isEmpty()) {
            return SpringUtils.recipeNotExist();
        }

        Recipe recipe = recipeOptional.get();

        if (recipe.getOwnerId() != user) {
            return SpringUtils.notOwnerRecipe();
        } else {
            recipeRepository.delete(recipe);
            return SpringUtils.recipeDeleted();
        }

    }

    @Override
    public ResponseEntity<?> updateRecipe(int recipeId, User user, RecipeRequest request) {

        Optional<Recipe> recipeOptional = recipeRepository.findById(recipeId);

        if (recipeOptional.isEmpty()) {
            return SpringUtils.recipeNotExist();
        }

        Recipe recipe = recipeOptional.get();

        if (recipe.getOwnerId() != user) {
            return SpringUtils.notOwnerRecipe();
        }

        var categoryOptional = categoryRepository.findByCategory(request.getRecipeCategory());
        var category = categoryOptional.get();

        recipe.setTitle(request.getTitle());
        recipe.setDescription(request.getDescription());
        recipe.setCookingTime(request.getCookingTime());
        recipe.setImgUrl(recipe.getImgUrl());
        recipe.setPerPerson(request.getPerPerson());
        recipe.setIngredients(request.getIngredients());
        recipe.setRecipeCategory(category);


        recipeRepository.save(recipe);
        return SpringUtils.recipeUpdated();


    }

}
