package com.yumme.backendyumme.controller;

import com.yumme.backendyumme.auth.Request.LoginRequest;
import com.yumme.backendyumme.auth.Request.RegisterRequest;
import com.yumme.backendyumme.auth.Response.AuthResponse;
import com.yumme.backendyumme.domain.User;
import com.yumme.backendyumme.repository.UserRepository;
import com.yumme.backendyumme.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/")
@CrossOrigin(origins = "http://localhost:5173/")
@RequiredArgsConstructor
public class AuthController {

    @Autowired
    private UserService userService;
    @Autowired
    private UserRepository userRepository;

    @PostMapping("login")
    public ResponseEntity<AuthResponse> login(@RequestBody LoginRequest request)
    {
        return ResponseEntity.ok(userService.login(request));
    }

    @PostMapping("register")
    public ResponseEntity<?> register(@RequestBody RegisterRequest request)
    {
        var test = userRepository.findByUsername(request.getUserName());

        if(test.isPresent()){
            return ResponseEntity.notFound().build();
        }

        return ResponseEntity.ok(userService.addUser(request));
    }

}
