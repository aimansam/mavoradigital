const burgerPhone = import.meta.env.PUBLIC_BURGER_PHONE_DIGITS || "60123456789";
const burgerPhoneDisplay = import.meta.env.PUBLIC_BURGER_PHONE_DISPLAY || "+60 12-345 6789";

export const burgerBusiness = {
  name: "Mavora Burgers",
  address: "Jalan Alor, Bukit Bintang, Kuala Lumpur",
  phoneDisplay: burgerPhoneDisplay,
  phoneHref: `tel:+${burgerPhone}`,
  whatsappHref: `https://wa.me/${burgerPhone}?text=Hi%20Mavora%20Burgers%2C%20I%20want%20to%20order%20a%20burger`,
  mapQuery: "Jalan Alor Bukit Bintang Kuala Lumpur Malaysia",
  mapEmbedSrc: "https://maps.google.com/maps?q=Jalan%20Alor%20Bukit%20Bintang%20Kuala%20Lumpur%20Malaysia&t=&z=15&ie=UTF8&iwloc=&output=embed",
  mapHref: "https://maps.google.com/?q=Jalan%20Alor%20Bukit%20Bintang%20Kuala%20Lumpur%20Malaysia",
  rating: "4.9",
  ratingLabel: "Average local rating",
  pickupTime: "Pickup in 25 min",
  openUntilLabel: "Open until 10 PM",
  hoursLine: "Open daily, 11 AM - 10 PM",
  orderChannels: "Pickup, delivery links, and WhatsApp orders",
  hoursRows: [
    { days: "Mon - Thu", hours: "11 AM - 10 PM" },
    { days: "Fri - Sat", hours: "11 AM - 11 PM" },
    { days: "Sunday", hours: "12 PM - 9 PM" },
  ],
  hoursByDay: [
    { open: 12 * 60, close: 21 * 60 },
    { open: 11 * 60, close: 22 * 60 },
    { open: 11 * 60, close: 22 * 60 },
    { open: 11 * 60, close: 22 * 60 },
    { open: 11 * 60, close: 22 * 60 },
    { open: 11 * 60, close: 23 * 60 },
    { open: 11 * 60, close: 23 * 60 },
  ],
  timeZone: "Asia/Kuala_Lumpur",
};

const burgerImageBase = "/images/portfolio/burger-shop";

export const burgerMenu = [
  {
    group: "beef",
    name: "Angus Morning Stack",
    description: "Angus beef patty, sunny egg, crisp portobello strips, cheddar, and honey mustard.",
    price: "RM26.90",
    badge: "Angus",
    tone: "premium",
    image: `${burgerImageBase}/angus-morning-stack.jpg`,
    alt: "Angus beef burger with melted cheese and crisp toppings",
    focus: "center 48%",
  },
  {
    group: "beef",
    name: "Smokehouse Brisket",
    description: "Angus beef patty, pulled brisket, crispy onion strings, pickles, and smoky BBQ glaze.",
    price: "RM29.90",
    badge: "Big bite",
    tone: "big",
    image: `${burgerImageBase}/smokehouse-brisket.jpg`,
    alt: "Tall beef burger stack with cheese and sauce",
    focus: "center 50%",
  },
  {
    group: "beef",
    name: "Peanut Berry Smash",
    description: "Angus beef patty, creamy peanut sauce, berry jam, cheddar, and toasted brioche.",
    price: "RM22.90",
    badge: "Sweet heat",
    tone: "popular",
    image: `${burgerImageBase}/peanut-berry-smash.jpg`,
    alt: "Smash burger with melted cheese and glossy sauce",
    focus: "center 58%",
  },
  {
    group: "chicken",
    name: "Salted Egg Crunch",
    description: "Crispy chicken thigh, salted egg sauce, curry leaf crumbs, slaw, and chili mayo.",
    price: "RM24.90",
    badge: "Chicken",
    tone: "chicken",
    image: `${burgerImageBase}/salted-egg-crunch.jpg`,
    alt: "Crispy chicken burger with slaw and sauce",
    focus: "center 52%",
  },
  {
    group: "chicken",
    name: "Hijau Chicken Stack",
    description: "Fried chicken thigh, green salsa, onion jam, lime slaw, and toasted brioche.",
    price: "RM18.90",
    badge: "Fresh kick",
    tone: "spicy",
    image: `${burgerImageBase}/hijau-chicken-stack.jpg`,
    alt: "Fried chicken burger with greens and sauce",
    focus: "center 52%",
  },
  {
    group: "veggie",
    name: "Portobello Tropic",
    description: "Deep-fried portobello, melted cheese, grilled pineapple, greens, and honey mustard.",
    price: "RM23.50",
    badge: "Veggie",
    tone: "veggie",
    image: `${burgerImageBase}/portobello-tropic.jpg`,
    alt: "Vegetable burger with bun, greens, and toppings",
    focus: "center 55%",
  },
  {
    group: "sides",
    name: "Mushroom Crunch Fries",
    description: "Fried portobello strips with tomato-chili dip, scallions, and a side of stack sauce.",
    price: "RM16.90",
    badge: "Side",
    tone: "side",
    image: `${burgerImageBase}/mushroom-crunch-fries.jpg`,
    alt: "Crispy fries in a basket with dipping sauce",
    focus: "center 58%",
  },
  {
    group: "sides",
    name: "Beef Cheese Loaded Fries",
    description: "Golden fries topped with beef crumble, cheddar sauce, pickles, and smoky mayo.",
    price: "RM18.90",
    badge: "Loaded",
    tone: "big",
    image: `${burgerImageBase}/beef-cheese-loaded-fries.jpg`,
    alt: "Loaded fries with cheese, meat, and sauce",
    focus: "center 50%",
  },
  {
    group: "shakes",
    name: "Thick Shake Pairing",
    description: "Creamy shake in Biscoff, Oreo, chocolate, or vanilla. Built for burger combos.",
    price: "RM14.90",
    badge: "Shake",
    tone: "shake",
    image: `${burgerImageBase}/thick-shake-pairing.jpg`,
    alt: "Thick milkshake with whipped topping",
    focus: "center 45%",
  },
];

export const burgerValueProps = [
  {
    label: "Grill",
    title: "Hot from the grill",
    detail: "Fresh beef is smashed to order for crisp edges, a juicy center, and a proper first bite.",
    image: `${burgerImageBase}/hot-from-grill.jpg`,
    alt: "Fresh smash burger patties on a hot grill",
    focus: "center 52%",
  },
  {
    label: "Sauce",
    title: "Sauce with a reason",
    detail: "Stack sauce, hot honey, smoky barbecue, and jalapeno mayo give every combo a clear favorite flavor.",
    image: `${burgerImageBase}/peanut-berry-smash.jpg`,
    alt: "Saucy burger with melted cheese and toasted bun",
    focus: "center 58%",
  },
  {
    label: "Pickup",
    title: "Packed for pickup",
    detail: "Toasted brioche keeps the stack together, so lunch reaches the car hot, clean, and ready.",
    image: `${burgerImageBase}/packed-for-pickup.jpg`,
    alt: "Toasted burger bun with beef patty and toppings",
    focus: "center 55%",
  },
];

export const burgerValueSlides = [
  {
    label: "Made hot",
    title: "Built, boxed, and ready for pickup.",
    image: `${burgerImageBase}/built-boxed-pickup.jpg`,
    alt: "Fresh burger and fries ready for pickup",
    focus: "center 62%",
  },
  ...burgerValueProps.map((item) => ({ label: item.label, title: item.title, image: item.image, alt: item.alt, focus: item.focus })),
];

export const burgerReviews = [
  {
    name: "Aiman R.",
    quote: "The Angus Morning Stack is my lunch order now. Fast pickup, hot patty, and the sauce hits.",
    rating: 4.8,
    context: "Lunch pickup",
  },
  {
    name: "Nadia S.",
    quote: "Smokehouse Brisket arrived hot and packed properly. Still juicy when I got home.",
    rating: 5,
    context: "Dinner delivery",
  },
  {
    name: "Jason L.",
    quote: "Clear menu, easy WhatsApp order, and the loaded fries are a weekend save.",
    rating: 4.9,
    context: "Weekend order",
  },
];

export type BurgerMenuItem = (typeof burgerMenu)[number];
export type BurgerValueSlide = (typeof burgerValueSlides)[number];
export type BurgerReview = (typeof burgerReviews)[number];
export type BurgerBusiness = typeof burgerBusiness;