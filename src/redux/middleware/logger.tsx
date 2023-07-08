import { Middleware } from "@reduxjs/toolkit"

const logger : Middleware= (store) => (next) => (action) => {
  
    next(action)
  
}
export default logger