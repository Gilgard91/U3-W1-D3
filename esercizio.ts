abstract class LavoratoreAutonomo {
  codredd: number;
  redditoannuolordo: number;
  tasseinps: number;
  tasseirpef: number;

  constructor(
    _codredd: number,
    _redditoannuolordo: number,
    _tasseinps: number,
    _tasseirpef: number
  ) {
    this.codredd = _codredd;
    this.redditoannuolordo = _redditoannuolordo;
    this.tasseinps = _tasseinps;
    this.tasseirpef = _tasseirpef;
  }

  getUtileTasse(): number {
    return this.tasseinps + this.tasseirpef;
  }

  getTasseInps(): number {
    return this.tasseinps;
  }

  getTasseIrpef(): number {
    return this.tasseirpef;
  }

  getRedditoAnnuoNetto(): number {
    return this.redditoannuolordo - this.getUtileTasse();
  }
}

class LavoratoreAutonomo1 extends LavoratoreAutonomo {
  constructor(
    _codredd: number,
    _redditoannuolordo: number,
    _tasseinps: number,
    _tasseirpef: number
  ) {
    super(_codredd, _redditoannuolordo, _tasseinps, _tasseirpef);
  }
}

const lavoratore1 = new LavoratoreAutonomo1(1, 40000, 3500, 7000);
console.log("Codice Reddito: " + lavoratore1.codredd);
console.log("Reddito Annuo Lordo: " + lavoratore1.redditoannuolordo);
console.log("Tasse INPS: " + lavoratore1.getTasseInps());
console.log("Tasse IRPEF: " + lavoratore1.getTasseIrpef());
console.log("Reddito Annuo Netto: " + lavoratore1.getRedditoAnnuoNetto());
