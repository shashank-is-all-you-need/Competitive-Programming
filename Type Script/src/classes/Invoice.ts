import {HasFormatter} from '../interfaces/HasFormatter.js';
export class Invoice implements HasFormatter{
	
	// readonly client:string; //cannot be changed even in the same class
	// private details:string;
	// public amount:number;
	// hello = "string";
	constructor(
		readonly client:string,
		private details:string,
		public amount:number,
	) {
		// this.client = c;
		// this.details = d;
		// this.amount = a;  
	}

	format() {
		return `${this.client} owes $ ${this.amount} for ${this.details}`;
	}
}