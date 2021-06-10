const response = fetch("/api/v1/books", {
  method: "GET",
  headers: { "Content-Type": "application/json" },
})
  .then((response) => response.json())
  .then((newResponse) => console.log(newResponse)) //newResponse.books.forEach((book) => console.log(book)))
  .catch((err) => console.log(err));
