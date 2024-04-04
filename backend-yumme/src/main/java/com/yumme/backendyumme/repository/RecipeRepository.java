package com.yumme.backendyumme.repository;

import com.yumme.backendyumme.domain.Recipe;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface RecipeRepository extends JpaRepository<Recipe,Integer> {

    @Query("SELECT r FROM Recipe r WHERE r.ownerId.id = :userId")
    List<Recipe> findByOwnerId(Long userId);
    @Query("SELECT r FROM Recipe r WHERE r.recipeCategory.id=:categoryId")
    List findRecipesByCategory(Long categoryId);
}
