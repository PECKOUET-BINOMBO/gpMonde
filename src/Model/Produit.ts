export abstract class Produit
{
    protected __libelle:string;
    protected __poids:number;

    

    constructor(libelle:string, poids:number)
    {
        this.__libelle = libelle;
        this.__poids = poids;

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