import { Invoice } from './classes/Invoice.js';
import { Payment } from './classes/Payment.js';
import { ListTemplate } from './classes/ListTemplate.js';
import { HasFormatter } from './interfaces/HasFormatter.js';

// Form
 const form  = document.querySelector('.new-item-form') as HTMLFormElement;

// inputs
const type = document.querySelector('#type') as HTMLSelectElement;
const toFrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

// List template instance
const ul = document.querySelector('ul')!; // Add exclamation to take null error away. <ul> is on the index.html so it wont be null 

const list = new ListTemplate(ul);

form.addEventListener('submit', (e: Event) =>{
    e.preventDefault();

    let values: [string, string, number];
    values = [toFrom.value, details.value, amount.valueAsNumber];

    let doc: HasFormatter;

    if (type.value === 'invoice'){
        //doc = new Invoice(toFrom.value, details.value, amount.valueAsNumber);
        doc = new Invoice(...values);
    }
    else {
        //doc = new Payment(toFrom.value, details.value, amount.valueAsNumber);
        doc = new Invoice(...values);
    }

    // Render to the page
    list.render(doc, type.value, 'end');


});