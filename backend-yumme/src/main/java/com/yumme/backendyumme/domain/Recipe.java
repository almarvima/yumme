package com.yumme.backendyumme.domain;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;
import java.util.HashSet;
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
    private User owner_id;

    @ManyToMany(mappedBy = "recipesSet")
    private Set<User> usersSet = new HashSet<>();

    @Column(length = 100, nullable = false)
    private String title;

    @Column(length = 4096, nullable = false)
    private String description;

    @Column(length = 1024)
    private String imgUrl;

    @Column(nullable = false)
    private Integer cooking_time;
    @Column(nullable = false)
    private Integer per_person;

    @Column(length = 1024, nullable = false)
    private String ingredients;

    @Column(length = 100, nullable = false)
    private String receipe_category;

    private Date created_at;

    private Date updated_at;

    public Recipe(Long id, User owner_id, String title, String description, Integer cooking_time, Integer per_person, String ingredients, String receipe_category, Date created_at) {
        this.id = id;
        this.owner_id = owner_id;
        this.title = title;
        this.description = description;
        this.cooking_time = cooking_time;
        this.per_person = per_person;
        this.ingredients = ingredients;
        this.receipe_category = receipe_category;
        this.created_at = created_at;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public User getOwner_id() {
        return owner_id;
    }

    public void setOwner_id(User owner_id) {
        this.owner_id = owner_id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Integer getCooking_time() {
        return cooking_time;
    }

    public void setCooking_time(Integer cooking_time) {
        this.cooking_time = cooking_time;
    }

    public Integer getPer_person() {
        return per_person;
    }

    public void setPer_person(Integer per_person) {
        this.per_person = per_person;
    }

    public String getIngredients() {
        return ingredients;
    }

    public void setIngredients(String ingredients) {
        this.ingredients = ingredients;
    }

    public String getReceipe_type() {
        return receipe_category;
    }

    public void setReceipe_type(String receipe_type) {
        this.receipe_category = receipe_type;
    }

    public Date getCreate_at() {
        return created_at;
    }

    public void setCreate_at(Date create_at) {
        this.created_at = create_at;
    }

    public Date getUpdate_at() {
        return updated_at;
    }

    public void setUpdate_at(Date update_at) {
        this.updated_at = update_at;
    }

    public void onCreate() { created_at = new Date(); }

    public void onUpdate() { updated_at = new Date(); }
}
