package com.example.backend.repository;


import com.example.backend.domain.Game;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface GameRepository extends MongoRepository<Game,Long>{
    Game getById(String id);
    Game getByName(String name);
    boolean existsByName(String name);
}
