package com.yumme.backendyumme.service;

import com.yumme.backendyumme.domain.Comment;
import com.yumme.backendyumme.domain.Recipe;
import com.yumme.backendyumme.domain.User;
import com.yumme.backendyumme.dto.request.CommentRequest;

public interface CommentService {

    Long createComment(CommentRequest comment, User user, Recipe recipe);
}
