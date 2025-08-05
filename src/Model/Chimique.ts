import { Produit } from "./Produit";

export class Chimique extends Produit
{
    constructor(libelle: string, poids: number, private degreToxicite: number) {
        super(libelle, poids);
    }

    info(): string {
        return `Chimique: ${this.getLibelle()}, Poids: ${this.getPoids()}kg, Degré de toxicité: ${this.getDegreToxicite()}/10`;
    }

    getDegreToxicite(): number {
        return this.degreToxicite;
    }
}