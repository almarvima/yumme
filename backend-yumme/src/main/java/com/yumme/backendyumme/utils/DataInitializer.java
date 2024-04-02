package com.yumme.backendyumme.utils;

import com.yumme.backendyumme.domain.Category;
import com.yumme.backendyumme.repository.CategoryRepository;
import jakarta.annotation.PostConstruct;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
public class DataInitializer {


    private final CategoryRepository categoryRepository;

    @PostConstruct
    public void initialize() {
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
    }
}
