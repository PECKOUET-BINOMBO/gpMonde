export class GenererMatricule
{
    private static __compteur:number = 0;

    public static genererMatricule():number
    {
        return ++this.__compteur;
    }

}