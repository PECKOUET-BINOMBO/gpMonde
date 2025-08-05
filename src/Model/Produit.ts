import { GenererMatricule }  from "./GenererMatricule";

export abstract class Produit
{
    protected __matricule:number;
    protected __libelle:string;
    protected __poids:number;

    

    constructor(matricule:number = GenererMatricule.genererMatricule(), libelle:string, poids:number)
    {
        this.__matricule = matricule;
        this.__libelle = libelle;
        this.__poids = poids;

    }

    public getMatricule():number
    {
        return this.__matricule;
    }

    public getLibelle():string
    {
        return this.__libelle;
    }

    public setLibelle(libelle:string):void
    {
        this.__libelle = libelle;
    }

    public getPoids():number
    {
        return this.__poids;
    }

    public setPoids(poids:number):void
    {
        this.__poids = poids;
    }

    abstract info():string;

}