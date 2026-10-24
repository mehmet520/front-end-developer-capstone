import greekSalad from '../assets/images/greek-salad.jpg'
import bruschetta from '../assets/images/bruschetta.jpg'
import lemonDessert from '../assets/images/lemon-dessert.jpg'

// This week's specials. In a real app this list would come from an API.
export const specials = [
  {
    id: 1,
    name: 'Greek salad',
    price: '$12.99',
    description:
      'The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.',
    image: greekSalad,
  },
  {
    id: 2,
    name: 'Bruschetta',
    price: '$5.99',
    description:
      'Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.',
    image: bruschetta,
  },
  {
    id: 3,
    name: 'Lemon Dessert',
    price: '$5.00',
    description:
      "This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
    image: lemonDessert,
  },
]
