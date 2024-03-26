package com.yumme.backendyumme.repository;

import com.yumme.backendyumme.domain.Recipe;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface RecipeRepository extends JpaRepository<Recipe,Integer> {

    @Query("SELECT r FROM Recipe r WHERE r.ownerId.id = :userId")
    List<Recipe> findByOwnerId(Long userId);
}
