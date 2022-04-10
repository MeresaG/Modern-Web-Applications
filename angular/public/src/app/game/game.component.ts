import { Component, OnInit } from '@angular/core';


import { GamesDataService } from '../games-data.service';


export class Game {
  _id:string;
  title!:string;
  price!: number;
  year!:number;
  rate!:number;
  minPlayers!:number;
  maxPlayers!:number;
  minAge!:number;
  constructor(id:string, title:string, price:number) {
    this._id = id;
    this.title= title;
    this.price = price;
  }

}

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  games!:Game[];
  
  constructor(private gamesService: GamesDataService) { 
    
  }

  ngOnInit(): void {
    this.gamesService.getGames().subscribe(
      {
        next: (games) => {
          this.games = games;
      },
      error: err => {
        console.log("Service Error", err);
        
      }, complete: () => {
        console.log("Done");
        
      }}
    );
  }

}
