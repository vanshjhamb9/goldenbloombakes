export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  image: string;
  shortDescription: string;
  longDescription: string;
  ingredients: string[];
  tasteNotes: string[];
  allergens: string[];
  featured?: boolean;
}

export const products: Product[] = [
  // Cakes
  {
    id: "chocolate-fudge-cake",
    name: "Chocolate Fudge Cake",
    category: "Cakes",
    price: 850,
    image: "/src/assets/cake-sketch.jpg",
    shortDescription: "A slow-baked, handcrafted delight made with real Belgian chocolate and love.",
    longDescription: "Our signature Chocolate Fudge Cake is a testament to artisan baking. Each layer is carefully crafted with premium Belgian chocolate, slow-baked to perfection, and finished with a velvety ganache. The result is a rich, moist cake that melts in your mouth, leaving behind notes of deep cocoa and subtle sweetness.",
    ingredients: ["Belgian Dark Chocolate", "Free-range Eggs", "Fresh Butter", "Pure Vanilla", "Organic Flour", "Brown Sugar"],
    tasteNotes: ["Rich", "Moist", "Chocolaty", "Velvety"],
    allergens: ["Eggs", "Dairy", "Gluten"],
    featured: true,
  },
  {
    id: "vanilla-bean-cake",
    name: "Vanilla Bean Cake",
    category: "Cakes",
    price: 800,
    image: "/src/assets/cake-sketch.jpg",
    shortDescription: "Classic elegance with Madagascar vanilla beans and buttercream.",
    longDescription: "A timeless classic elevated to perfection. Made with real Madagascar vanilla beans, this cake celebrates the pure essence of vanilla. Light, fluffy layers are complemented by our signature Swiss buttercream, creating a harmonious balance of sweetness and sophistication.",
    ingredients: ["Madagascar Vanilla Beans", "Fresh Butter", "Free-range Eggs", "Organic Flour", "Pure Cream"],
    tasteNotes: ["Soft", "Creamy", "Sweet", "Aromatic"],
    allergens: ["Eggs", "Dairy", "Gluten"],
  },
  {
    id: "red-velvet-cake",
    name: "Red Velvet Cake",
    category: "Cakes",
    price: 900,
    image: "/src/assets/cake-sketch.jpg",
    shortDescription: "Luxurious red velvet with cream cheese frosting.",
    longDescription: "An indulgent masterpiece featuring our signature red velvet layers paired with tangy cream cheese frosting. The subtle cocoa notes blend beautifully with the smooth, rich frosting, creating a cake that's both visually stunning and absolutely delicious.",
    ingredients: ["Premium Cocoa", "Buttermilk", "Cream Cheese", "Free-range Eggs", "Natural Food Color"],
    tasteNotes: ["Rich", "Tangy", "Smooth", "Velvety"],
    allergens: ["Eggs", "Dairy", "Gluten"],
    featured: true,
  },

  // Pastries
  {
    id: "almond-croissant",
    name: "Almond Croissant",
    category: "Pastries",
    price: 150,
    image: "/src/assets/pastries-sketch.jpg",
    shortDescription: "Flaky, buttery layers filled with almond cream and toasted almonds.",
    longDescription: "Our Almond Croissant is a labor of love, requiring 72 hours of careful preparation. Each layer is laminated to perfection, filled with house-made almond cream, and topped with sliced almonds. The result is a pastry that's crispy on the outside, soft and creamy on the inside.",
    ingredients: ["French Butter", "Almond Cream", "Organic Flour", "Sliced Almonds", "Pure Vanilla"],
    tasteNotes: ["Flaky", "Buttery", "Nutty", "Crispy"],
    allergens: ["Nuts", "Dairy", "Gluten"],
    featured: true,
  },
  {
    id: "danish-pastry",
    name: "Danish Pastry",
    category: "Pastries",
    price: 140,
    image: "/src/assets/pastries-sketch.jpg",
    shortDescription: "Light, flaky pastry with seasonal fruit filling.",
    longDescription: "A European classic made with our special laminated dough and filled with seasonal fruits. Each pastry is hand-shaped and baked until golden, creating a perfect balance of buttery richness and fruity freshness.",
    ingredients: ["Danish Butter", "Seasonal Fruits", "Organic Flour", "Cream Cheese", "Honey Glaze"],
    tasteNotes: ["Flaky", "Fruity", "Buttery", "Light"],
    allergens: ["Dairy", "Gluten"],
  },

  // Breads & Loaves
  {
    id: "sourdough-loaf",
    name: "Artisan Sourdough",
    category: "Breads",
    price: 120,
    image: "/src/assets/breads-sketch.jpg",
    shortDescription: "Traditional sourdough with a crispy crust and tangy flavor.",
    longDescription: "Our sourdough is made with a 100-year-old starter, slow-fermented for 24 hours. This traditional method develops complex flavors and creates that perfect crispy crust with a soft, airy interior. Each loaf is a piece of baking heritage.",
    ingredients: ["Sourdough Starter", "Organic Flour", "Sea Salt", "Filtered Water"],
    tasteNotes: ["Tangy", "Crusty", "Chewy", "Aromatic"],
    allergens: ["Gluten"],
    featured: true,
  },
  {
    id: "whole-wheat-bread",
    name: "Whole Wheat Bread",
    category: "Breads",
    price: 100,
    image: "/src/assets/breads-sketch.jpg",
    shortDescription: "Healthy, hearty bread made with stone-ground wheat.",
    longDescription: "Baked fresh daily with stone-ground whole wheat flour, this bread is both nutritious and delicious. The addition of honey and olive oil creates a tender crumb while maintaining the wholesome goodness of whole grains.",
    ingredients: ["Stone-ground Wheat", "Honey", "Olive Oil", "Sea Salt", "Yeast"],
    tasteNotes: ["Hearty", "Nutty", "Wholesome", "Soft"],
    allergens: ["Gluten"],
  },

  // Cookies
  {
    id: "chocolate-chip-cookies",
    name: "Chocolate Chip Cookies",
    category: "Cookies",
    price: 250,
    image: "/src/assets/cookies-sketch.jpg",
    shortDescription: "Classic cookies with Belgian chocolate chunks.",
    longDescription: "Our signature chocolate chip cookies are made with brown butter for extra depth of flavor and loaded with Belgian chocolate chunks. Crispy edges, chewy centers, and that perfect cookie aroma – everything you love about homemade cookies, elevated.",
    ingredients: ["Belgian Chocolate", "Brown Butter", "Brown Sugar", "Free-range Eggs", "Vanilla Extract"],
    tasteNotes: ["Chewy", "Chocolaty", "Buttery", "Crispy"],
    allergens: ["Eggs", "Dairy", "Gluten"],
    featured: true,
  },
  {
    id: "oatmeal-raisin-cookies",
    name: "Oatmeal Raisin Cookies",
    category: "Cookies",
    price: 230,
    image: "/src/assets/cookies-sketch.jpg",
    shortDescription: "Wholesome cookies with rolled oats and plump raisins.",
    longDescription: "A healthier indulgence made with rolled oats, plump raisins, and a hint of cinnamon. These cookies are perfectly balanced – not too sweet, with a satisfying chew that makes them impossible to resist.",
    ingredients: ["Rolled Oats", "Raisins", "Cinnamon", "Honey", "Whole Wheat Flour"],
    tasteNotes: ["Chewy", "Wholesome", "Sweet", "Spiced"],
    allergens: ["Eggs", "Dairy", "Gluten"],
  },

  // Brownies
  {
    id: "fudgy-brownies",
    name: "Fudgy Brownies",
    category: "Brownies",
    price: 180,
    image: "/src/assets/brownies-sketch.jpg",
    shortDescription: "Ultra-rich, fudgy brownies with a crackly top.",
    longDescription: "The ultimate chocolate lover's dream. Our brownies are intensely chocolaty with a fudgy, almost truffle-like center and that signature crackly top. Made with premium cocoa and real chocolate, each bite is pure indulgence.",
    ingredients: ["Dark Chocolate", "Premium Cocoa", "Brown Sugar", "Free-range Eggs", "French Butter"],
    tasteNotes: ["Fudgy", "Rich", "Chocolaty", "Intense"],
    allergens: ["Eggs", "Dairy", "Gluten"],
    featured: true,
  },
  {
    id: "walnut-brownies",
    name: "Walnut Brownies",
    category: "Brownies",
    price: 200,
    image: "/src/assets/brownies-sketch.jpg",
    shortDescription: "Fudgy brownies studded with crunchy walnuts.",
    longDescription: "Our classic fudgy brownies elevated with premium California walnuts. The contrast of textures – smooth, dense chocolate with crunchy nuts – creates a brownie experience that's truly memorable.",
    ingredients: ["Dark Chocolate", "California Walnuts", "Premium Cocoa", "Brown Sugar", "Butter"],
    tasteNotes: ["Fudgy", "Crunchy", "Nutty", "Rich"],
    allergens: ["Nuts", "Eggs", "Dairy", "Gluten"],
  },

  // Dessert Jars
  {
    id: "tiramisu-jar",
    name: "Tiramisu Jar",
    category: "Dessert Jars",
    price: 220,
    image: "/src/assets/dessert-jars-sketch.jpg",
    shortDescription: "Layers of coffee-soaked ladyfingers and mascarpone cream.",
    longDescription: "An Italian classic reimagined in a jar. Delicate ladyfingers soaked in espresso, layered with rich mascarpone cream and dusted with premium cocoa. Each jar is a perfect portion of this beloved dessert.",
    ingredients: ["Mascarpone", "Espresso", "Ladyfingers", "Cocoa Powder", "Fresh Cream"],
    tasteNotes: ["Creamy", "Coffee-flavored", "Smooth", "Rich"],
    allergens: ["Eggs", "Dairy", "Gluten"],
    featured: true,
  },
  {
    id: "chocolate-mousse-jar",
    name: "Chocolate Mousse Jar",
    category: "Dessert Jars",
    price: 200,
    image: "/src/assets/dessert-jars-sketch.jpg",
    shortDescription: "Silky chocolate mousse with whipped cream topping.",
    longDescription: "Pure chocolate bliss in every spoonful. Our mousse is made with premium dark chocolate, whipped to an airy, cloud-like consistency, and topped with fresh whipped cream. Light yet intensely flavored.",
    ingredients: ["Dark Chocolate", "Fresh Cream", "Free-range Eggs", "Pure Vanilla", "Sugar"],
    tasteNotes: ["Silky", "Airy", "Chocolaty", "Smooth"],
    allergens: ["Eggs", "Dairy"],
  },
];

export const categories = [
  { name: "Cakes", slug: "cakes", description: "Handcrafted celebration cakes, made fresh daily with premium ingredients" },
  { name: "Pastries", slug: "pastries", description: "Flaky, buttery European pastries perfected through artisan techniques" },
  { name: "Breads & Loaves", slug: "breads", description: "Traditional breads baked with time-honored methods and quality grains" },
  { name: "Cookies", slug: "cookies", description: "Classic cookies with a gourmet twist, baked to perfection" },
  { name: "Brownies", slug: "brownies", description: "Intensely chocolaty brownies with that perfect fudgy texture" },
  { name: "Dessert Jars", slug: "dessert-jars", description: "Elegant layered desserts in convenient, portable jars" },
];
