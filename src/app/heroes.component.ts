import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { Hero } from "./hero";
import { HeroService } from './hero.service';

@Component({
  selector: 'my-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

export class HeroesComponent implements OnInit {
  selectedHero: Hero;
  heroes: Hero[];

  constructor(
    private router: Router,
    private heroService: HeroService) { }

  ngOnInit(): void {
    return this.getHeroes();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  getHeroes(): void {
    //this.heroes = this.heroService.getHeroes();

    // the hero service was change to return a Promise, so change the 
    // implementation to act on the Promise when it resolves
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);

    // To simulate a slow connection, use getHeroesSlowly() method to the HeroService.
    //this.heroService.getHeroesSlowly().then(heroes => this.heroes = heroes);
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }
}
