package com.yumme.backendyumme.domain;

import jakarta.persistence.*;
import jakarta.validation.constraints.*;

@Entity
@Table(name="score")
public class Score {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    @ManyToOne
    @JoinColumn(name = "recipe_id")
    private Recipe recipe;
    @NotBlank
    private int score;
}
