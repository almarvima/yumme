package com.yumme.backendyumme.service;

import com.yumme.backendyumme.domain.User;
import com.yumme.backendyumme.dto.request.RecipeRequest;

public interface RecipeService {

    void createRecipe(RecipeRequest request, User user);
}
