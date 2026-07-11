const orders = [
    {dish: 'Pasta Carbonara', price: 14, spicy: false, qty: 2},
    {dish: 'Spicy Thai Noodles', price: 18, spicy: true, qty: 1},
    {dish: 'Margherita Pizza', price: 12, spicy: false, qty: 3},
    {dish: 'Chicken Tikka Masala', price: 16, spicy: true, qty: 2},
    {dish: 'Caesar Salad', price: 10, spicy: false, qty: 1},
    {dish: 'Beef Burger', price: 15, spicy: false, qty: 2}
];

const myData = orders.forEach((order, index) => {
    console.log(` #${index + 1} : ${order.qty}x ${order.dish}`);
})

// console.log(myData);  // undefined

const receiptLines = orders.map((o) => `${o.dish}: $${o.price * o.qty}`)
console.log(receiptLines);

const spicyOrders = orders.filter(o => o.spicy)
console.log(spicyOrders);  // returns array of objects

const totalRevenue = orders.reduce((sum, order) => {
    return sum + (order.qty * order.price)
}, 0)

console.log(totalRevenue);

const grouped = orders.reduce((acc, order) => {
    const category = order.spicy ? 'spicy': 'mild';

    acc[category].push(order.dish)
    return acc
}, {spicy: [], mild: []})

console.log(grouped);

const ticketNumbers = [100, 25, 3, 42, 8]
const sortedW = [...ticketNumbers].sort((a, b) => a-b)
console.log(sortedW);


// practice

const powerLevels = [10, 25, 50, 75, 100]

const upgradedLevels = powerLevels.filter(level => level >= 50).forEach(level => level * 2)
console.log(upgradedLevels);  // undefined, because foreach does not return anything

const upgradedLevelsFixed = powerLevels.filter(level => level >= 50).map(level => level * 2)
console.log(upgradedLevelsFixed);

const inventory = [
    {type: 'shirt', price: 20},
    {type: 'pants', price: 30},
    {type: 'shirt', price: 25},
    {type: 'hat', price: 15}
]

const countByType = inventory.reduce((acc, item) => {
    if(!acc[item.type]){
        acc[item.type] = 1
    }else{
        acc[item.type]++
    }

    return acc;
}, {})

console.log(countByType);

// { shirt: 2, pants: 1, hat: 1 }

const transactions = [
  { id: 1, user: "Alice", amount: 50, type: "purchase" },
  { id: 2, user: "Bob", amount: 20, type: "refund" },
  { id: 3, user: "Alice", amount: 100, type: "purchase" },
  { id: 4, user: "Alice", amount: 30, type: "refund" },
  { id: 5, user: "Bob", amount: 80, type: "purchase" }
];

const aliceNotSpend = transactions
.filter(t => t.user === 'Alice')
.reduce((total, t) => {
    if(t.type === 'purchase'){
        return total + t.amount
    }else{
        return total - t.amount
    }
}, 0)

console.log(aliceNotSpend);