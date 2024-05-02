export class Tag {
    id: number;
    nom: string;

    static fromTag(tag: Tag): Tag {
        const toReturn = new Tag();
        toReturn.id = tag.id;
        toReturn.nom = tag.nom;
        return toReturn;
    }
}