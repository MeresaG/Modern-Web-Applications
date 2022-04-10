import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Game } from './game/game.component';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GamesDataService {

  private baseURl= environment.REST_API_BASE
  

  constructor(private http:HttpClient) { 

  }

  public getGames(): Observable<Game[]> {

    const url:string = this.baseURl+ "games";
    return this.http.get<Game[]>(url);

  }

  public getGame(gameId:string): Observable<Game> {

    const url:string = this.baseURl+ "games/" + gameId;
    return this.http.get<Game>(url);

  }



}
