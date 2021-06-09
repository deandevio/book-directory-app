const form = document.querySelector("form");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const author = form.author.value;
  const title = form.title.value;
  const date = form.date.value;

  const result = await fetch("/api/v1/createbook", {
    method: "POST",
    body: JSON.stringify({ author, title, date }),
    headers: { "Content-Type": "application/json" },
  });
  const data = result.json;
  console.log(data);
});
