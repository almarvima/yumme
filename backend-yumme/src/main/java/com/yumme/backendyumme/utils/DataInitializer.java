package com.yumme.backendyumme.utils;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.yumme.backendyumme.domain.Category;
import com.yumme.backendyumme.domain.Recipe;
import com.yumme.backendyumme.repository.CategoryRepository;
import com.yumme.backendyumme.repository.RecipeRepository;
import jakarta.annotation.PostConstruct;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Profile;
import org.springframework.core.io.ClassPathResource;
import org.springframework.core.io.ResourceLoader;
import org.springframework.stereotype.Component;

import java.io.IOException;
import java.io.InputStream;
import java.util.Arrays;
import java.util.List;

@Component
@RequiredArgsConstructor
public class DataInitializer {


    private final CategoryRepository categoryRepository;
    private final ResourceLoader resourceLoader;
    private final RecipeRepository recipeRepository;

    @PostConstruct
    public void initialize() throws IOException {
        if (categoryRepository.count() == 0) {
            String[] categories = {"Vegan", "Vegetarian", "Meat", "Fish", "Pasta", "Pizza", "Salad", "Dessert", "Drinks", "Breakfast", "Soup"};
            for (String categoryName : categories) {
                Category category = new Category();
                category.setCategory(categoryName);
                category.onCreate();
                category.onUpdate();
                categoryRepository.save(category);
            }
        }
        if(recipeRepository.count()==0) {
            InputStream inputStream = resourceLoader.getResource("classpath:recetas.json").getInputStream();

            ObjectMapper mapper = new ObjectMapper();

            List<Recipe> recipes = Arrays.asList(mapper.readValue(inputStream, Recipe[].class));
            recipeRepository.saveAll(recipes);
        }
    }
}
