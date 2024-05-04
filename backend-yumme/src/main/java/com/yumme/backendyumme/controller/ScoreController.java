package com.yumme.backendyumme.controller;

import com.yumme.backendyumme.domain.User;
import com.yumme.backendyumme.dto.request.ScoreRequestDTO;
import com.yumme.backendyumme.dto.response.ValidationResponse;
import com.yumme.backendyumme.repository.UserRepository;
import com.yumme.backendyumme.security.jwt.JwtService;
import com.yumme.backendyumme.service.ScoreService;
import com.yumme.backendyumme.utils.SpringUtils;
import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;
/**
 * @author Albert i Marcos
 * @version 1.0
 * @since 1.0
 */
@RestController
@RequestMapping("/api/")
@RequiredArgsConstructor
public class ScoreController {

    private final JwtService jwtService;
    private final UserRepository userRepository;
    private final ScoreService scoreService;

    /**
     * Mètode que permet realitzar la votació d'una recepta
     * @param header Permet recuperar el token del usuari i recuperar l'usuari
     * @param request És un DTO que conté un int, que és la votació de la recepta
     * @param id Int id de la recepta
     * @return ResponseEntity conforme s'ha guardat la votació
     */
    @PostMapping("score/recipe/{id}")
    public ResponseEntity<?> voteRecipe(
            HttpServletRequest header,
            @RequestBody ScoreRequestDTO request,
            @PathVariable int id
    ) {
        ValidationResponse validationResponse = jwtService.validateTokenAndUser(header);

        if (!validationResponse.isValid()) {
            return SpringUtils.invalidToken();
        }
        String userName = validationResponse.getUserName();
        Optional<User> userOptional = userRepository.findByUsername(userName);

        if (!userOptional.isPresent()) {
            return SpringUtils.userNotExist();
        }

        User user = userOptional.get();

        ResponseEntity<?> response;

        try {
            response = scoreService.voteRecipe(id, request, user);
        } catch (Exception e) {
            response = SpringUtils.errorSavingScore();
        }

        return response;
    }

}
