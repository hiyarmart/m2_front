const input = document.getElementById("input");
const createButton = document.getElementById("create_button");
const todoList = document.getElementById("todo_list");

const createTodo = () => {
  if (!input.value.trim()) return alert("напиши что нибудь");

  const div = document.createElement("div");
  const text = document.createElement("h3");
  const deleteButton = document.createElement("button");
  const editButton = document.createElement("button");

  div.setAttribute("class", "block_text");
  deleteButton.setAttribute("class", "delete_button");
  editButton.setAttribute("class", "edit_button");

  text.innerHTML = input.value;
  deleteButton.innerHTML = "Удалить";
  editButton.innerHTML = "Редактировать";


  div.append(text);
  div.append(deleteButton);
  div.append(editButton);
  todoList.append(div);

  input.value = "";

  deleteButton.onclick = () => {
    div.remove();
  };
  editButton.onclick = () => {
    const newText = prompt("Введи новый текст");
    if (newText) text.innerHTML = newText;
  }
};

createButton.onclick = () => createTodo();

// createButton.addEventListener("click", createTodo);

// input.addEventListener("keydown", (e) => {
//   if (e.key === "Enter") createTodo();
// });

input.onkeydown = (e) => {
  if (e.key === "Enter") createTodo();
};
