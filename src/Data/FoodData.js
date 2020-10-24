
//https://www.joshmcarthur.com/til/2018/04/11/til-tolocalestring.html
export function formatPrice(price) {
    return price.toLocaleString('en-NZ', {
        style: 'currency',
        currency: 'NZD'
    })
}

export const foodItems = [
    {
        name: 'Cheese Pizza',
        img: '/img/cheese-pizza.jpg',
        section: 'Pizza',
        price: 5
    },
    {
        name: 'Olive Pizza',
        img: '/img/olive-pizza.jpg',
        section: 'Pizza',
        price: 6
    },
    {
        name: 'Pepperoni',
        img: '/img/pepperoni-pizza.jpeg',
        section: 'Pizza',
        price: 5.5
    },

    {
        name: 'Vegetarian Pizza',
        img: '/img/healthy-pizza.jpg',
        section: 'Pizza',
        price: 5
    },

    {
        name: 'Greek Lamb Pizza',
        img: '/img/swirl-pizza.jpg',
        section: 'Pizza',
        price: 6
    },

    {
        name: 'Crispy Fries',
        img: '/img/fries.jpeg',
        section: 'Sides',
        price: 5
    },

    {
        name: 'Chicken Bites',
        img: '/img/chicken-fingers.jpeg',
        section: 'Sides',
        price: 8
    },

    {
        name: 'Greasy King Burger',
        img: '/img/burger.jpeg',
        section: 'Burgers',
        price: 10.5

    },

    {
        name: 'Chicken Mayo Sandwich',
        img: '/img/chicken-sandwich.jpeg',
        section: 'Sandwiches',
        price: 7
        
    },

    {
        name: 'Cheese Toastie',
        img: '/img/cheese-sandwich.jpg',
        section: 'Sandwiches',
        price: 5
    },




    
    
];


export const foods = foodItems.reduce((res, food) => {

if(!res[food.section]) {
    res[food.section] = [];


}

res[food.section].push(food);

return res;

}, {} )

