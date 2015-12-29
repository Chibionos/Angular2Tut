System.register(['angular2/core', './card'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, card_1;
<<<<<<< HEAD
    var CARDS, AppComponent;
=======
    var AppComponent, CARDS;
>>>>>>> Changing the Cards to be shown on the list
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (card_1_1) {
                card_1 = card_1_1;
            }],
        execute: function() {
            CARDS = [
                { "id": 2, "cardName": "Lotheb", "rarity": card_1.Rarity.Legendary },
                { "id": 2, "cardName": "Dr.Boom", "rarity": card_1.Rarity.Legendary },
                { "id": 2, "cardName": "Trion Fordring", "rarity": card_1.Rarity.Legendary },
                { "id": 2, "cardName": "Deathwwing", "rarity": card_1.Rarity.Legendary },
                { "id": 2, "cardName": "Thaddius", "rarity": card_1.Rarity.Legendary },
                { "id": 2, "cardName": "Varian Wrynn", "rarity": card_1.Rarity.Legendary },
                { "id": 2, "cardName": "Anub'arak", "rarity": card_1.Rarity.Legendary },
                { "id": 2, "cardName": "Aviana", "rarity": card_1.Rarity.Legendary }
            ];
            AppComponent = (function () {
                function AppComponent() {
                    this.title = 'Hearthstone Cards';
<<<<<<< HEAD
                    this.listOfCards = [
                        { "id": 2, "cardName": "Lotheb", "rarity": card_1.Rarity.Legendary },
                        { "id": 2, "cardName": "Dr.Boom", "rarity": card_1.Rarity.Legendary },
                        { "id": 2, "cardName": "Trion Fordring", "rarity": card_1.Rarity.Legendary },
                        { "id": 2, "cardName": "Deathwwing", "rarity": card_1.Rarity.Legendary },
                        { "id": 2, "cardName": "Thaddius", "rarity": card_1.Rarity.Legendary },
                        { "id": 2, "cardName": "Varian Wrynn", "rarity": card_1.Rarity.Legendary },
                        { "id": 2, "cardName": "Anub'arak", "rarity": card_1.Rarity.Legendary },
                        { "id": 2, "cardName": "Aviana", "rarity": card_1.Rarity.Legendary }
                    ];
=======
                    this.cards = CARDS;
>>>>>>> Changing the Cards to be shown on the list
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
<<<<<<< HEAD
                        template: "\n    <div class=\"jumbotron\">\n        <div class=\"container\">\n            <h1>{{title}}</h1>\n            <div class=\"input-group\">\n                <span class=\"input-group-addon\">Filter Name</span>\n                <input type=\"text\" class=\"form-control\" [(ngModel)]=\"card.cardName\">\n            </div>\n        </div>\n        \n        <ul>\n            <li *ngFor=\"#card of listOfCards\">\n                <span>{{card.cardName}}</span> {{card.rarity}}\n            </li>\n        </ul>\n            \n    </div>\n    "
=======
                        template: "\n    <h1>{{title}}</h1>\n    <ul class=\"list-group\">\n      <li class=\"list-group-item\" *ngFor=\"#card of cards\">\n        <span class=\"badge\">{{card.id}}</span> {{card.cardName}}\n      </li>\n    </ul>   \n  ",
                        styles: ["\n    \n  "]
>>>>>>> Changing the Cards to be shown on the list
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            })();
            exports_1("AppComponent", AppComponent);
            CARDS = [
                { "id": 2, "cardName": "Lotheb", "rarity": card_1.Rarity.Legendary },
                { "id": 2, "cardName": "Dr.Boom", "rarity": card_1.Rarity.Legendary },
                { "id": 2, "cardName": "Trion Fordring", "rarity": card_1.Rarity.Legendary },
                { "id": 2, "cardName": "Deathwwing", "rarity": card_1.Rarity.Legendary },
                { "id": 2, "cardName": "Thaddius", "rarity": card_1.Rarity.Legendary },
                { "id": 2, "cardName": "Varian Wrynn", "rarity": card_1.Rarity.Legendary },
                { "id": 2, "cardName": "Anub'arak", "rarity": card_1.Rarity.Legendary },
                { "id": 2, "cardName": "Aviana", "rarity": card_1.Rarity.Legendary }
            ];
        }
    }
});
//# sourceMappingURL=app.component.js.map