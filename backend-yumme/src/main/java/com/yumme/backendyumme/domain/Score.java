package com.yumme.backendyumme.domain;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name="score")
public class Score {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "user_name")
    private String userName;

    @Column(name = "recipe_id") // Columna para almacenar el ID de la receta
    private Long recipeId;

    @Column(nullable = false)
    private int score;

    // Constructor, getters y setters

    // Setter personalizado para establecer solo el userName
    public void setUser(User user) {
        if (user != null) {
            this.userName = user.getUsername();
        }
    }

    // Setter personalizado para establecer solo el ID de la receta
    public void setRecipe(Recipe recipe) {
        if (recipe != null) {
            this.recipeId = recipe.getId();
        }
    }
}