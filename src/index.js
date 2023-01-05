import _ from 'lodash';
import 'bootstrap/dist/css/bootstrap.css';
import { displayList } from './function/UI';
import { addLocalStorage, getLocalStorage } from './function/localStorage';

const form = document.getElementById('add-form');
const input = document.getElementById('list-input');
const clearBtn = document.querySelectorAll('clear-btn');

window.addEventListener('DOMContentLoaded' , showGroceryList);

form.addEventListener('submit', (e) => {
 e.preventDefault();
 let list = input.value;

 if(list ==="") {
  console.log('please fill your result');
 }
 else {
  const groceryList = {
   id : Date.now(),
   name: list,
  }
  displayList(groceryList);
  addLocalStorage(groceryList);
  input.value = '';
 }
});

function showGroceryList() {
 let groceryList = getLocalStorage();
 displayList(groceryList);
}

