package com.yumme.backendyumme.service;

import com.yumme.backendyumme.auth.Request.LoginRequest;
import com.yumme.backendyumme.auth.Request.RegisterRequest;
import com.yumme.backendyumme.auth.Response.AuthResponse;
import com.yumme.backendyumme.domain.User;
import org.springframework.http.ResponseEntity;

public interface UserService {
    AuthResponse createUser(RegisterRequest request);

    AuthResponse login(LoginRequest request);

    ResponseEntity<?> deleteUser(Long id);

    ResponseEntity<?> changePassword(String password, User user);
}
