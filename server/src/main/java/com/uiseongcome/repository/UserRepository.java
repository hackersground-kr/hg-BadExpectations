package com.uiseongcome.repository;

import com.uiseongcome.domain.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, String> {
}
