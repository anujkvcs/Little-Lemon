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
    menu: [
      {
        id: 1,
        name: "Greek Salad",
        price: 12.99,
        description: "Refreshing salad with tomato, lettuce, feta cheese, and olives",
        image: require("../assets/food/greek-salad.webp"),
        category: "salads",
        rating: 4.6
      },
      {
        id: 2,
        name: "Bruschetta",
        price: 16.99,
        description: "Toasted bread topped with tomato, prosciutto, and cheese",
        image: require("../assets/food/bruschetta.jpeg"),
        category: "appetizers",
        rating: 4.4
      },
      {
        id: 3,
        name: "Lemon Dessert",
        price: 8.50,
        description: "Fresh baked lemon bread coated in salt and sugar",
        image: require("../assets/food/lemon-dessert.webp"),
        category: "desserts",
        rating: 4.7
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
    menu: [
      {
        id: 4,
        name: "Butter Chicken",
        price: 18.99,
        description: "Creamy tomato-based curry with tender chicken pieces",
        image: require("../assets/food/food2.jpeg"),
        category: "main-course",
        rating: 4.8
      },
      {
        id: 5,
        name: "Biryani",
        price: 16.99,
        description: "Aromatic basmati rice with spiced meat and vegetables",
        image: require("../assets/food/food3.jpeg"),
        category: "main-course",
        rating: 4.5
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
    menu: [
      {
        id: 6,
        name: "Margherita Pizza",
        price: 14.99,
        description: "Classic pizza with fresh mozzarella, tomatoes, and basil",
        image: require("../assets/food/food4.webp"),
        category: "pizza",
        rating: 4.3
      },
      {
        id: 7,
        name: "Pasta Carbonara",
        price: 13.99,
        description: "Creamy pasta with bacon, eggs, and parmesan cheese",
        image: require("../assets/food/food5.jpeg"),
        category: "pasta",
        rating: 4.4
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
  { id: 'desserts', name: 'Desserts', icon: '🍰' },
  { id: 'beverages', name: 'Beverages', icon: '🥤' }
];