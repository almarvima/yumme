package com.yumme.backendyumme.service.impl;

import com.yumme.backendyumme.domain.Recipe;
import com.yumme.backendyumme.domain.Score;
import com.yumme.backendyumme.domain.User;
import com.yumme.backendyumme.dto.request.ScoreRequestDTO;
import com.yumme.backendyumme.repository.RecipeRepository;
import com.yumme.backendyumme.repository.ScoreRepository;
import com.yumme.backendyumme.service.ScoreService;
import com.yumme.backendyumme.utils.SpringUtils;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class ScoreServiceImpl implements ScoreService {

    private final ScoreRepository scoreRepository;
    private final RecipeRepository recipeRepository;

    @Override
    public ResponseEntity<?> voteRecipe(int recipeId, ScoreRequestDTO request, User user) {

        Optional<Recipe> recipeOptional = recipeRepository.findById(recipeId);
        var recipe = recipeOptional.get();

        Score score = Score.builder()
                .score(request.getScore())
                .recipe(recipe)
                .user(user)
                .build();

        scoreRepository.save(score);

        return SpringUtils.scoreSaved();
    }

}
