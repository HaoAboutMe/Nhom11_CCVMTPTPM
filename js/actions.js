document.getElementById("todo-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const input = document.getElementById("todo-input");
  const title = input.value.trim();
  if (title === "") return;

  todos.push({
    id: Date.now(),
    title: title,
    completed: false
  });

  input.value = "";
  renderTodos();
});
