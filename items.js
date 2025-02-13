'use strict';

// Define a JavaScript object with arrays of inventory items, description, and prices in yen: 
const items = [
    { item: 'Air Ballon', description: 'It gives the Pokemon with this item to float.', price: 2000 },
    { item: 'Apicot Berry', description: 'It raises Special Defense when HP is low.', price: 3000 },
    { item: 'Berry Juice', description: 'It restores 20 HP on the chosen Pokemon.', price: 4000 }
];

const _items = items;
export { _items as items };

console.table(items); 
