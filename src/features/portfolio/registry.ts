import BurgerDemo from "./demos/burger-shop/BurgerDemo.astro";
import CarWashDemo from "./demos/car-wash/CarWashDemo.astro";
import EjenAutomobileDemo from "./demos/ejen-automobile/EjenAutomobileDemo.astro";
import EjenHartanahDemo from "./demos/ejen-hartanah/EjenHartanahDemo.astro";
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
  "ejen-automobile": {
    component: EjenAutomobileDemo,
  },
  "ejen-hartanah": {
    component: EjenHartanahDemo,
  },
  "salon": {
    component: SalonDemo,
  },
} as const;

export const getPortfolioDemoEntry = (slug: string) => portfolioDemoRegistry[slug as keyof typeof portfolioDemoRegistry];
