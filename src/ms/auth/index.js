import {
  apiLogin,
  apiRegister
} from "./repository"



import {
  buildLogin,
  buildRegister
} from "./services"


import {
  Customer
} from "./entities"


export const makeLogin = buildLogin(Customer, apiLogin)
export const makeRegister = buildRegister(Customer, apiRegister)
