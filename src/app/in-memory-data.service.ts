import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      {
        id: 12,
        name: 'Van Gogh',
        country: 'Netherlands',
        servant_type: 'Foreigner',
        image:
          'https://static.wikia.nocookie.net/fategrandorder/images/d/d3/S295_Stage4.webp/revision/latest?cb=20220925052003',
      },
      {
        id: 13,
        name: 'Quetzalcoatl',
        country: 'Mexico',
        servant_type: 'Rider',
        image:
          'https://static.wikia.nocookie.net/typemoon/images/c/cc/RulerQuetzalcoatlSambaStage04.jpg/revision/latest?cb=20181212134426',
      },
      {
        id: 14,
        name: 'James Moriarty',
        country: 'England',
        servant_type: 'Archer',
        image:
          'https://static.wikia.nocookie.net/typemoon/images/0/06/FGO_James_Moriarty_April_Fool_2017.png/revision/latest?cb=20180515215850',
      },
      {
        id: 15,
        name: 'Anastasia Nikolaevna Romanova',
        country: 'Rusia',
        servant_type: 'Caster',
        image:
          'https://static.wikia.nocookie.net/typemoon/images/d/dc/CE923.png/revision/latest?cb=20230502231555',
      },
      {
        id: 16,
        name: 'Hassan of the Cursed Arm',
        country: 'Middle-East',
        servant_type: 'Assassin',
        image:
          'https://static.wikia.nocookie.net/typemoon/images/9/9c/FGO_Hassan_Cursed_arm_April_Fool.png/revision/latest?cb=20180206190328',
      },
      {
        id: 17,
        name: 'Leonidas I',
        country: 'Sparta',
        servant_type: 'Berserker',
        image:
          'https://static.wikia.nocookie.net/typemoon/images/4/46/Muscle_Cavalier_borderless.png/revision/latest?cb=20170923142859',
      },
      {
        id: 18,
        name: 'Sherlock Holmes',
        country: 'England',
        servant_type: 'Ruler',
        image:
          'https://static.wikia.nocookie.net/typemoon/images/8/8c/Screen_Shot_2018-08-12_at_9.31.23_PM.png/revision/latest/scale-to-width-down/1000?cb=20180812133221',
      },
      {
        id: 19,
        name: 'Voyager',
        country: 'NULL',
        servant_type: 'Foreigner',
        image:
          'https://static.wikia.nocookie.net/typemoon/images/8/88/Looking_Up_at_the_Starry_Sky_CE.png/revision/latest?cb=20210325012210',
      },
      {
        id: 20,
        name: 'Gilgamesh',
        country: 'Babylonia',
        servant_type: 'Archer',
        image:
          'https://static.wikia.nocookie.net/typemoon/images/c/cb/GilgameshCapsule.png/revision/latest?cb=20140608122055',
      },
    ];
    return { heroes };
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0
      ? Math.max(...heroes.map((hero) => hero.id)) + 1
      : 11;
  }
}
