package com.yumme.backendyumme.controller;

import com.yumme.backendyumme.auth.Request.LoginRequest;
import com.yumme.backendyumme.auth.Request.PasswordRequest;
import com.yumme.backendyumme.auth.Request.RegisterRequest;
import com.yumme.backendyumme.auth.Response.AuthResponse;
import com.yumme.backendyumme.domain.User;
import com.yumme.backendyumme.dto.response.ValidationResponse;
import com.yumme.backendyumme.repository.UserRepository;
import com.yumme.backendyumme.security.jwt.JwtService;
import com.yumme.backendyumme.service.UserService;
import com.yumme.backendyumme.utils.SpringUtils;
import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;
/**
 * @author Albert i Marcos
 * @version 1.0
 * @since 1.0
 */
@RestController
@RequestMapping("/auth/")
@RequiredArgsConstructor
public class AuthController {

    private final UserService userService;
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;

    /**
     * Mètode que permet registrar a l'usuari
     *
     * @param request DTO que conte tots els camps per poder registrar a un usuari
     * @return ResponseEntity si l'usuari ja existeix o retorna el token
     */
    @PostMapping("register")
    public ResponseEntity<?> register(@RequestBody RegisterRequest request)
    {
        Optional<User> user = userRepository.findByUsername(request.getUserName());

        if(user.isPresent()){
            return SpringUtils.userAlreadyExist();
        }

        return ResponseEntity.ok(userService.createUser(request));
    }

    /**
     * Mètode per fer login a l'aplicació
     *
     * @param request DTO amb les variables per fer login.
     * @return ResponseEntity amb el token o resposta d'error
     */
    @PostMapping("login")
    public ResponseEntity<?> login(@RequestBody LoginRequest request)
    {
        Optional<User> userOptional = userRepository.findByUsername(request.getUserName());

        if(!userOptional.isPresent()){
            return SpringUtils.userNotExist();
        }
        String passwordRequest = request.getPassword();
        String userPassword = userOptional.get().getPassword();
         if(!passwordEncoder.matches(passwordRequest,userPassword))
             return SpringUtils.wrongPassword();


        return ResponseEntity.ok(userService.login(request));
    }

    @PutMapping("password")
    public ResponseEntity<?> changePassword(
            @RequestBody PasswordRequest request,
            HttpServletRequest header
    ) {
        ValidationResponse validationResponse = jwtService.validateTokenAndUser(header);
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
            response = userService.changePassword(request.getPassword(), user);
        } catch (Exception e) {
            response = SpringUtils.errorChangingpassword();
        }

        return response;
    }

}
