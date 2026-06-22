import BurgerDemo from "./demos/burger-shop/BurgerDemo.astro";
import CarWashDemo from "./demos/car-wash/CarWashDemo.astro";
import KopiJiranDemo from "./demos/kopi-jiran/KopiJiranDemo.astro";
import KopiJiran2Demo from "./demos/kopi-jiran-2/KopiJiran2Demo.astro";
import KopiJiran3Demo from "./demos/kopi-jiran-3/KopiJiran3Demo.astro";
import KopiJiran4Demo from "./demos/kopi-jiran-4/KopiJiran4Demo.astro";
import SalonDemo from "./demos/salon/SalonDemo.astro";

export const portfolioDemoRegistry = {
  "burger-shop": {
    component: BurgerDemo,
  },
  "kopi-jiran": {
    component: KopiJiranDemo,
  },
  "kopi-jiran-2": {
    component: KopiJiran2Demo,
  },
  "kopi-jiran-3": {
    component: KopiJiran3Demo,
  },
  "kopi-jiran-4": {
    component: KopiJiran4Demo,
  },
  "car-wash": {
    component: CarWashDemo,
  },
  "salon": {
    component: SalonDemo,
  },
} as const;

export const getPortfolioDemoEntry = (slug: string) => portfolioDemoRegistry[slug as keyof typeof portfolioDemoRegistry];
