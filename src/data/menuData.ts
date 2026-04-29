export type MenuItem = {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  badge: string;
  extra: string;
  category: string;
};

export const menuData: Record<string, MenuItem[]> = {
  Chicken: [
    {
      id: 1,
      name: 'Grilled Chicken',
      description: 'Juicy grilled chicken breast seasoned to perfection with our signature blend of spices. Tender, flavorful, and cooked to golden brown.',
      price: 650,
      image: 'https://images.pexels.com/photos/2673353/pexels-photo-2673353.jpeg?auto=compress&cs=tinysrgb&w=400',
      badge: 'Available',
      extra: '+12',
      category: 'Chicken',
    },
    {
      id: 2,
      name: 'Chicken Breast',
      description: 'Pan-seared chicken breast with herbs & spices. Perfectly cooked to maintain moisture and flavor throughout.',
      price: 650,
      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=400',
      badge: 'Available',
      extra: '+12',
      category: 'Chicken',
    },
    {
      id: 3,
      name: 'Chicken Stir Fried',
      description: 'Stir-fried chicken with fresh vegetables in a light sauce. Quick-cooked to preserve the crunch and flavor.',
      price: 650,
      image: 'https://images.pexels.com/photos/2097090/pexels-photo-2097090.jpeg?auto=compress&cs=tinysrgb&w=400',
      badge: 'Available',
      extra: '+10',
      category: 'Chicken',
    },
    {
      id: 4,
      name: 'Chicken Leg (3 pcs)',
      description: 'Three crispy chicken legs grilled to perfection. Perfect for those who love dark meat with rich flavors.',
      price: 650,
      image: 'https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=400',
      badge: 'Available',
      extra: '+10',
      category: 'Chicken',
    },
    {
      id: 5,
      name: 'Chicken With Rice',
      description: 'Delicious chicken with steamed rice. A complete meal with protein and carbohydrates in perfect balance.',
      price: 700,
      image: 'https://images.pexels.com/photos/723198/pexels-photo-723198.jpeg?auto=compress&cs=tinysrgb&w=400',
      badge: 'Available',
      extra: '+15',
      category: 'Chicken',
    },
    {
      id: 6,
      name: 'BBQ Chicken Wings',
      description: 'Spicy BBQ wings with special sauce. Crispy on the outside, tender inside, with a perfect balance of heat and flavor.',
      price: 600,
      image: 'https://images.pexels.com/photos/60616/fried-chicken-chicken-fried-crunchy-60616.jpeg?auto=compress&cs=tinysrgb&w=400',
      badge: 'Available',
      extra: '+09',
      category: 'Chicken',
    },
    {
      id: 7,
      name: 'Creamy Chicken',
      description: 'Creamy garlic chicken with mushrooms. Rich, indulgent, and deeply satisfying with a restaurant-quality sauce.',
      price: 750,
      image: 'https://images.pexels.com/photos/262959/pexels-photo-262959.jpeg?auto=compress&cs=tinysrgb&w=400',
      badge: 'Available',
      extra: '+08',
      category: 'Chicken',
    },
    {
      id: 8,
      name: 'Lemon Chicken',
      description: 'Zesty lemon chicken with herbs and butter. Bright, fresh flavors with a perfect citrus tang.',
      price: 680,
      image: 'https://images.pexels.com/photos/1435907/pexels-photo-1435907.jpeg?auto=compress&cs=tinysrgb&w=400',
      badge: 'Available',
      extra: '+11',
      category: 'Chicken',
    },
  ],
  Sandwich: [
    {
      id: 9,
      name: 'Club Sandwich',
      description: 'Triple-decker with chicken, bacon and fresh veggies. A classic with multiple layers of flavor and texture.',
      price: 380,
      image: 'https://images.pexels.com/photos/1603901/pexels-photo-1603901.jpeg?auto=compress&cs=tinysrgb&w=400',
      badge: 'Available',
      extra: '+06',
      category: 'Sandwich',
    },
    {
      id: 10,
      name: 'Veggie Sandwich',
      description: 'Fresh garden vegetables on artisan bread. Perfect for vegetarians seeking a filling, nutritious meal.',
      price: 320,
      image: 'https://images.pexels.com/photos/1647163/pexels-photo-1647163.jpeg?auto=compress&cs=tinysrgb&w=400',
      badge: 'Available',
      extra: '+08',
      category: 'Sandwich',
    },
  ],
  Salad: [
    {
      id: 11,
      name: 'Caesar Salad',
      description: 'Crispy romaine with parmesan and croutons. A timeless salad with a creamy, tangy dressing.',
      price: 290,
      image: 'https://images.pexels.com/photos/2097090/pexels-photo-2097090.jpeg?auto=compress&cs=tinysrgb&w=400',
      badge: 'Available',
      extra: '+05',
      category: 'Salad',
    },
  ],
  Breakfast: [
    {
      id: 12,
      name: 'Full English Breakfast',
      description: 'Eggs, bacon, sausage, toast and beans. A hearty breakfast to start your day right.',
      price: 480,
      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=400',
      badge: 'Available',
      extra: '+07',
      category: 'Breakfast',
    },
  ],
};
