import {Component} from 'angular2/core';
import {Card} from './card';
import {Rarity} from './card';

var CARDS : Card[] = [
    { "id" : 2, "cardName" : "Lotheb", "rarity" : Rarity.Legendary },
    { "id" : 2, "cardName" : "Dr.Boom", "rarity" : Rarity.Legendary },
    { "id" : 2, "cardName" : "Trion Fordring", "rarity" : Rarity.Legendary },
    { "id" : 2, "cardName" : "Deathwwing", "rarity" : Rarity.Legendary },
    { "id" : 2, "cardName" : "Thaddius", "rarity" : Rarity.Legendary },
    { "id" : 2, "cardName" : "Varian Wrynn", "rarity" : Rarity.Legendary },
    { "id" : 2, "cardName" : "Anub'arak", "rarity" : Rarity.Legendary },
    { "id" : 2, "cardName" : "Aviana", "rarity" : Rarity.Legendary }
];

@Component({
  selector: 'my-app',
  template:`
    <h1>{{title}}</h1>
    <ul class="list-group">
      <li class="list-group-item" *ngFor="#card of cards">
        <span class="badge">{{card.id}}</span> {{card.cardName}}
      </li>
    </ul>   
  `,
  styles:[`
    
  `]
})
export class AppComponent {
  public title = 'Hearthstone Cards';
  public cards = CARDS;
}
