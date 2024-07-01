import {createStore} from "redux"


const INITIAL_VALUE = { // initial value of store
  counter:0
}
const counterReducer = (store = INITIAL_VALUE , action)=>{  // reducer with initial value and action
  
  if(action.type === "INCREMENT"){  // logic for reducer
    return {counter : store.counter + 1}
  }else if(action.type === "DECREMENT"){
    return {counter : store.counter -1}
  }else if(action.type === "ADD"){
    return {counter : store.counter + Number(action.payload.Number)}
  }else if(action.type === "SUBSTRACT"){
    return {counter : store.counter  - Number(action.payload.Number)}
  }

  console.log("Action Received", action);
  return store
}

const counterStore = createStore(counterReducer) // redux store 

export default counterStore;