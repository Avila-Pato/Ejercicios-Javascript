import assert from 'node:assert/strict';

const directory = [ 
    {"name": "Maggie", "age": 14, "id": 0, "phone": "+123456"}, 
    {"name": "John", "age": 25, "id": 1, "phone": "+987654"}, 
    {"name": "Alice", "age": 30, "id": 2, "phone": "+135792"}, 
    {"name": "Bob", "age": 18, "id": 3, "phone": "+864209"}, 
    {"name": "Sarah", "age": 40, "id": 4, "phone": "+741852"}, 
    {"name": "David", "age": 22, "id": 5, "phone": "+369258"},
    {"name": "Emily", "age": 19, "id": 6, "phone": "+802467"}, 
    {"name": "Michael", "age": 35, "id": 7, "phone": "+514237"}
];

const registrations = [
    {"name": "Maggie", "age": 14, "id": 0, "email": "maggie@gmail.com", "confirmed": true}, 
    {"name": "Bob", "age": 18, "id": 1, "email": "Bob@gmail.com", "confirmed": false}, 
    {"name": "Sarah", "age": 40, "id": 2, "email": "Sarah@gmail.com", "confirmed": false}, 
    {"name": "David", "age": 22, "id": 3, "email": "David@gmail.com", "confirmed": true}, 
];

const a = [
    {id : 0, name : 'Jhon'},
    {id : 1, name : 'Justin'}
];

const b = [
    {id : 0, email : 'p.avilaf@gmail.com'},
    {id : 2, email : 'alpha@gmail.com' }
];

const expectedOutput = [
    {id : 0, name : 'Jhon', email : 'p.avilaf@gmail.com'},
];

function innerJoin({leftArray, rightArray, key}) {
    const map = new Map();
    leftArray.forEach(item => map.set(item[key], item));

    const join = [];
    rightArray.forEach(rightItem => {
        const leftItem = map.get(rightItem[key]);
        if (leftItem !== undefined) {
            join.push({
                ...leftItem,
                ...rightItem
            });
        }
    });
    return join;
}
console.log({ leftArray: directory, rightArray: 'registrations', key: 'name'})
// Testing the innerJoin function
const result = innerJoin({leftArray: a, rightArray: b, key: 'id'});
assert.deepStrictEqual(result, expectedOutput);
