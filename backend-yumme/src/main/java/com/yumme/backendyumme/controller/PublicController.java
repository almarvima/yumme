package com.yumme.backendyumme.controller;


import com.yumme.backendyumme.domain.Category;
import com.yumme.backendyumme.domain.Recipe;
import com.yumme.backendyumme.domain.Suggestion;
import com.yumme.backendyumme.repository.CategoryRepository;
import com.yumme.backendyumme.service.CategoryService;
import com.yumme.backendyumme.service.RecipeService;
import com.yumme.backendyumme.service.SuggestionService;
import com.yumme.backendyumme.utils.SpringUtils;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

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
    @Autowired
    private CategoryRepository categoryRepository;


    /**
     * Metode per retornar el llistat de receptes
     *
     * @return
     */
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

    @GetMapping("recipe/category/{categoryName}")
    public ResponseEntity<?> GetRecipesByCategoryName(@PathVariable String categoryName){

        Optional<Category> optionalCategory = categoryRepository.findByCategory(categoryName);
        if (!optionalCategory.isPresent())
            return SpringUtils.wrongCategory();

        Category category = optionalCategory.get();

        List<Recipe> recipes = categoryService.GetRecipesByCategoryName(category);
        if(recipes.isEmpty())
            return SpringUtils.noRecipesCategory();

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
