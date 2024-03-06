import { Component } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.css',
})
export class HeroesComponent {
  hero: Hero = {
    id: 1,
    name: 'Arturia',
    country: 'England',
    servant_type: 'Saber',
    image:
      'https://s1.zerochan.net/Saber.%28Fate.stay.night%29.600.3372713.jpg',
  };
}
