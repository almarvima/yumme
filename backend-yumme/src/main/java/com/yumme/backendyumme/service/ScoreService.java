package com.yumme.backendyumme.service;

import com.yumme.backendyumme.domain.User;
import com.yumme.backendyumme.dto.request.ScoreRequestDTO;
import org.springframework.http.ResponseEntity;

public interface ScoreService {

    ResponseEntity<?> voteRecipe(int recipeId, ScoreRequestDTO request, User user);

}
