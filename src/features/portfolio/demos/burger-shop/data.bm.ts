// Bahasa Melayu data for the burger shop demo.
// Menu item names are kept as brand names (same as EN).
// Descriptions, labels, and UI copy are fully translated.

const burgerImageBase = "/images/portfolio/burger-shop";

const burgerPhone = import.meta.env.PUBLIC_BURGER_PHONE_DIGITS || "60123456789";
const burgerPhoneDisplay = import.meta.env.PUBLIC_BURGER_PHONE_DISPLAY || "+60 12-345 6789";

export const burgerBusinessBm = {
  name: "Mavora Burgers",
  address: "Jalan Alor, Bukit Bintang, Kuala Lumpur",
  phoneDisplay: burgerPhoneDisplay,
  phoneHref: `tel:+${burgerPhone}`,
  whatsappHref: `https://wa.me/${burgerPhone}?text=Hi%20Mavora%20Burgers%2C%20saya%20nak%20order%20burger`,
  mapQuery: "Jalan Alor Bukit Bintang Kuala Lumpur Malaysia",
  mapEmbedSrc: "https://maps.google.com/maps?q=Jalan%20Alor%20Bukit%20Bintang%20Kuala%20Lumpur%20Malaysia&t=&z=15&ie=UTF8&iwloc=&output=embed",
  mapHref: "https://maps.google.com/?q=Jalan%20Alor%20Bukit%20Bintang%20Kuala%20Lumpur%20Malaysia",
  rating: "4.9",
  ratingLabel: "Penilaian tempatan",
  pickupTime: "Siap ambil dalam 25 min",
  openUntilLabel: "Buka hingga 10 MLM",
  hoursLine: "Buka setiap hari, 11 PG - 10 MLM",
  orderChannels: "Ambil sendiri, penghantaran, dan order WhatsApp",
  hoursRows: [
    { days: "Isnin - Khamis", hours: "11 PG - 10 MLM" },
    { days: "Jumaat - Sabtu", hours: "11 PG - 11 MLM" },
    { days: "Ahad", hours: "12 TH - 9 MLM" },
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

export const burgerMenuBm = [
  {
    group: "beef",
    name: "Angus Morning Stack",
    description: "Pati daging Angus, telur mata, hirisan portobello rangup, cheddar, dan honey mustard.",
    price: "RM26.90",
    badge: "Angus",
    tone: "premium",
    image: `${burgerImageBase}/angus-morning-stack.jpg`,
    alt: "Burger daging Angus dengan keju cair dan topping rangup",
    focus: "center 48%",
  },
  {
    group: "beef",
    name: "Smokehouse Brisket",
    description: "Pati daging Angus, pulled brisket, bawang goreng rangup, jeruk, dan sos BBQ berasap.",
    price: "RM29.90",
    badge: "Gigitan besar",
    tone: "big",
    image: `${burgerImageBase}/smokehouse-brisket.jpg`,
    alt: "Burger daging tinggi berlapis keju dan sos",
    focus: "center 50%",
  },
  {
    group: "beef",
    name: "Peanut Berry Smash",
    description: "Pati daging Angus, sos kacang berkrim, jem beri, cheddar, dan brioche dipanggang.",
    price: "RM22.90",
    badge: "Manis pedas",
    tone: "popular",
    image: `${burgerImageBase}/peanut-berry-smash.jpg`,
    alt: "Smash burger dengan keju cair dan sos berkilat",
    focus: "center 58%",
  },
  {
    group: "chicken",
    name: "Salted Egg Crunch",
    description: "Paha ayam rangup, sos telur masin, kerepek daun kari, coleslaw, dan mayo cili.",
    price: "RM24.90",
    badge: "Ayam",
    tone: "chicken",
    image: `${burgerImageBase}/salted-egg-crunch.jpg`,
    alt: "Burger ayam rangup dengan coleslaw dan sos",
    focus: "center 52%",
  },
  {
    group: "chicken",
    name: "Hijau Chicken Stack",
    description: "Paha ayam goreng, salsa hijau, jem bawang, coleslaw limau, dan brioche dipanggang.",
    price: "RM18.90",
    badge: "Segar pedas",
    tone: "spicy",
    image: `${burgerImageBase}/hijau-chicken-stack.jpg`,
    alt: "Burger ayam goreng dengan sayuran dan sos",
    focus: "center 52%",
  },
  {
    group: "veggie",
    name: "Portobello Tropic",
    description: "Portobello goreng, keju cair, nanas panggang, sayuran, dan honey mustard.",
    price: "RM23.50",
    badge: "Veggie",
    tone: "veggie",
    image: `${burgerImageBase}/portobello-tropic.jpg`,
    alt: "Burger sayuran dengan bun, sayuran, dan topping",
    focus: "center 55%",
  },
  {
    group: "sides",
    name: "Mushroom Crunch Fries",
    description: "Hirisan portobello goreng dengan sos tomato-cili, daun bawang, dan stack sauce.",
    price: "RM16.90",
    badge: "Side",
    tone: "side",
    image: `${burgerImageBase}/mushroom-crunch-fries.jpg`,
    alt: "Kentang goreng rangup dalam bakul dengan sos celup",
    focus: "center 58%",
  },
  {
    group: "sides",
    name: "Beef Cheese Loaded Fries",
    description: "Kentang goreng emas ditabur daging cincang, sos cheddar, jeruk, dan mayo berasap.",
    price: "RM18.90",
    badge: "Loaded",
    tone: "big",
    image: `${burgerImageBase}/beef-cheese-loaded-fries.jpg`,
    alt: "Loaded fries dengan keju, daging, dan sos",
    focus: "center 50%",
  },
  {
    group: "shakes",
    name: "Thick Shake Pairing",
    description: "Shake berkrim dalam pilihan Biscoff, Oreo, coklat, atau vanilla. Sesuai dengan combo burger.",
    price: "RM14.90",
    badge: "Shake",
    tone: "shake",
    image: `${burgerImageBase}/thick-shake-pairing.jpg`,
    alt: "Thick milkshake dengan whipped topping",
    focus: "center 45%",
  },
];

export const burgerValuePropsBm = [
  {
    label: "Grill",
    title: "Panas dari grill",
    detail: "Daging segar ditekan atas grill untuk tepi rangup, tengah berair, dan suapan pertama yang sempurna.",
    image: `${burgerImageBase}/hot-from-grill.jpg`,
    alt: "Pati smash burger segar di atas grill panas",
    focus: "center 52%",
  },
  {
    label: "Sos",
    title: "Sos ada sebabnya",
    detail: "Stack sauce, hot honey, BBQ berasap, dan mayo jalapeno bagi setiap combo rasa kegemaran tersendiri.",
    image: `${burgerImageBase}/peanut-berry-smash.jpg`,
    alt: "Burger bersos dengan keju cair dan bun dipanggang",
    focus: "center 58%",
  },
  {
    label: "Ambil",
    title: "Dibungkus untuk diambil",
    detail: "Brioche dipanggang kekalkan susunan burger supaya makan tengah hari sampai ke kereta dalam keadaan panas dan kemas.",
    image: `${burgerImageBase}/packed-for-pickup.jpg`,
    alt: "Bun burger dipanggang dengan pati daging dan topping",
    focus: "center 55%",
  },
];

export const burgerValueSlidesBm = [
  {
    label: "Dah siap",
    title: "Dibina, dibungkus, sedia untuk diambil.",
    image: `${burgerImageBase}/built-boxed-pickup.jpg`,
    alt: "Burger segar dan kentang goreng sedia untuk diambil",
    focus: "center 62%",
  },
  ...burgerValuePropsBm.map((item) => ({ label: item.label, title: item.title, image: item.image, alt: item.alt, focus: item.focus })),
];

export const burgerReviewsBm = [
  {
    name: "Aiman R.",
    quote: "Angus Morning Stack dah jadi order tengah hari saya. Cepat siap, patty panas, sos dia memang meletup.",
    rating: 4.8,
    context: "Ambil tengah hari",
  },
  {
    name: "Nadia S.",
    quote: "Smokehouse Brisket sampai dalam keadaan panas dan bungkusan rapi. Masih berair waktu sampai rumah.",
    rating: 5,
    context: "Penghantaran malam",
  },
  {
    name: "Jason L.",
    quote: "Menu jelas, order WhatsApp mudah, dan loaded fries dia memang penawar hujung minggu.",
    rating: 4.9,
    context: "Order hujung minggu",
  },
];
