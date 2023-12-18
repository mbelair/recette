
export class Ingredient {
    id: number;
    nom: string;
    filterable: boolean = true;
    category: IngredientCategoryEnum
}

export class IngredientCategoryEnum {
    static readonly FRUIT_LEGUME = new IngredientCategoryEnum('01', 'Fruits et légumes');
    static readonly BOULANGERIE = new IngredientCategoryEnum('02', 'Boulangerie');
    static readonly BOUCHERIE = new IngredientCategoryEnum('03', 'Boucherie');
    static readonly POISSONNERIE = new IngredientCategoryEnum('04', 'Poissonnerie');
    static readonly CHARCUTTERIE = new IngredientCategoryEnum('05', 'Charcutterie et fromage');
    static readonly PRODUIT_LAITIER = new IngredientCategoryEnum('06', 'Produit laitier');
    static readonly CONGELE = new IngredientCategoryEnum('07', 'Congelé');
    static readonly EPICERIE = new IngredientCategoryEnum('08', 'Épicerie');
    static readonly AUTRE = new IngredientCategoryEnum('09', 'Autre');

    typeCode: string;
    label: string;

    constructor(typeCode: string, label: string) {
        this.typeCode = typeCode;
        this.label = label;
    }

    public static fromTypeCode(typeCode: String): IngredientCategoryEnum {
        return Object.values(IngredientCategoryEnum).find(u => u.typeCode === typeCode) || null;
    }

    public static allIngredientCategories() {
        return Object.values(IngredientCategoryEnum).sort((a: IngredientCategoryEnum, b: IngredientCategoryEnum) => {
            return a.label.localeCompare(b.label);
        });
    }
}

