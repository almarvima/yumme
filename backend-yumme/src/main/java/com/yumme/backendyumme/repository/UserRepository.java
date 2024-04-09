package com.yumme.backendyumme.repository;

import com.yumme.backendyumme.domain.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findByUsername(String username);

    @Modifying
    @Query("""
        UPDATE User u SET
            u.username = 'LOST_FOR_PRIVACY',
            u.name = 'LOST_FOR_PRIVACY',
            u.last_name = 'LOST_FOR_PRIVACY',
            u.email = 'LOST_FOR_PRIVACY'
        WHERE u.id = :id
    """)
    void deleteUser(Long id);
}
