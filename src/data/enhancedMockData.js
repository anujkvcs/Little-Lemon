export const restaurants = [
  {
    id: 1,
    name: "Little Lemon",
    cuisine: "Mediterranean",
    rating: 4.5,
    deliveryTime: "30-45 min",
    deliveryFee: 2.99,
    image: require("../assets/food/food1.png"),
    featured: true,
    description: "Fresh Mediterranean cuisine with authentic flavors",
    address: "123 Mediterranean Ave, Food City",
    phone: "+1 234-567-8901",
    menu: [
      {
        id: 1,
        name: "Greek Salad",
        price: 12.99,
        description: "Refreshing salad with tomato, lettuce, feta cheese, and olives. Dressed with olive oil and herbs.",
        image: require("../assets/food/greek-salad.webp"),
        category: "salads",
        rating: 4.6,
        isVegetarian: true,
        calories: 250
      },
      {
        id: 2,
        name: "Bruschetta",
        price: 16.99,
        description: "Toasted bread topped with fresh tomato, prosciutto, and cheese. Seasoned with salt and olive oil.",
        image: require("../assets/food/bruschetta.jpeg"),
        category: "appetizers",
        rating: 4.4,
        isVegetarian: false,
        calories: 320
      },
      {
        id: 3,
        name: "Lemon Dessert",
        price: 8.50,
        description: "Fresh baked lemon bread coated in sugar. Powdered with citrus and lemon zest.",
        image: require("../assets/food/lemon-dessert.webp"),
        category: "desserts",
        rating: 4.7,
        isVegetarian: true,
        calories: 180
      }
    ]
  },
  {
    id: 2,
    name: "Spice Garden",
    cuisine: "Indian",
    rating: 4.3,
    deliveryTime: "25-40 min",
    deliveryFee: 1.99,
    image: require("../assets/food/food2.jpeg"),
    featured: true,
    description: "Authentic Indian spices and traditional recipes",
    address: "456 Spice Street, Curry Town",
    phone: "+1 234-567-8902",
    menu: [
      {
        id: 4,
        name: "Butter Chicken",
        price: 18.99,
        description: "Creamy tomato-based curry with tender chicken pieces and aromatic spices",
        image: require("../assets/food/food2.jpeg"),
        category: "main-course",
        rating: 4.8,
        isVegetarian: false,
        calories: 450
      },
      {
        id: 5,
        name: "Biryani",
        price: 16.99,
        description: "Aromatic basmati rice with spiced meat and vegetables, served with raita",
        image: require("../assets/food/food3.jpeg"),
        category: "main-course",
        rating: 4.5,
        isVegetarian: false,
        calories: 520
      },
      {
        id: 6,
        name: "Paneer Tikka",
        price: 14.99,
        description: "Grilled cottage cheese with bell peppers and onions in tandoor spices",
        image: require("../assets/food/food4.webp"),
        category: "appetizers",
        rating: 4.4,
        isVegetarian: true,
        calories: 280
      }
    ]
  },
  {
    id: 3,
    name: "Pizza Corner",
    cuisine: "Italian",
    rating: 4.2,
    deliveryTime: "20-35 min",
    deliveryFee: 2.49,
    image: require("../assets/food/food4.webp"),
    featured: false,
    description: "Wood-fired pizzas and authentic Italian pasta",
    address: "789 Italian Plaza, Little Italy",
    phone: "+1 234-567-8903",
    menu: [
      {
        id: 7,
        name: "Margherita Pizza",
        price: 14.99,
        description: "Classic pizza with fresh mozzarella, tomatoes, and basil on thin crust",
        image: require("../assets/food/food4.webp"),
        category: "pizza",
        rating: 4.3,
        isVegetarian: true,
        calories: 380
      },
      {
        id: 8,
        name: "Pasta Carbonara",
        price: 13.99,
        description: "Creamy pasta with bacon, eggs, and parmesan cheese, Italian style",
        image: require("../assets/food/food5.jpeg"),
        category: "pasta",
        rating: 4.4,
        isVegetarian: false,
        calories: 420
      }
    ]
  },
  {
    id: 4,
    name: "Burger House",
    cuisine: "American",
    rating: 4.1,
    deliveryTime: "15-30 min",
    deliveryFee: 1.99,
    image: require("../assets/food/food1.png"),
    featured: false,
    description: "Gourmet burgers and crispy fries",
    address: "321 Burger Lane, Fast Food City",
    phone: "+1 234-567-8904",
    menu: [
      {
        id: 9,
        name: "Classic Cheeseburger",
        price: 11.99,
        description: "Juicy beef patty with cheese, lettuce, tomato, and special sauce",
        image: require("../assets/food/food1.png"),
        category: "burgers",
        rating: 4.2,
        isVegetarian: false,
        calories: 550
      },
      {
        id: 10,
        name: "Crispy Fries",
        price: 4.99,
        description: "Golden crispy french fries seasoned with salt",
        image: require("../assets/food/food2.jpeg"),
        category: "sides",
        rating: 4.0,
        isVegetarian: true,
        calories: 320
      }
    ]
  }
];

export const categories = [
  { id: 'all', name: 'All', icon: '🍽️' },
  { id: 'pizza', name: 'Pizza', icon: '🍕' },
  { id: 'indian', name: 'Indian', icon: '🍛' },
  { id: 'mediterranean', name: 'Mediterranean', icon: '🥗' },
  { id: 'italian', name: 'Italian', icon: '🍝' },
  { id: 'american', name: 'American', icon: '🍔' },
  { id: 'desserts', name: 'Desserts', icon: '🍰' },
  { id: 'beverages', name: 'Beverages', icon: '🥤' }
];

export const cuisineTypes = [
  'Mediterranean',
  'Indian', 
  'Italian',
  'American',
  'Chinese',
  'Mexican',
  'Thai',
  'Japanese'
];