import BurgerDemo from "./demos/burger-shop/BurgerDemo.astro";
import CarWashDemo from "./demos/car-wash/CarWashDemo.astro";
import KopiJiranDemo from "./demos/kopi-jiran/KopiJiranDemo.astro";
import SalonDemo from "./demos/salon/SalonDemo.astro";

export const portfolioDemoRegistry = {
  "burger-shop": {
    component: BurgerDemo,
  },
  "kopi-jiran": {
    component: KopiJiranDemo,
  },
  "car-wash": {
    component: CarWashDemo,
  },
  "salon": {
    component: SalonDemo,
  },
} as const;

export const getPortfolioDemoEntry = (slug: string) => portfolioDemoRegistry[slug as keyof typeof portfolioDemoRegistry];
