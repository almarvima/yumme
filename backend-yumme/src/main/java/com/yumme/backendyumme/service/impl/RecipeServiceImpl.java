package com.yumme.backendyumme.service.impl;

import com.yumme.backendyumme.domain.Recipe;
import com.yumme.backendyumme.domain.User;
import com.yumme.backendyumme.dto.request.RecipeRequest;
import com.yumme.backendyumme.repository.RecipeRepository;
import com.yumme.backendyumme.service.RecipeService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class RecipeServiceImpl implements RecipeService {

    @Autowired
    private RecipeRepository recipeRepository;
    @Override
    public boolean createRecipe(RecipeRequest request, User user) {

       Recipe recipe = Recipe.builder()
               .title(request.getTitle())
               .description(request.getDescription())
               .owner_id(user)
               .cooking_time(request.getCooking_time())
               .per_person(request.getPer_person())
               .ingredients(request.getIngredients())
               .receipe_category(request.getReceipe_category())
               .build();

       recipe.onCreate();
       recipe.onUpdate();

        Recipe savedRecipe = recipeRepository.save(recipe);

       return savedRecipe != null;
    }
}
