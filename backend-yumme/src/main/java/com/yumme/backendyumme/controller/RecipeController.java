package com.yumme.backendyumme.controller;

import com.yumme.backendyumme.auth.Request.LoginRequest;
import com.yumme.backendyumme.auth.Response.AuthResponse;
import com.yumme.backendyumme.domain.User;
import com.yumme.backendyumme.dto.request.RecipeRequest;
import com.yumme.backendyumme.dto.response.ValidationResponse;
import com.yumme.backendyumme.repository.RecipeRepository;
import com.yumme.backendyumme.repository.UserRepository;
import com.yumme.backendyumme.security.jwt.JwtService;
import com.yumme.backendyumme.service.RecipeService;
import com.yumme.backendyumme.utils.SpringUtils;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.web.header.Header;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/api/")
@RequiredArgsConstructor
public class RecipeController {

    private final JwtService jwtService;
    private final UserRepository ur;
    @Autowired
    private final RecipeService rs;

    //TODO: Falta millorar el createRecipe, control d'errors
    @PostMapping("recipe")
    public ResponseEntity<?> createRecipe(
            @RequestBody RecipeRequest request,
            HttpServletRequest header)
    {
        ValidationResponse validationResponse = validateTokenAndUser(header);

        if(validationResponse.isValid()){
            String userName = validationResponse.getUserName();
            Optional<User> userOptional = ur.findByUsername(userName);
            if(userOptional.isPresent()){
                User user = userOptional.get();
                boolean isRecipeCreated = rs.createRecipe(request, user);
                if(isRecipeCreated){
                    return SpringUtils.retornarRecetaCreada();
                }else {
                    return SpringUtils.errorReceta();
                }
            }else{
                return SpringUtils.usuerNotExist();
            }
        }else {
            return SpringUtils.invalidToken();
        }
    }

    //TODO: Falta fer el GetRecipe, DeleteRecipe i UpdateRecipe


    //TODO: Metode per validar token i usuari.


    private ValidationResponse  validateTokenAndUser(HttpServletRequest header ) {
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
