package com.yumme.backendyumme.repository;

import com.yumme.backendyumme.domain.Recipe;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RecipeRepository extends JpaRepository<Recipe,Integer> {


}
