package com.mdevelopers.metaflix.controllers;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.mdevelopers.metaflix.dto.MovieDTO;
import com.mdevelopers.metaflix.dto.ScoreDTO;
import com.mdevelopers.metaflix.services.ScoreService;

@RestController
@RequestMapping(value = "/scores")
public class ScoreController {
	
	@Autowired
	private ScoreService scoreService;
	
	@PutMapping
	public MovieDTO saveScore(@RequestBody ScoreDTO scoreDTO){
		MovieDTO movieDTO = scoreService.saveScore(scoreDTO);
		return movieDTO;
	}

}
