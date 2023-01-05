const listContainer = document.querySelector('.lists-container');
export function displayList(list) {
  const div = document.createElement('div');
  div.innerHTML = `
  <ul> 
    <li>
      <p>${list}</p>
      <button type="button" class="delete-btn delete"><i class="uil uil-trash-alt"></i></button>
      <button aria-checked="edit-btn"><i class="uil uil-edit"></i></button></li>
   </ul>
  `;
  
  
  listContainer.appendChild(div);
  const deleteBtn = document.querySelector('.delete-btn');
  deleteBtn.addEventListener('click', (e) => {
   console.log(e.currentTarget, 'it is clicked');
  })
}
