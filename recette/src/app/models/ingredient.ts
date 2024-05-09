
export class Ingredient {
    id: number;
    nom: string;
    category: IngredientCategoryEnum;

    static fromIngredient(i: Ingredient): Ingredient {
        const toReturn = new Ingredient();
        toReturn.id = i.id;
        toReturn.nom = i.nom;
        toReturn.category = i.category;
        return toReturn;
    }
}

export function allCategories(): IngredientCategoryEnum[] {
    return [IngredientCategoryEnum.FRUIT_LEGUME,
    IngredientCategoryEnum.BOULANGERIE,
    IngredientCategoryEnum.BOUCHERIE,
    IngredientCategoryEnum.POISSONNERIE,
    IngredientCategoryEnum.CHARCUTTERIE,
    IngredientCategoryEnum.PRODUIT_LAITIER,
    IngredientCategoryEnum.CONGELE,
    IngredientCategoryEnum.EPICERIE,
    IngredientCategoryEnum.ALCOOL,
    IngredientCategoryEnum.AUTRE].sort((a, b) => { return getCategoryLabel(a).localeCompare(getCategoryLabel(b)) });
}

export enum IngredientCategoryEnum {
    FRUIT_LEGUME = 'FRUIT_LEGUME',
    BOULANGERIE = 'BOULANGERIE',
    BOUCHERIE = 'BOUCHERIE',
    POISSONNERIE = 'POISSONNERIE',
    CHARCUTTERIE = 'CHARCUTTERIE',
    PRODUIT_LAITIER = 'PRODUIT_LAITIER',
    CONGELE = 'CONGELE',
    EPICERIE = 'EPICERIE',
    ALCOOL = 'ALCOOL',
    AUTRE = 'AUTRE',
}

export function getCategoryLabel(category: IngredientCategoryEnum) {
    switch (category) {
        case (IngredientCategoryEnum.FRUIT_LEGUME):
            return "Fruits et légumes";
        case (IngredientCategoryEnum.BOULANGERIE):
            return "Boulangerie";
        case (IngredientCategoryEnum.BOUCHERIE):
            return "Boucherie";
        case (IngredientCategoryEnum.POISSONNERIE):
            return "Poissonnerie";
        case (IngredientCategoryEnum.CHARCUTTERIE):
            return "Charcuterie et fromage";
        case (IngredientCategoryEnum.PRODUIT_LAITIER):
            return "Produit laitier";
        case (IngredientCategoryEnum.CONGELE):
            return "Congelé";
        case (IngredientCategoryEnum.EPICERIE):
            return "Épicerie";
        case (IngredientCategoryEnum.AUTRE):
            return "Autre";
        case (IngredientCategoryEnum.ALCOOL):
            return "Alcool";
    }
};

export function getCategoryOrder(category: IngredientCategoryEnum): number {
    switch (category) {
        case (IngredientCategoryEnum.FRUIT_LEGUME):
            return 0;
        case (IngredientCategoryEnum.BOULANGERIE):
            return 2;
        case (IngredientCategoryEnum.BOUCHERIE):
            return 1;
        case (IngredientCategoryEnum.POISSONNERIE):
            return 3;
        case (IngredientCategoryEnum.CHARCUTTERIE):
            return 4;
        case (IngredientCategoryEnum.PRODUIT_LAITIER):
            return 5;
        case (IngredientCategoryEnum.CONGELE):
            return 7;
        case (IngredientCategoryEnum.EPICERIE):
            return 6;
        default:
            return 99;
    }
}