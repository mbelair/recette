export class TypeRepas {

    static readonly ACCOMPAGNEMENT = new TypeRepas("01", "Accompagnement");
    static readonly DEJEUNER = new TypeRepas("02", "Déjeuner & brunch");
    static readonly DESSERT = new TypeRepas("03", "Collation & Dessert");
    static readonly ENTREE = new TypeRepas("04", "Entrée");
    static readonly DINER = new TypeRepas("05", "Dîner");
    static readonly PLAT_PRINCIPAL = new TypeRepas("06", "Plat principal");

    static readonly ALL = [TypeRepas.ACCOMPAGNEMENT, TypeRepas.DEJEUNER, TypeRepas.DESSERT, TypeRepas.ENTREE, TypeRepas.PLAT_PRINCIPAL];

    typeCode: string;
    label: string;

    constructor(typeCode: string, label: string) {
        this.typeCode = typeCode;
        this.label = label;
    }

    public static fromTypeCode(typeCode: String): TypeRepas {
        return Object.values(TypeRepas).find(u => u.typeCode === typeCode) || null;
    }

}


