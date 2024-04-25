
export class Ingredient {
    id: number;
    nom: string;
    category: IngredientCategoryEnum;
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