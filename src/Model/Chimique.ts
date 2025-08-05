import { Produit } from "./Produit";

export class Chimique extends Produit
{
    constructor(libelle: string, poids: number, private degreToxicite: number) {
        super(undefined, libelle, poids);
    }

    info(): string {
        return `Chimique: ${this.getLibelle()}, Poids: ${this.getPoids()}kg, Degré de toxicité: ${this.degreToxicite}/10`;
    }

    getDegreToxicite(): number {
        return this.degreToxicite;
    }
}