import BurgerDemo from "./demos/burger-shop/BurgerDemo.astro";

export const portfolioDemoRegistry = {
  "burger-shop": {
    component: BurgerDemo,
  },
} as const;

export const getPortfolioDemoEntry = (slug: string) => portfolioDemoRegistry[slug as keyof typeof portfolioDemoRegistry];