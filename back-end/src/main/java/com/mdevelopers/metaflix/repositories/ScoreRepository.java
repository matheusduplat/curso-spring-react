package com.mdevelopers.metaflix.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.mdevelopers.metaflix.entities.Score;
import com.mdevelopers.metaflix.entities.ScorePK;

public interface ScoreRepository extends JpaRepository<Score , ScorePK> {

}
