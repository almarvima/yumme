package com.yumme.backendyumme.domain;

import jakarta.persistence.*;
import jakarta.validation.constraints.*;

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
    @OneToOne(cascade = CascadeType.PERSIST)
    @JoinColumn(name = "role_id", referencedColumnName = "id")
    private Role role;

    public User() {
    }

    public User(Long id, String name, String last_name, String email, String password, String status) {
        this.id = id;
        this.name = name;
        this.last_name = last_name;
        this.email = email;
        this.password = password;
        this.status = status;
    }
}
