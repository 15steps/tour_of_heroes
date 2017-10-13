import { Component, OnInit } from '@angular/core';
import { Hero } from './hero'
import { HeroService } from './hero.service';

@Component({
  selector: 'my-heroes',
  providers: [HeroService],
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

export class HeroesComponent implements OnInit{
  constructor(private heroService: HeroService) {}

  getHeroes() :void {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }

  ngOnInit() :void {
    this.getHeroes();
  }

  heroes: Hero[];
  selectedHero: Hero;

  onSelect(hero: Hero):void {
    this.selectedHero = hero;
  }
}
