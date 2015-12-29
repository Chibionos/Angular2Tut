export enum Rarity {
    Common,
    Uncommon,
    Rare,
    Epic,
    Legendary
} 

export class Card {
    public cardName : string;
    public rarity : Rarity = Rarity.Common;
}