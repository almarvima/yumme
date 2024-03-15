package com.yumme.backendyumme.service.impl;

import com.yumme.backendyumme.domain.User;
import com.yumme.backendyumme.repository.UserRepository;
import com.yumme.backendyumme.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepository userRepository;

    @Override
    public void addUser(User user) {
        userRepository.save(user);
    }

}
