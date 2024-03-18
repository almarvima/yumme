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
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/")
@RequiredArgsConstructor
public class RecipeController {

    private final JwtService jwtService;
    private final UserRepository ur;
    @Autowired
    private final RecipeService rs;

    @PostMapping("recipe")
    public ResponseEntity<?> createRecipe(
            @RequestBody RecipeRequest request,
            HttpServletRequest header) {
        ValidationResponse validationResponse = validateTokenAndUser(header);

        if (validationResponse.isValid()) {
            String userName = validationResponse.getUserName();
            Optional<User> userOptional = ur.findByUsername(userName);
            if (userOptional.isPresent()) {
                User user = userOptional.get();
                boolean isRecipeCreated = rs.createRecipe(request, user);
                if (isRecipeCreated) {
                    return SpringUtils.retornarRecetaCreada();
                } else {
                    return SpringUtils.errorReceta();
                }
            } else {
                return SpringUtils.usuerNotExist();
            }
        } else {
            return SpringUtils.invalidToken();
        }
    }

    @PostMapping("myrecipe")
    public ResponseEntity<?> getRecipeById(HttpServletRequest header) {
        List recipesById;

        ValidationResponse validationResponse = validateTokenAndUser(header);

        if (validationResponse.isValid()) {
            String userName = validationResponse.getUserName();
            Optional<User> userOptional = ur.findByUsername(userName);
            if (userOptional.isPresent()) {
                Long userId = userOptional.get().getId();
                recipesById = rs.getRecipesById(userId);
                if (!recipesById.isEmpty()) {
                    return ResponseEntity.ok(recipesById);
                } else {
                    return null; // no hay recetas usuario crear nueva jsonresponse
                }
            } else {
                return SpringUtils.usuerNotExist();
            }
        } else {
            return SpringUtils.invalidToken();
        }
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
            UserDetails userDetails = ur.findByUsername(userName).orElse(null);
            isValid = jwtService.isTokenValid(jwtToken, userDetails);

            return new ValidationResponse(isValid, userName);
        }
        return null;
    }
}
