
import {  createStore , compose, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import rootReducer from "./reducers/index"

const store = createStore(
    rootReducer,
    compose(
      // 需要使用的中间件数组 
      applyMiddleware(...[thunk]), 
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
  ) // 创建一个storage
  
export default store