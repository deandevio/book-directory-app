const form = document.querySelector("form");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const author = form.author.value;
  const title = form.title.value;
  const date = form.date.value;

  await fetch("/api/v1/createbook", {
    method: "POST",
    body: JSON.stringify({ author, title, date }),
    headers: { "Content-Type": "application/json" },
  })
    .then((result) => result.json())
    .then((newResult) => console.log(newResult))
    .catch((err) => console.log(err));

  location.assign("/api" + "/v1");
});
