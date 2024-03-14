package com.yumme.backendyumme.domain;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import java.util.Date;


@Entity
@Table(name = "recipe")
public class Recipe {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @OneToOne(cascade = CascadeType.PERSIST)
    @JoinColumn(name ="user_id", referencedColumnName = "id")
    private User owner_id;
    @NotBlank
    @Column(length = 100)
    private String title;
    @NotBlank
    @Column(length = 4096)
    private String description;
    @NotBlank
    private Integer cooking_time;
    @NotBlank
    private Integer per_person;
    @NotBlank
    @Column(length = 1024)
    private String ingredients;
    @NotBlank
    @Column(length = 100)
    private String receipe_type;
    @NotBlank
    private Date create_at;
    @NotBlank
    private Date update_at;

    public Recipe() {
    }

    public Recipe(Long id, User owner_id, String title, String description, Integer cooking_time, Integer per_person, String ingredients, String receipe_type, Date create_at) {
        this.id = id;
        this.owner_id = owner_id;
        this.title = title;
        this.description = description;
        this.cooking_time = cooking_time;
        this.per_person = per_person;
        this.ingredients = ingredients;
        this.receipe_type = receipe_type;
        this.create_at = create_at;
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
        return receipe_type;
    }

    public void setReceipe_type(String receipe_type) {
        this.receipe_type = receipe_type;
    }

    public Date getCreate_at() {
        return create_at;
    }

    public void setCreate_at(Date create_at) {
        this.create_at = create_at;
    }

    public Date getUpdate_at() {
        return update_at;
    }

    public void setUpdate_at(Date update_at) {
        this.update_at = update_at;
    }
}
