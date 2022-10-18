export class Invoice {
    // readonly client:string; //cannot be changed even in the same class
    // private details:string;
    // public amount:number;
    // hello = "string";
    constructor(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
        // this.client = c;
        // this.details = d;
        // this.amount = a;  
    }
    format() {
        return `${this.client} owes $ ${this.amount} for ${this.details}`;
    }
}
