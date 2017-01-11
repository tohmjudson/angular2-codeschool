import { CarPart } from './car-part';

export const CARPARTS: CarPart[]= [
    {
    "id": 1,
    "name": "Tires",
    "description": "The best tires",
    "inStock": 5,
    "price": 99.99,
    "image": "/images/tire.jpg",
    "featured": false,
    "quantity": 0
    },
    {
    "id": 2,
    "name": "Shocks",
    "description": "Stop the bouncing",
    "inStock": 4,
    "price": 149.00,
    "image": "/images/shocks.jpg",
    "featured": true,
    "quantity": 0
    },
    {
    "id": 3,
    "name": "Seats",
    "description": "For sitting",
    "inStock": 0,
    "price": 39.49,
    "image": "/images/seat.jpg",
    "featured": false,
    "quantity": 0
    }
];