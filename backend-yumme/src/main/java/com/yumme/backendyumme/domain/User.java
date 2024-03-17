package com.yumme.backendyumme.domain;

import jakarta.persistence.*;
import jakarta.validation.constraints.*;

import java.util.Date;
import java.util.HashSet;
import java.util.List;
import java.util.Set;
/*
@Entity
@Table(name = "user")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @NotBlank
    @Column(length = 50)
    private String name;
    @NotBlank
    @Column(length = 50)
    private String last_name;
    @NotBlank
    @Column(length = 100)
    private String email;
    @NotBlank
    @Column(length = 100)
    private String password;
    @NotBlank
    @Column(length = 50)
    private String status;
    @ManyToMany(fetch = FetchType.LAZY)
    @JoinTable(name = "user_role", joinColumns = @JoinColumn(name = "user_id"), inverseJoinColumns = @JoinColumn(name = "role_id"))
    private Set<Role> rolesSet = new HashSet<>();
    @ManyToMany(fetch = FetchType.LAZY)
    @JoinTable(name = "recipe_favorite", joinColumns = @JoinColumn(name = "user_id"), inverseJoinColumns = @JoinColumn(name = "recipe_id"))
    private Set<Recipe> recipesSet = new HashSet<>();
    @OneToMany( mappedBy ="owner_id" ,cascade = CascadeType.PERSIST)
    private List<Recipe> recipesList;
    @NotBlank
    private Date created_at;
    @NotBlank
    private Date updated_at;
    public User() {
    }

    public User(Long id, String name, String last_name, String email, String password, String status, Date created_at) {
        this.id = id;
        this.name = name;
        this.last_name = last_name;
        this.email = email;
        this.password = password;
        this.status = status;
        this.created_at = created_at;
    }
}

 */
