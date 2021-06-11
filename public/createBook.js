const form = document.querySelector("form");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  // Getting the values from the form
  const author = form.author.value;
  const title = form.title.value;
  const date = form.date.value;

  await fetch("/api/v1/createbook", {
    // Making a GET request to the createbook endpoint
    method: "POST",
    body: JSON.stringify({ author, title, date }),
    headers: { "Content-Type": "application/json" },
  })
    .then((result) => result.json()) // Parsing the object sent back from the server to JSON and using it
    .then((newResult) => console.log(newResult))
    .catch((err) => console.log(err));

  location.assign("/api" + "/v1");
});
