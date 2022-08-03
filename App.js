// const ArrTodo = [""];

const inputField = document.querySelector(".input-field");
const addBtn = document.querySelector(".buttonAdd");
const totalItems = document.querySelector(".total-items");
const task = document.querySelector(".tasks");

let num = 0;
let increment = () => {
  return num++;
};

let decrement = () => {
  return num--;
};



addBtn.addEventListener("click", () => {
  if (inputField.value.length !== 0) {
    let newItem = document.createElement("div");

    increment();
    newItem.innerHTML = `
      <p>${num}. ${inputField.value}
      <input type="checkbox" class="chech-box">
      <i  class="fa-solid fa-trash-can"></i>
      </p>
      `;

    task.appendChild(newItem);
    inputField.value = "";
  } else {
    alert("Please enter new task!!!");
  }
  totalItems.innerHTML = `Total Items : ${num}`;

});


task.addEventListener('click', (e)=>{
  if(e.target.classList.contains('fa-trash-can')){
    e.target.parentElement.parentElement.remove()
    // if can you explain ???
    decrement()
  }
  totalItems.innerHTML = `Total Items : ${num}`;

})

