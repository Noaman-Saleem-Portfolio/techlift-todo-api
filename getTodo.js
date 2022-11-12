// ---------------------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------------------
// Get All todos
let getIdInput = document.getElementById("getIdInput");
let getIdBtn = document.getElementById("getIdBtn");
let todos = document.getElementById("todos");
let ulTodo = document.getElementById("ulTodo");

// console.log(getIdInput);
// console.log(getIdBtn);
// console.log(todos);

getIdBtn.addEventListener("click", () => {
  let userId = getIdInput.value;
  let url = `https://bootcamp.todo.arhamsoft.org/client/todo/list?userId=${userId}`;
  fetch(url, {
    method: "GET",

    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => {
      // console.log(response);
      return response.json();
    })
    .then((data) => {
      for (let i = 0; i < data.todos.length; i++) {
        let li = document.createElement("li");
        ulTodo.appendChild(li);
        li.innerHTML = data.todos[i].title;
      }

      //   console.log("Created");
      //   console.log(li);
      console.log(data.todos[0].title);
    })
    .catch((error) => {
      console.log(`Failed to fetch: ${error}`);
    });
});
