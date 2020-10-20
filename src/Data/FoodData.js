export const foodItems = [
    {
        name: 'Cheese Pizza',
        img: '/img/cheese-pizza.jpg',
        section: 'Pizza'
    },
    {
        name: 'Olive Pizza',
        img: '/img/olive-pizza.jpg',
        section: 'Pizza'
    },
    {
        name: 'Pepperoni',
        img: '/img/pepperoni-pizza.jpeg',
        section: 'Pizza'
    },

    {
        name: 'Vegetarian Pizza',
        img: '/img/healthy-pizza.jpg',
        section: 'Pizza'
    },

    {
        name: 'Greek Lamb Pizza',
        img: '/img/swirl-pizza.jpg',
        section: 'Pizza'
    },

    {
        name: 'Crispy Fries',
        img: '/img/fries.jpeg',
        section: 'Sides'
    },

    {
        name: 'Chicken Bites',
        img: '/img/chicken-fingers.jpeg',
        section: 'Sides'
    },

    {
        name: 'Greasy King Burger',
        img: '/img/burger.jpeg',
        section: 'Burgers'
    },

    {
        name: 'Chicken Mayo Sandwich',
        img: '/img/chicken-sandwich.jpeg',
        section: 'Sandwiches'
        
    },

    {
        name: 'Cheese Toastie',
        img: '/img/cheese-sandwich.jpg',
        section: 'Sandwiches'
    },




    
    
];


export const foods = foodItems.reduce((res, food) => {

if(!res[food.section]) {
    res[food.section] = [];


}

res[food.section].push(food);

return res;

}, {} )
