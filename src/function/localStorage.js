//getlist from the local storage
//add the list to the local storage
//remove the list from the local storage
//edit the list from the local storage
//clear all the list form the local storage

export function getLocalStorage() {
  return localStorage.getItem('groceryList') ? JSON.parse(localStorage.getItem("groceryList")) : [] ;
}

export function addLocalStorage(list) {
  let groceryList = getLocalStorage();
  groceryList.push(list);
  localStorage.setItem('groceryList', JSON.stringify(groceryList));
}