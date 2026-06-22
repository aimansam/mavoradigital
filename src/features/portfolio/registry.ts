import BurgerDemo from "./demos/burger-shop/BurgerDemo.astro";
import CarWashDemo from "./demos/car-wash/CarWashDemo.astro";
import EjenAutomobileDemo from "./demos/ejen-automobile/EjenAutomobileDemo.astro";
import EjenHartanahDemo from "./demos/ejen-hartanah/EjenHartanahDemo.astro";
import EjenAutomobile2Demo from "./demos/ejen-automobile-2/EjenAutomobile2Demo.astro";
import EjenHartanah2Demo from "./demos/ejen-hartanah-2/EjenHartanah2Demo.astro";
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
  "ejen-automobile-2": {
    component: EjenAutomobile2Demo,
  },
  "ejen-hartanah-2": {
    component: EjenHartanah2Demo,
  },
  "salon": {
    component: SalonDemo,
  },
} as const;

export const getPortfolioDemoEntry = (slug: string) => portfolioDemoRegistry[slug as keyof typeof portfolioDemoRegistry];
