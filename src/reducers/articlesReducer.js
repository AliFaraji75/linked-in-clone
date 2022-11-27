import {GET_ARTICLES,SET_LOADING} from '../actions/actions'

const initState={
    articles:[],
    loading:false
}
const articlesReducer=(state=initState,action)=>{
    switch (action.type) {
        case GET_ARTICLES:
            return {
                ...state,articles:action.payload
            }
        case SET_LOADING:
            return {
                ...state,loading:action.payload
            }
            
            break;
    
        default:
          return  state;
    }

}
export default articlesReducer;