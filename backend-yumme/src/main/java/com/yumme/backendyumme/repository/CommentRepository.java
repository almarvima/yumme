package com.yumme.backendyumme.repository;

import com.yumme.backendyumme.domain.Comment;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CommentRepository extends JpaRepository<Comment, Long> {

}
