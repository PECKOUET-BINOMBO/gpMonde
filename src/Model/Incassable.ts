import { Materiel } from './Materiel';

export class Incassable extends Materiel {
    constructor(libelle: string, poids: number) {
        super(libelle, poids);
    }
    info(): string {
        return `Matériel Incassable - ${this.getLibelle()}, Poids: ${this.getPoids()}kg`;
    }
}