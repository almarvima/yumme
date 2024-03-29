package com.yumme.backendyumme.controller;

import com.yumme.backendyumme.domain.Category;
import com.yumme.backendyumme.domain.Recipe;
import com.yumme.backendyumme.dto.request.CategoryRequest;
import com.yumme.backendyumme.service.CategoryService;
import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/category/")
@RequiredArgsConstructor
public class CategoryController {

    private final CategoryService categoryService;
    @GetMapping("getAllCategories")
    public ResponseEntity<List<Category>> GetAllCategories(){
        List<Category> categories = categoryService.getAllCategories();
        return ResponseEntity.ok(categories);
    }

    @GetMapping("getRecipesByCategoryId")
    public ResponseEntity<List<Recipe>> GetRecipesByCategoryId(@RequestBody CategoryRequest categoryRequest){
        List<Recipe> recipes = categoryService.GetRecipesByCategoryId(categoryRequest);
        return ResponseEntity.ok(recipes);
    }
}
