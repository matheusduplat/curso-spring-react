package com.mdevelopers.metaflix.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.mdevelopers.metaflix.entities.User;

public interface UserRepository extends JpaRepository<User , Long> {
	User findByEmail(String email);
}
