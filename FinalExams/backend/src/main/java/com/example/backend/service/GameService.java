package com.example.backend.service;


import com.example.backend.domain.Game;
import com.example.backend.repository.GameRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin
@Service
public class GameService {
    @Autowired
    private GameRepository gameRepository;

    public Game saveOrUpdateGame(Game game)
    {
        return gameRepository.save(game);
    }

    public Iterable<Game> findAll(){
        return gameRepository.findAll();
    }

    public Game findById(String id){
        return gameRepository.getById(id);
    }

    public Game findByName(String name){
        return gameRepository.getByName(name);
    }

    public boolean checkName(String name){return gameRepository.existsByName(name);}

    public void delete(String id){
        Game user = findById(id);
        gameRepository.delete(user);
    }

}
