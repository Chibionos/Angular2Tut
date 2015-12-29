System.register([], function(exports_1) {
    var Rarity, Card;
    return {
        setters:[],
        execute: function() {
            (function (Rarity) {
                Rarity[Rarity["Common"] = 0] = "Common";
                Rarity[Rarity["Uncommon"] = 1] = "Uncommon";
                Rarity[Rarity["Rare"] = 2] = "Rare";
                Rarity[Rarity["Epic"] = 3] = "Epic";
                Rarity[Rarity["Legendary"] = 4] = "Legendary";
            })(Rarity || (Rarity = {}));
            exports_1("Rarity", Rarity);
            Card = (function () {
                function Card() {
                    this.rarity = Rarity.Common;
                }
                return Card;
            })();
            exports_1("Card", Card);
        }
    }
});
//# sourceMappingURL=card.js.map