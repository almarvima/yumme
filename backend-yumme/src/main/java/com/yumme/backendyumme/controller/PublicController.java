package com.yumme.backendyumme.controller;


import com.yumme.backendyumme.domain.Category;
import com.yumme.backendyumme.domain.Recipe;
import com.yumme.backendyumme.domain.Suggestion;
import com.yumme.backendyumme.domain.User;
import com.yumme.backendyumme.dto.response.RecipeResponse;
import com.yumme.backendyumme.dto.response.ValidationResponse;
import com.yumme.backendyumme.repository.CategoryRepository;
import com.yumme.backendyumme.repository.UserRepository;
import com.yumme.backendyumme.security.jwt.JwtService;
import com.yumme.backendyumme.service.CategoryService;
import com.yumme.backendyumme.service.RecipeService;
import com.yumme.backendyumme.service.SuggestionService;
import com.yumme.backendyumme.utils.SpringUtils;
import jakarta.servlet.http.HttpServletRequest;
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
    @Autowired
    private final JwtService jwtService;
    @Autowired
    private UserRepository userRepository;


    @GetMapping("recipe")
    public ResponseEntity<List<Recipe>> GetAllRecipe (){
        List<Recipe> recipes = recipeService.getAllRecipes();
        return ResponseEntity.ok(recipes);
    }
    @GetMapping("recipe/{id}")
    public ResponseEntity<?> GetRecipeById (
            HttpServletRequest header, @PathVariable int id ){

        String token = jwtService.parseJwt(header);

        if(token == null) {
            Recipe recipe = recipeService.getRecipeById(id);
            if(recipe != null)
                return ResponseEntity.ok(recipe);
        }

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

        RecipeResponse recipeResponse = recipeService.getRecipeResponseById(id, user);

        return ResponseEntity.ok(recipeResponse);
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
