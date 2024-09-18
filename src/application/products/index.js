
import {
  getLocalProducts,
  getGlobalProduct
} from "./repository"


import {
  makeGlobalProduct,
  makeLocalProduct,
  makeByLocalisation
} from "./service"

export const buildLocalProducts = makeLocalProduct(getLocalProducts);

export const buildGlobalProducts = makeGlobalProduct(getGlobalProduct);

export const buildByLocalisation = makeByLocalisation(buildLocalProducts, buildGlobalProducts)