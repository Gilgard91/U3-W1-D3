var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var LavoratoreAutonomo = /** @class */ (function () {
    function LavoratoreAutonomo(_codredd, _redditoannuolordo, _tasseinps, _tasseirpef) {
        this.codredd = _codredd;
        this.redditoannuolordo = _redditoannuolordo;
        this.tasseinps = _tasseinps;
        this.tasseirpef = _tasseirpef;
    }
    LavoratoreAutonomo.prototype.getUtileTasse = function () {
        return this.tasseinps + this.tasseirpef;
    };
    LavoratoreAutonomo.prototype.getTasseInps = function () {
        return this.tasseinps;
    };
    LavoratoreAutonomo.prototype.getTasseIrpef = function () {
        return this.tasseirpef;
    };
    LavoratoreAutonomo.prototype.getRedditoAnnuoNetto = function () {
        return this.redditoannuolordo - this.getUtileTasse();
    };
    return LavoratoreAutonomo;
}());
var LavoratoreAutonomo1 = /** @class */ (function (_super) {
    __extends(LavoratoreAutonomo1, _super);
    function LavoratoreAutonomo1(_codredd, _redditoannuolordo, _tasseinps, _tasseirpef) {
        return _super.call(this, _codredd, _redditoannuolordo, _tasseinps, _tasseirpef) || this;
    }
    return LavoratoreAutonomo1;
}(LavoratoreAutonomo));
var lavoratore1 = new LavoratoreAutonomo1(1, 40000, 3500, 7000);
console.log("Codice Reddito: " + lavoratore1.codredd);
console.log("Reddito Annuo Lordo: " + lavoratore1.redditoannuolordo);
console.log("Tasse INPS: " + lavoratore1.getTasseInps());
console.log("Tasse IRPEF: " + lavoratore1.getTasseIrpef());
console.log("Reddito Annuo Netto: " + lavoratore1.getRedditoAnnuoNetto());
