import { Recette } from "./recette";
import { Tag } from "./tag";

export class TagDetail extends Tag {
    recettes: Recette[];
}