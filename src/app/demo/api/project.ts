interface InventoryStatus {
    label: string;
    value: string;
}
export interface Project {
    id?: string;
    code?: string;
    intitule?: string;
    maitre_oeuvre?: string;
    maitre_ouvrage?: string;
    description?: string;
    monnaie_projet?: string;
    taux_rent_eco?: number;
    taux_rent_interneInit?: number;
    cout_total?: number;
    observations?: Text;
    dateDeb?: Date;
    dateFin?: Date;
    secteur?: string;
    stade?: string;
}