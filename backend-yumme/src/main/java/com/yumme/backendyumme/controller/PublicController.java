package com.yumme.backendyumme.controller;


import com.yumme.backendyumme.domain.Recipe;
import com.yumme.backendyumme.service.RecipeService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/public/")
@RequiredArgsConstructor
public class PublicController {

    @Autowired
    private RecipeService recipeService;

    @GetMapping("recipes")
    public ResponseEntity<List<Recipe>> GetAllRecipe (){
        List<Recipe> recipes = recipeService.getAllRecipes();
        return ResponseEntity.ok(recipes);
    }

}
