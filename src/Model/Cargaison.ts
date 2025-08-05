import { GenererMatricule } from "./GenererMatricule";
import { Produit } from "./Produit";

export abstract class Cargaison
{
    protected __matricule:number;
    protected __produits:Produit[] = [];
    protected __distance:number;

    protected static LIMITES_PRODUITS:number = 10;

    constructor(matricule:number = GenererMatricule.genererMatricule(), distance:number = 0) {
        this.__matricule = matricule;
        this.__distance = distance;
    }

    abstract calculerFrais(produit:Produit):number;

    public getMatricule():number
    {
        return this.__matricule;
    }

    public getProduits():Produit[]
    {
        return this.__produits;
    }

    public nbProduits():number
    {
        return this.__produits.length;
    }

    public getDistance():number
    {
        return this.__distance;
    }

    public ajouterProduit(produit:Produit):void
    {
        if (this.__produits.length  >= Cargaison.LIMITES_PRODUITS)
        {
            console.log(`Limite de produits atteinte pour la cargaison ${this.__matricule}. Impossible d'ajouter le produit ${produit.getLibelle()}.`);
            return;
        }

        this.__produits.push(produit);
        console.log(`Produit ${produit.getLibelle()} ajouté à la cargaison ${this.__matricule}.`);
    }

    public sommeTotale():number
    {
        return this.__produits.reduce((total, produit) => total + this.calculerFrais(produit), 0);
    }

    public nbProduit():number
    {
        return this.__produits.length;
    }

}
