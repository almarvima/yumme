package com.yumme.backendyumme.domain;

import jakarta.persistence.*;
import jakarta.validation.constraints.*;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

/*
@Entity
@Table(name = "role")
public class Role {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @NotBlank
    @Column(length = 50)
    private String type;

    @NotBlank
    @ManyToMany(mappedBy = "rolesSet")
    private Set<User> users = new HashSet<>();

    public Role() {
    }

    public Role(Long id, String type) {
        this.id = id;
        this.type = type;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

}

 */
