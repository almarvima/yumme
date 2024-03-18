package com.yumme.backendyumme.dto.request;

import jakarta.validation.constraints.NotNull;
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
    private Integer cooking_time;
    private Integer per_person;
    private String ingredients;
    private String receipe_category;

}

