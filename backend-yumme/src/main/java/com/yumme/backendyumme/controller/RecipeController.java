package com.yumme.backendyumme.controller;

import com.yumme.backendyumme.auth.Request.LoginRequest;
import com.yumme.backendyumme.auth.Response.AuthResponse;
import com.yumme.backendyumme.dto.request.RecipeRequest;
import com.yumme.backendyumme.repository.RecipeRepository;
import com.yumme.backendyumme.repository.UserRepository;
import com.yumme.backendyumme.security.jwt.JwtService;
import com.yumme.backendyumme.service.RecipeService;
import com.yumme.backendyumme.utils.SpringUtils;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

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
            HttpServletRequest header,
            HttpServletResponse response)
    {
        var jwt = header.getHeader("Authorization");
        var jwtParse = jwtService.parseJwt(header);
        var userName = jwtService.getUsernameFromToken(jwtParse);
        var user = ur.findByUsername(userName).get();

        rs.createRecipe(request,user);

        return SpringUtils.retornarRecetaCreada();
    }

    //updateRecipe

    //deleteRecipe

    //getRecipe
}
