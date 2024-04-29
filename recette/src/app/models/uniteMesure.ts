export class UniteMesure {
    static readonly ML = new UniteMesure('04', 'mL');
    static readonly G = new UniteMesure('05', 'g');
    static readonly UNITE = new UniteMesure('07', 'unité');
    static readonly AUCUN = new UniteMesure('08', 'aucun');
    static readonly PINCEE = new UniteMesure('09', 'pincée');

    static readonly UNITE_GROUP = {
        units: [UniteMesure.ML, UniteMesure.G, UniteMesure.PINCEE, UniteMesure.UNITE, UniteMesure.AUCUN]
    };

    typeCode: string;
    label: string;

    constructor(typeCode: string, label: string) {
        this.typeCode = typeCode;
        this.label = label;
    }

    public static fromTypeCode(typeCode: String): UniteMesure {
        return Object.values(UniteMesure).find(u => u.typeCode === typeCode) || null;
    }

    getFormatedLabel(plural: boolean) {
        let toReturn = this.label;
        if (plural && ['01', '06'].includes(this.typeCode)) {
            toReturn += "s";
        }
        if (['07', '08'].includes(this.typeCode)) {
            toReturn = '';
        }
        return toReturn;
    }
}


