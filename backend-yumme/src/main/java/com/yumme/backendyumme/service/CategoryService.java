package com.yumme.backendyumme.service;

import com.yumme.backendyumme.domain.Category;
import com.yumme.backendyumme.domain.Recipe;
import com.yumme.backendyumme.dto.request.CategoryRequest;
import jakarta.servlet.http.HttpServletRequest;

import java.util.List;

public interface CategoryService {

    List<Category> getAllCategories();
    List<Recipe> GetRecipesByCategoryName(Category category);
}
