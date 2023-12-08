import { Preparation } from "./preparation";

export interface CategoriePreparation {
    id: number;
    nom: string;
    ordre: number;
    preparation: Preparation[];
}