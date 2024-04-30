export class TypeRepas {

    static readonly ACCOMPAGNEMENT = new TypeRepas("01", "Accompagnement");
    static readonly COLLATION = new TypeRepas("02", "Collation");
    static readonly DEJEUNER = new TypeRepas("03", "Déjeuner & brunch");
    static readonly DESSERT = new TypeRepas("04", "Dessert");
    static readonly ENTREE = new TypeRepas("05", "Entrée");
    static readonly DINER = new TypeRepas("06", "Dîner");
    static readonly PLAT_PRINCIPAL = new TypeRepas("07", "Plat principal");

    static readonly ALL = [TypeRepas.ACCOMPAGNEMENT, TypeRepas.COLLATION, TypeRepas.DEJEUNER, TypeRepas.DESSERT, TypeRepas.ENTREE, TypeRepas.PLAT_PRINCIPAL];

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


