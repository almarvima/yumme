package com.yumme.backendyumme.service.impl;

import com.yumme.backendyumme.auth.Request.LoginRequest;
import com.yumme.backendyumme.auth.Request.RegisterRequest;
import com.yumme.backendyumme.auth.Response.AuthResponse;
import com.yumme.backendyumme.domain.Role;
import com.yumme.backendyumme.domain.User;
import com.yumme.backendyumme.repository.UserRepository;
import com.yumme.backendyumme.security.jwt.JwtService;
import com.yumme.backendyumme.service.UserService;
import com.yumme.backendyumme.utils.SpringUtils;
import jakarta.transaction.Transactional;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserService {

    private final UserRepository userRepository;
    private final JwtService jwtService;
    private final PasswordEncoder passwordEncoder;
    private final AuthenticationManager authenticationManager;

    @Override
    public AuthResponse createUser(RegisterRequest request) {

        User user = User.builder()
                .username(request.getUserName())
                .name(request.getName())
                .password(passwordEncoder.encode(request.getPassword()))
                .last_name(request.getLastName())
                .email(request.getEmail())
                .role(Role.USER)
                .status("active")
                .build();

        user.onCreate();
        user.onUpdate();

        userRepository.save(user);

        return AuthResponse.builder()
                .token(jwtService.getToken(user))
                .build();
    }

    @Override
    public AuthResponse login(LoginRequest request) {
        authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(request.getUserName(), request.getPassword()));
        UserDetails user = userRepository.findByUsername(request.getUserName()).orElseThrow();
        String token = jwtService.getToken(user);
        return AuthResponse.builder()
                .token(token)
                .build();
    }

    @Override
    @Transactional
    public ResponseEntity<?> deleteUser(Long id) {
        userRepository.deleteUser(id);
        return SpringUtils.userDeleted();
    }
}
