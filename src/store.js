import { createStore } from 'redux';
import { reducer } from './reducer';

const intialState = [
  { id: 1, name: "user1",email:'user1@gmail.com', address: "street 1", phone: "+91 98565654545" },
  { id: 2, name: "user2",email:'user2@gmail.com', address: "street 2", phone: "+91 98565654545" },
  { id: 3, name: "user3",email:'user3@gmail.com', address: "street 3", phone: "+91 98565654545" },
  { id: 4, name: "user4",email:'user4@gmail.com', address: "street 4", phone: "+91 98565654545" },
];
  
const store = createStore(reducer, intialState);

export default store;

