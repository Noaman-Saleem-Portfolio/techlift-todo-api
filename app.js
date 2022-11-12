// console.log("Connected");
// Getting user data from input fields
let userId = document.getElementById("userId");
let title = document.getElementById("title");
let desc = document.getElementById("desc");
let form = document.getElementById("form");
let btn = document.getElementById("btn");

// console.log(userId);
// console.log(title);
// console.log(desc);
form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("Clicked");

  // console.log(typeof parseInt(userId.value));
  // console.log(title.value);
  // console.log(desc.value);

  fetch("https://bootcamp.todo.arhamsoft.org/client/todo/create", {
    method: "POST",
    body: JSON.stringify({
      userId: parseInt(userId.value),
      title: title.value,
      desc: desc.value,
    }),
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
