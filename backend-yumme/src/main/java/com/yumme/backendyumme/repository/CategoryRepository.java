package com.yumme.backendyumme.repository;

import com.yumme.backendyumme.domain.Category;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.Optional;

public interface CategoryRepository extends JpaRepository<Category, Long> {

    @Query("SELECT c FROM Category c WHERE c.category = :categoryName")
    Optional<Category> findByCategory(String categoryName);
}
