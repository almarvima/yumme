package com.yumme.backendyumme.dto.request;

import com.yumme.backendyumme.domain.Category;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class RecipeRequest {

    private String title;
    private String description;
    private Integer cookingTime;
    private Integer perPerson;
    private String ingredients;
    private String recipeCategory;

}

