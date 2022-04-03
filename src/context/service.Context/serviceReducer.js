import {ADD_SERVICE, DELETE_SERVICE, GET_SERVICES} from './serviceActions'
const serviceReducer=(state, action)=>{
   switch(action.type){
      case GET_SERVICES:
         return {
            
         }
      case ADD_SERVICE:
         return {
            ...state,
            services:[...state.services, action.payload]
         }
      case DELETE_SERVICE:return{}
      default: return state;
   }
}

export default serviceReducer