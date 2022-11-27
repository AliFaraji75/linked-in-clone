import {combineReducers} from 'redux'
import userReducer from './userReduces'
import articlesReducer from './articlesReducer'
const rootReducers =combineReducers({
    userState:userReducer,
    articlesState:articlesReducer
})
export default rootReducers;