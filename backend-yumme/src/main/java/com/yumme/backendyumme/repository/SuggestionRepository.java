package com.yumme.backendyumme.repository;

import com.yumme.backendyumme.domain.Suggestion;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SuggestionRepository extends JpaRepository<Suggestion, Long> {

}
