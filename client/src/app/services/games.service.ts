import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Game } from '../models/game';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class GamesService {


  // http://localhost:3000/api
  
  API_URI = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

    getGames() {

      return this.http.get(`${this.API_URI}/games`);

    }

    getGame(id: string | number) {
      return this.http.get(`${this.API_URI}/games/${id}`);
    }

    saveGame(game: Game){
      return this.http.post(`${this.API_URI}/games`, game);
    }

    updateGame(id: string | number, updatedGame: Game){
      return this.http.put(`${this.API_URI}/games/${id}`, updatedGame);
    }

    //Clase web
  
    deleteGame(id: string){
      return this.http.delete(`${this.API_URI}/games/${id}`);
    }

    //Clase web

    



}
