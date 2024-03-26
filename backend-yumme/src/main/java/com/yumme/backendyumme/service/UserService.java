package com.yumme.backendyumme.service;

import com.yumme.backendyumme.auth.Request.LoginRequest;
import com.yumme.backendyumme.auth.Request.RegisterRequest;
import com.yumme.backendyumme.auth.Response.AuthResponse;

public interface UserService {
    AuthResponse createUser(RegisterRequest request);

    AuthResponse login(LoginRequest request);
}
