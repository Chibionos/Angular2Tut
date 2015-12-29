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
    template: `
    <div class="jumbotron">
        <div class="container">
            <h1>{{title}}</h1>
            <div class="input-group">
                <span class="input-group-addon">Filter Name</span>
                <input type="text" class="form-control" [(ngModel)]="card.cardName">
            </div>
        </div>
        
        <ul>
            <li *ngFor="#card of listOfCards">
                <span>{{card.cardName}}</span> {{card.rarity}}
            </li>
        </ul>
            
    </div>
    `
})
export class AppComponent {
    public title = 'Hearthstone Cards';
    public listOfCards : Card[] = [
        { "id" : 2, "cardName" : "Lotheb", "rarity" : Rarity.Legendary },
        { "id" : 2, "cardName" : "Dr.Boom", "rarity" : Rarity.Legendary },
        { "id" : 2, "cardName" : "Trion Fordring", "rarity" : Rarity.Legendary },
        { "id" : 2, "cardName" : "Deathwwing", "rarity" : Rarity.Legendary },
        { "id" : 2, "cardName" : "Thaddius", "rarity" : Rarity.Legendary },
        { "id" : 2, "cardName" : "Varian Wrynn", "rarity" : Rarity.Legendary },
        { "id" : 2, "cardName" : "Anub'arak", "rarity" : Rarity.Legendary },
        { "id" : 2, "cardName" : "Aviana", "rarity" : Rarity.Legendary }
    ];
    // public card : Card = { "id" : 2, "cardName" : "Lotheb", "rarity" : Rarity.Legendary };
 }
