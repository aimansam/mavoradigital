import BurgerDemo from "./demos/burger-shop/BurgerDemo.astro";
import CoffeeDemo from "./demos/coffee-shop/CoffeeDemo.astro";

export const portfolioDemoRegistry = {
  "burger-shop": {
    component: BurgerDemo,
  },
  "coffee-shop": {
    component: CoffeeDemo,
  },
} as const;

export const getPortfolioDemoEntry = (slug: string) => portfolioDemoRegistry[slug as keyof typeof portfolioDemoRegistry];
