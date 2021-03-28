package com.example.backend.web;

import com.example.backend.domain.Game;
import com.example.backend.service.GameService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/Games")
@CrossOrigin
public class GameController {
    @Autowired
    private GameService gameService;

    @PostMapping("")
    public ResponseEntity<?> addNewGame(@Valid @RequestBody Game game, BindingResult result) {
        String x = game.getName();
        boolean check = gameService.checkName(x);

        if (check == false) {
            Game newGame;
            if (result.hasErrors()) {
                Map<String, String> errorMap = new HashMap<>();

                for (FieldError error : result.getFieldErrors()) {
                    errorMap.put(error.getField(), error.getDefaultMessage());
                }
                return new ResponseEntity<Map<String, String>>(errorMap, HttpStatus.BAD_REQUEST);
            }
            newGame = gameService.saveOrUpdateGame(game);

            return new ResponseEntity<Game>(newGame, HttpStatus.CREATED);


        } else {
            Map<String, String> er = new HashMap<>();
            er.put("error", "Game Name Existed");
            return new ResponseEntity<Map<String, String>>(er, HttpStatus.BAD_REQUEST);
        }
    }

    @GetMapping("/all")
    public Iterable<Game> getAllGames(){
        return gameService.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getGameById(@PathVariable String id){
        Game game=gameService.findById(id);
        return new ResponseEntity<Game>(game,HttpStatus.OK);
    }

    @DeleteMapping("delete/{id}")
    public ResponseEntity<?> deleteGame(@PathVariable String id){
        gameService.delete(id);

        return new ResponseEntity<String>("Details deleted",HttpStatus.OK);
    }
}
