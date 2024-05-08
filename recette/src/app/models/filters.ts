import { Ingredient } from "./ingredient";
import { Tag } from "./tag";
import { TypeRepas } from "./typeRepas";

export class Filters {
    includedIngredients: Ingredient[] = [];
    excludedIngredients: Ingredient[] = [];
    typeRepas: TypeRepas[] = [];
    tempsTotal: TempsTotal[] = [];
    tags: Tag[] = [];
}

export enum TempsTotal {
    LESS30,
    FROM_30_TO_60,
    MORE60,
}