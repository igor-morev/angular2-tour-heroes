import { RouteParams } from 'angular2/router';
import { Component, Input, OnInit } from 'angular2/core';

import {Hero} from "./hero";
import { HeroService } from './hero.service';
import { HEROES } from "./mock-heroes";



@Component({
	selector: 'my-hero-detail',
	styleUrls: ['app/css/hero-detail.component.css'],
	templateUrl: "app/views/hero-details.component.html"
})

export class HeroDetailComponent implements OnInit {
	@Input() hero: Hero;
	
	constructor(
		private _heroService: HeroService,
		private _routeParams: RouteParams) {
	}

	ngOnInit() {
		let id = +this._routeParams.get('id');
		this._heroService.getHero(id)
			.then(hero => this.hero = hero);
	}

	goBack() {
		window.history.back();
	}
}