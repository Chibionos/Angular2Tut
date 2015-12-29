import {Component} from 'angular2/core';
import {Card} from './card';
import {Rarity} from './card';

@Component({
	selector: 'my-app',
    template: `
    <div class="jumbotron">
        <div class="container">
            <h1>{{title}}</h1>
            <h3>{{card.cardName}}</h3>
            <div class="input-group">
                <span class="input-group-addon">Card Name</span>
                <input type="text" class="form-control" [(ngModel)]="card.cardName">
            </div>
        </div>
    </div>
    `
})

export class AppComponent {
    public title = 'Hearthstone Cards';
    public card : Card = {
        cardName: "Flamestrike",
        rarity: Rarity.Rare
    }
 }
