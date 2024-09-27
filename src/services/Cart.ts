import { Storable } from "../interfaces/Storable";

export class Cart  {
    constructor(private storage: Storable) {

    }
    showDetails(): string {
        return 'Vous avez dépensé : ' + this.storage.total() + ' €'
    }
}