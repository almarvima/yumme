package com.yumme.backendyumme.domain;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.*;
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "user", uniqueConstraints = {@UniqueConstraint(columnNames = {"username"})})
public class User implements UserDetails {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(length = 50, nullable = false)
    private String username;

    @Column(length = 50, nullable = false)
    private String name;
    
    @Column(length = 50, nullable = false)
    private String last_name;
    
    @Column(length = 100, nullable = false)
    private String email;
    
    @Column(length = 100, nullable = false)
    private String password;

    @Enumerated(EnumType.STRING)
    Role role;
    
    @Column(length = 50)
    private String status;

    @ManyToMany(fetch = FetchType.LAZY)
    @JoinTable(name = "user_role", joinColumns = @JoinColumn(name = "user_id"), inverseJoinColumns = @JoinColumn(name = "role_id"))
    private Set<Roles> rolesSet = new HashSet<>();

    @ManyToMany(mappedBy = "userName")
    private List<Recipe> recipesFavorite;

    @OneToMany( mappedBy = "ownerId", cascade = CascadeType.PERSIST)
    private List<Recipe> recipesList;

    @OneToMany(mappedBy ="user", cascade = CascadeType.PERSIST )
    private List<Comment> commentsList;

    @OneToMany(mappedBy = "userName", cascade = CascadeType.PERSIST)
    private List<Score> score;

    @Temporal(TemporalType.TIMESTAMP)
    private Date created_at;
    @Temporal(TemporalType.TIMESTAMP)
    private Date updated_at;

    public User(Long id, String name, String last_name, String email, String password, String status, Date created_at) {
        this.id = id;
        this.username = name;
        this.last_name = last_name;
        this.email = email;
        this.password = password;
        this.status = status;
        this.created_at = created_at;
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return List.of(new SimpleGrantedAuthority(((role.name()))));
    }

    @Override
    public String getPassword() {
        return this.password;
    }

    @Override
    public String getUsername() {
        return this.username;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }
    @Override
    public boolean isAccountNonLocked() {
        return true;
    }
    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }
    @Override
    public boolean isEnabled() {
        return true;
    }

    public void onCreate() {
        created_at = new Date();
    }

    public void onUpdate() { updated_at = new Date(); }

    public Recipe getRecipesFavorite(Recipe recipe) {
        return recipe;
    }
}
