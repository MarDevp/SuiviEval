export class Indicateur{



    id_indicateur   ?: number;
    libele_indicateur  ? : string;
    description_indicateur ?: string;
    format_indicateur ?: string;
    tendance_souhaite_hausse ?: number;
    date_prevu_realisation_indicateur ?: Date;
    moyen_verification_indicateur ?: string;

    unite_mes_indicateur ?: string;
    valeur_cible_indicateur ?: number;
    valeur_initiale_indicateur ?: number;
    objres ?: number;
    id_objres ?: number;
    objectif ?: any;
constructor(){}


}