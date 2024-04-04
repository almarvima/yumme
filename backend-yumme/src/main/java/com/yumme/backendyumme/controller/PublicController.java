package com.yumme.backendyumme.controller;


import com.yumme.backendyumme.domain.Category;
import com.yumme.backendyumme.domain.Recipe;
import com.yumme.backendyumme.service.CategoryService;
import com.yumme.backendyumme.service.RecipeService;
import com.yumme.backendyumme.utils.SpringUtils;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/public/")
@RequiredArgsConstructor
public class PublicController {

    @Autowired
    private RecipeService recipeService;
    @Autowired
    private CategoryService categoryService;

    @GetMapping("recipe")
    public ResponseEntity<List<Recipe>> GetAllRecipe (){
        List<Recipe> recipes = recipeService.getAllRecipes();
        return ResponseEntity.ok(recipes);
    }
    @GetMapping("recipe/{id}")
    public ResponseEntity<?> GetRecipeById (@PathVariable int id ){
        Recipe recipe = recipeService.getRecipeById(id);
         if(recipe != null)
            return ResponseEntity.ok(recipe);

        return SpringUtils.recipeNotExist();
    }

    @GetMapping("category")
    public ResponseEntity<List<Category>> GetAllCategories(){
        List<Category> categories = categoryService.getAllCategories();
        return ResponseEntity.ok(categories);
    }

    @GetMapping("recipe/category/{id}")
    public ResponseEntity<List<Recipe>> GetRecipesByCategoryId(@PathVariable int id ){
        List<Recipe> recipes = categoryService.GetRecipesByCategoryId(id);
        return ResponseEntity.ok(recipes);
    }

}
