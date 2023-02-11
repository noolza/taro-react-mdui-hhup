import {connect as conn} from 'react-redux';

export const connect = (model,component)=>{
  let state = model;
  if(typeof model == 'string') {
    state = (store)=>({...store[model]})
  }
  return conn(state,null,null,{forwardRef: true})(component)
}
