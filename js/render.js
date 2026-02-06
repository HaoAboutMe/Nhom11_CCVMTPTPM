function renderTodos() {
  const list = document.getElementById("todo-list");
  list.innerHTML = "";

  todos.forEach(todo => {
    const li = document.createElement("li");
    li.textContent = todo.title;
    if (todo.completed) {
      li.style.textDecoration = "line-through";
    }
    list.appendChild(li);
  });
}

renderTodos();
