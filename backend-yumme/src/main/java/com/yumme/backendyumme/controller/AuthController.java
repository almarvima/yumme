package com.yumme.backendyumme.controller;

import com.yumme.backendyumme.auth.Request.LoginRequest;
import com.yumme.backendyumme.auth.Request.RegisterRequest;
import com.yumme.backendyumme.auth.Response.AuthResponse;
import com.yumme.backendyumme.repository.UserRepository;
import com.yumme.backendyumme.service.UserService;
import com.yumme.backendyumme.utils.SpringUtils;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/auth/")
@RequiredArgsConstructor
public class AuthController {

    private final UserService userService;
    private final UserRepository userRepository;

    @PostMapping("register")
    public ResponseEntity<?> register(@RequestBody RegisterRequest request)
    {
        var user = userRepository.findByUsername(request.getUserName());

        if(user.isPresent()){
            return SpringUtils.userAlreadyExist();
        }

        return ResponseEntity.ok(userService.createUser(request));
    }

    @PostMapping("login")
    public ResponseEntity<AuthResponse> login(@RequestBody LoginRequest request)
    {
        return ResponseEntity.ok(userService.login(request));
    }

}
