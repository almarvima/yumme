package com.yumme.backendyumme.service.impl;

import com.yumme.backendyumme.domain.Comment;
import com.yumme.backendyumme.domain.Recipe;
import com.yumme.backendyumme.domain.User;
import com.yumme.backendyumme.dto.request.CommentRequest;
import com.yumme.backendyumme.repository.CommentRepository;
import com.yumme.backendyumme.service.CommentService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class CommentServiceImpl implements CommentService {

    @Autowired
    private final CommentRepository commentRepository;

    @Override
    public Long createComment(CommentRequest commentRequest, User user, Recipe recipe) {

        Comment comment = Comment.builder()
                .comment(commentRequest.getComment())
                .author(user.getUsername())
                .user(user)
                .recipe(recipe)
                .build();

        Comment comentSave = commentRepository.save(comment);

        return comentSave.getId();
    }
}
