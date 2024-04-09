package com.yumme.backendyumme.controller;

import com.yumme.backendyumme.domain.User;
import com.yumme.backendyumme.dto.response.ValidationResponse;
import com.yumme.backendyumme.repository.UserRepository;
import com.yumme.backendyumme.security.jwt.JwtService;
import com.yumme.backendyumme.service.UserService;
import com.yumme.backendyumme.utils.SpringUtils;
import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/api/")
@RequiredArgsConstructor
public class UserController {

    private final JwtService jwtService;
    private final UserService userService;
    private final UserRepository userRepository;

    @GetMapping("user")
    public ResponseEntity<?> getMyUser(
        HttpServletRequest header
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

        return ResponseEntity.ok(user);
    }

    @DeleteMapping("user")
    public ResponseEntity<?> deleteUser(
            HttpServletRequest header
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
        response = userService.deleteUser(user.getId());

        return ResponseEntity.ok(response);
    }



}
