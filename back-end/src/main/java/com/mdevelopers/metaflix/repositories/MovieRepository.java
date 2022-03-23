package com.mdevelopers.metaflix.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.mdevelopers.metaflix.entities.Movie;

public interface MovieRepository extends JpaRepository<Movie , Long> {

}
