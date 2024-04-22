import spicy from '../../assets/img/spicy.png'
import selted from '../../assets/img/selted.png'
import beef from '../../assets/img/beef.png'
import health from '../../assets/img/healthe.png'
import spicya from '../../assets/img/spicya.png'
import pastry from '../../assets/img/pastry.png'
import pastrys from '../../assets/img/pastrys.png'
import napaleon from '../../assets/img/napaleon.jpg'
import lados from '../../assets/img/lados.jpg'
import gilos from '../../assets/img/gilos.jpg'
import yongoq from '../../assets/img/yongoq.jpg'
import gril from '../../assets/img/gril.jpg'
export const data = [
    {
        id: null,
        name: "All"

    },
    {
        id: 0,
        name: "Hot Dishes"
    },
    {
        id: 1,
        name: "Cold Dishes"
    },
    {
        id: 2,
        name: "Soup"
    },
    {
        id: 3,
        name: "Grill"
    },
    {
        id: 4,
        name: "Appetizer"
    },
    {
        id: 5,
        name: "Dessert"
    },
]

export const products = [
    {
        id: 0,
        title: "Spicy seasoned seafood noodles",
        price: '2.29',
        dish: 20,
        filter: 0,
        image: spicy
    },
    {
        id: 1,
        title: "Salted Pasta with mushroom sauce",
        price: '2.69',
        dish: 11,
        filter: 1,
        image: selted
    },
    {
        id: 2,
        title: "Beef dumpling in hot and sour soup",
        price: '2.69',
        dish: 16,
        filter: 2,
        image: beef
    },
    {
        id: 3,
        title: "Healthy noodle with spinach leaf",
        price: '3.29',
        dish: 22,
        filter: 0,
        image: health
    },
    {
        id: 4,
        title: "Hot spicy fried rice with omelet",
        price: '3.49',
        dish: 13,
        filter: 4,
        image: health
    },
    {
        id: 5,
        title: "Spicy instant noodle with special omelette",
        price: ' 3.59',
        dish: 17,
        filter: 0,
        image: spicya
    },
    {
        id: 6,
        title: "Tripadvisor",
        price: ' 3.59',
        dish: 17,
        filter: 6,
        image: pastry
    },
    {
        id: 7,
        title: "Bewertungen",
        price: ' 3.59',
        dish: 17,
        filter: 7,
        image: pastrys
    },
    {
        id: 16,
        title: "Napaleon",
        price: '35.000',
        filter: 5,
        image: napaleon,
        dish: 20
    },
    {
        id: 17,
        title: "Ladure",
        price: '55.000 ',
        filter: 5,
        image: lados,
        dish: 15
    },
    {
        id: 18,
        title: "Gilos tort",
        price: '25.000 ',
        filter: 5,
        image: gilos,
        dish: 20
    },
    {
        id: 19,
        title: "Yongoq keks",
        price: '28.000 ',
        filter: 5,
        image: yongoq,
        dish: 25
    },
    {
        id: 20,
        title: "Grill",
        price: '32.000 ',
        filter: 3,
        image: gril,
        dish: 25
    },
 



]
export const OrdersButton = [
    {
        id: 0,
        name: "Dine In"
    },
    {
        id: 1,
        name: "To Go"
    },
    {
        id: 2,
        name: "Delivery"
    }
]