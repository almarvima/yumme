package com.yumme.backendyumme.dto.response;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonIdentityReference;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import com.yumme.backendyumme.domain.Category;
import com.yumme.backendyumme.domain.Comment;
import com.yumme.backendyumme.domain.Score;
import com.yumme.backendyumme.domain.User;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class RecipeResponse {

    private String title;
    private User user;
    private String description;
    private String image;
    private String ingredients;
    private int perPerson;
    private int cookingTime;
    @JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "id")
    @JsonIdentityReference(alwaysAsId = true)
    private Category recipeCategory;
    private ScoreResponse score;
    private int userVote;
    private boolean isFavorite;
    private List<Comment> comment;
    @JsonProperty("categoryName")
    public String getCategoryName() {
        return recipeCategory != null ? recipeCategory.getCategory() : null;
    }
    @JsonProperty("userName")
    public String getUserName(){return user != null ? user.getUsername() : null;}
}
