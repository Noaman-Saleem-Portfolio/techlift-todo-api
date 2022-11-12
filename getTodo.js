// ---------------------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------------------
// Get All todos
let getIdInput = document.getElementById("getIdInput");
let getIdBtn = document.getElementById("getIdBtn");

// console.log(getIdInput);
// console.log(getIdBtn);

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
    .then((data) => console.log(data))
    .catch((error) => {
      console.log(`Failed to fetch: ${error}`);
    });
});
