import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Game } from '../game/game.component';
import { GamesDataService } from '../games-data.service';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {

  game:Game = new Game('123', "No Title", 12);

  constructor(private gamesService:GamesDataService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    const gameId = this.route.snapshot.params['gameId']

    this.gamesService.getGame(gameId).subscribe(game =>this.game =game);

  }

}
