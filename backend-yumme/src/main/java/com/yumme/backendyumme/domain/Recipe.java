package com.yumme.backendyumme.domain;

import com.fasterxml.jackson.annotation.*;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import java.util.Date;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "recipe")
public class Recipe {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name ="owner_id", referencedColumnName = "id")
    @JsonIgnore
    private User ownerId;

    @ManyToMany(fetch = FetchType.LAZY)
    @JsonIgnore
    @JoinTable(name = "recipe_favorite", joinColumns = @JoinColumn(name = "recipe_id"), inverseJoinColumns = @JoinColumn(name = "user_name"))
    private List<User> userName;

    @Column(length = 100, nullable = false)
    private String title;

    @Column(length = 4096, nullable = false)
    private String description;

    @Column(length = 4096)
    private String imgUrl;

    @Column(nullable = false)
    private Integer cookingTime;
    @Column(nullable = false)
    private Integer perPerson;

    @Column(length = 1024, nullable = false)
    private String ingredients;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "category_id")
    @JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "id")
    @JsonIdentityReference(alwaysAsId = true)
    private Category recipeCategory;

    @OneToMany(mappedBy = "recipeId", cascade = CascadeType.PERSIST)
    List<Score> score;

    @OneToMany(fetch = FetchType.LAZY, mappedBy = "recipe")
    @JsonIdentityReference(alwaysAsId = true)
    private List<Comment> comment;

    private Date created_at;

    private Date updated_at;

    @JsonProperty("categoryName")
    public String getCategoryName() {
        return recipeCategory != null ? recipeCategory.getCategory() : null;
    }

    public Recipe(Long id, User ownerId, String title, String description, Integer cookingTime, Integer perPerson, String ingredients, Category recipeCategory, Date created_at) {
        this.id = id;
        this.ownerId = ownerId;
        this.title = title;
        this.description = description;
        this.cookingTime = cookingTime;
        this.perPerson = perPerson;
        this.ingredients = ingredients;
        this.recipeCategory = recipeCategory;
        this.created_at = created_at;
    }

    public void onCreate() { created_at = new Date(); }

    public void onUpdate() { updated_at = new Date(); }
}
