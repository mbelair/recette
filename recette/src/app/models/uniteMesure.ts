export class UniteMesure {
    static readonly TASSE = new UniteMesure('01', 'tasse');
    static readonly C_A_SOUPE = new UniteMesure('02', 'c. à soupe');
    static readonly C_A_THE = new UniteMesure('03', 'c. à thé');
    static readonly ML = new UniteMesure('04', 'mL');
    static readonly G = new UniteMesure('05', 'g');
    static readonly LB = new UniteMesure('06', 'lb');
    static readonly UNITE = new UniteMesure('07', 'unité');

    static readonly UNITE_GROUP = {
        groups: [{
            label: "Volume",
            units: [UniteMesure.TASSE, UniteMesure.C_A_SOUPE, UniteMesure.C_A_THE, UniteMesure.ML]
        },
        {
            label: "Poids",
            units: [UniteMesure.G, UniteMesure.LB]
        }],
        units: [UniteMesure.UNITE]
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
        if (['07'].includes(this.typeCode)) {
            toReturn = '';
        }
        return toReturn;
    }
}


