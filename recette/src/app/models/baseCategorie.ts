
export class BaseCategorie {
    id: number;
    nom: string;
    ordre: number;
    isDefaultCategory: boolean = false;


    constructor(defaultValues = false) {
        if (defaultValues) {
            this.nom = "Aucune catégorie"
            this.ordre = 0;
            this.id = 0;
            this.isDefaultCategory = true;
        }
    }

    equals(other: BaseCategorie): boolean {
        return this.id === other.id && this.nom === other.nom && this.ordre === other.ordre && this.isDefaultCategory === other.isDefaultCategory;
    }
}

