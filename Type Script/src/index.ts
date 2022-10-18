import {Invoice} from './classes/Invoice.js';
import {Payment} from './classes/Payment.js';
import {HasFormatter} from './interfaces/HasFormatter.js';
import {ListTemplate} from './classes/ListTemplate.js';

const form = document.querySelector('.new-item-form') as HTMLFormElement;

const type = document.querySelector('#type') as HTMLSelectElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;



// const addUid = <T extends object>(object:T) => {
// 	const uid = Math.floor(Math.random() * 100);
// 	return {...object, uid};
// }

// let obj = {"name":"shashank"}
// addUid(obj);

// console.log(obj.name);


let docs:HasFormatter[] = [];
const ul = document.querySelector('ul')!;
const list = new ListTemplate(ul,)

form.addEventListener('submit',(e:Event)=> {
	e.preventDefault();//Avoid page refresh
	let doc:HasFormatter;
	let values:[string, string , number];
	values = [tofrom.value,details.value,amount.valueAsNumber]
	if(type.value == 'invoice') {
			doc = new Invoice(...values);
	} else {
			doc = new Payment(...values);
	}
	list.render(doc, type.value, 'end')
})