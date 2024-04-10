package com.yumme.backendyumme.controller;


import com.yumme.backendyumme.domain.Category;
import com.yumme.backendyumme.domain.Recipe;
import com.yumme.backendyumme.domain.Suggestion;
import com.yumme.backendyumme.service.CategoryService;
import com.yumme.backendyumme.service.RecipeService;
import com.yumme.backendyumme.service.SuggestionService;
import com.yumme.backendyumme.utils.SpringUtils;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/public/")
@RequiredArgsConstructor
public class PublicController {

    @Autowired
    private RecipeService recipeService;
    @Autowired
    private CategoryService categoryService;
    @Autowired
    private SuggestionService suggestionService;

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
    
    //TODO: Cambiar Path a string
    @GetMapping("recipe/category/{id}")
    public ResponseEntity<List<Recipe>> GetRecipesByCategoryId(@PathVariable int id ){
        List<Recipe> recipes = categoryService.GetRecipesByCategoryId(id);
        return ResponseEntity.ok(recipes);
    }

    @PostMapping("suggestion")
    public ResponseEntity<?> SendSuggestion (@RequestBody Suggestion request){
        boolean doIt = suggestionService.createSuggestion(request);
        if(doIt)
            return SpringUtils.suggestionCreated();

        return SpringUtils.wrongSuggestion();
    }

}
