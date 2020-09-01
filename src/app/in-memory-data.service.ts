import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService {

  constructor() { }

  createDb() {
    const heroes = [
    { id: 11, name: 'Nigel Mansell'},
    { id: 12, name: 'Ayrton Senna'},
    { id: 13, name: 'Michael Schumacher'},
    { id: 14, name: 'Alain Prost'},
    { id: 15, name: 'Lewis Hamilton'},
    { id: 16, name: 'Jenson Button'},
    { id: 17, name: 'David Coulthard'},
    { id: 18, name: 'Jackie Stewart'},
    { id: 19, name: 'Max Verstappen'},
    { id: 20, name: 'Valtteri Bottas'}
    ];
    return {heroes};
  }

  /*
   * Overrides the genId method. If the heroes array is empty this returns
   * the initial number (11). If not, it returns the highest hero id + 1.  
   *
   */

  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1: 11;
  }
}
