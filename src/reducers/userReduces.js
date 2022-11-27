import { useReducer } from "react";
import { SET_USER } from "../actions/actions";
const INITIAL_STATE ={
    user:null
}

const userReducer =(state =INITIAL_STATE,action)=> {
    switch (action.type) {
        case SET_USER:
            console.log("actoin",action.payload)
            return{
                ...state,user:action.payload
            }
     default:
      return state;
    }

}



export default userReducer;