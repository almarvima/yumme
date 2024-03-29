package com.yumme.backendyumme.controller;

import com.yumme.backendyumme.domain.User;
import com.yumme.backendyumme.dto.request.RecipeRequest;
import com.yumme.backendyumme.dto.response.ValidationResponse;
import com.yumme.backendyumme.repository.UserRepository;
import com.yumme.backendyumme.security.jwt.JwtService;
import com.yumme.backendyumme.service.RecipeService;
import com.yumme.backendyumme.utils.SpringUtils;
import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/")
@RequiredArgsConstructor
public class RecipeController {

    private final JwtService jwtService;
    private final UserRepository userRepository;
    private final RecipeService recipeService;

    @PostMapping("recipe")
    public ResponseEntity<?> createRecipe(
            @RequestBody RecipeRequest request,
            HttpServletRequest header) {
        ValidationResponse validationResponse = validateTokenAndUser(header);

        if (!validationResponse.isValid()) {
            return SpringUtils.invalidToken();
        }
        String userName = validationResponse.getUserName();
        Optional<User> userOptional = userRepository.findByUsername(userName);

        if (!userOptional.isPresent()) {
            return SpringUtils.userNotExist();
        }

        User user = userOptional.get();
        boolean isRecipeCreated = recipeService.createRecipe(request, user);

        if (isRecipeCreated) {
            return SpringUtils.recipeCreated();
        } else {
            return SpringUtils.errorCreationRecipe();
        }
    }


    @GetMapping("recipe")
    public ResponseEntity<?> getRecipesByUsername(HttpServletRequest header) {
        List recipesById;

        ValidationResponse validationResponse = validateTokenAndUser(header);

        if (!validationResponse.isValid()) {
            return SpringUtils.invalidToken();
        }

        String userName = validationResponse.getUserName();
        Optional<User> userOptional = userRepository.findByUsername(userName);

        if (!userOptional.isPresent()) {
            return SpringUtils.userNotExist();
        }

        Long userId = userOptional.get().getId();
        recipesById = recipeService.getRecipesById(userId);

        if (!recipesById.isEmpty()) {
            return ResponseEntity.ok(recipesById);
        } else {
            return null; // no hay recetas usuario crear nueva jsonresponse
        }

    }

    @DeleteMapping("recipe/{id}")
    public ResponseEntity<?> deleteRecipe(
            HttpServletRequest header,
            @PathVariable int id
    ) {
        ValidationResponse validationResponse = validateTokenAndUser(header);
        if (!validationResponse.isValid()) {
            return SpringUtils.invalidToken();
        }

        String userName = validationResponse.getUserName();
        Optional<User> userOptional = userRepository.findByUsername(userName);

        if (userOptional.isEmpty()) {
            return SpringUtils.userNotExist();
        }

        User user = userOptional.get();

        ResponseEntity<?> response;

        try {
            response = recipeService.deleteRecipe(id, user);
        } catch (Exception e) {
            response = SpringUtils.errorRecipeDeleted();
        }

        return response;

    }


    //TODO: Falta fer elDeleteRecipe i UpdateRecipe
    /*
     *
     * */
    private ValidationResponse validateTokenAndUser(HttpServletRequest header) {
        String jwtToken = jwtService.parseJwt(header);
        boolean isValid = false;
        User user = null;

        if (jwtToken != null) {
            String userName = jwtService.getUsernameFromToken(jwtToken);
            UserDetails userDetails = userRepository.findByUsername(userName).orElse(null);
            isValid = jwtService.isTokenValid(jwtToken, userDetails);

            return new ValidationResponse(isValid, userName);
        }
        return null;
    }
}
