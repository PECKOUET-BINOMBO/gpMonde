import { Produit } from "./Produit";

export abstract class Cargaison
{
    protected __produits:Produit[] = [];
    protected __distance:number;

    protected static LIMITES_PRODUITS:number = 10;

    constructor(distance:number = 0) {
        this.__distance = distance;
    }

    abstract calculerFrais(produit:Produit):number;


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
            console.log(`Limite de produits atteinte pour cette cargaison. Impossible d'ajouter le produit ${produit.getLibelle()}.`);
            return;
        }

        this.__produits.push(produit);
        console.log(`Produit ${produit.getLibelle()} ajouté à la cargaison.`);
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
