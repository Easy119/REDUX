// 合并 reducer 
import counterReducer from "./count_reducer"
import postListReducer from "./post_reducers"
import { combineReducers  } from "redux"

const rootReducer = combineReducers({
    counter:counterReducer,
    post:postListReducer
})
export default rootReducer