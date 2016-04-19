import {Component} from 'angular2/core';
import {OnInit} from 'angular2/core';
import { Router } from 'angular2/router';

import {Hero} from "./hero";
import {HeroDetailComponent} from './hero-detail.component';
import {HeroService} from './hero.service';

@Component({
    selector: 'my-heroes',
    templateUrl: "app/views/heroes.component.html",
	styleUrls: ['app/css/heroes.component.css'],
	directives: [HeroDetailComponent]
})

export class HeroesComponent implements OnInit {
	title = 'Tour of Heroes';
	selectedHero: Hero;
	heroes: Hero[];

	constructor(
		private _router: Router,
		private _heroService: HeroService) { }

	getHeroes() {
		this._heroService.getHeroes().then(heroes => this.heroes = heroes);
	}
	ngOnInit() {
		this.getHeroes();
	}

	onSelect(hero: Hero) { 
		this.selectedHero = hero; 
	}

	gotoDetail() {
		this._router.navigate(['HeroDetail', { id: this.selectedHero.id }]);
	}
}

