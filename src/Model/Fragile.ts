import { Materiel } from './Materiel';

export class Fragile extends Materiel {
    constructor(libelle: string, poids: number) {
        super(undefined, libelle, poids);
    }
    info(): string {
        return `Matériel Fragile - ${this.getLibelle()}, Poids: ${this.getPoids()}kg`;
    }
}