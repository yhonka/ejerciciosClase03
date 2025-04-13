import "./style.css";
import { setupCounter } from "./counter.ts";
import fantasyBooks from "../json/fantasy-books.json";

// Function to create a card for each book
/* Se encarga de crear las card con su imagen, titulo y autor por cada libro */
function createBookCard(book: any) {
  /* Crea un nuevo nodo de elemento HTML del tipo <div> */
  const cardDiv = document.createElement("div");
  /* Al div creado se le agrega una clase card */
  cardDiv.classList.add("card");

  /* Crea un nuevo nodo de elemento HTML del tipo <div> */
  const cardBody = document.createElement("div");
  /* Al div creado se le agrega una clase card-body */
  cardBody.classList.add("card-body");

  /* Crea un nuevo nodo de elemento HTML del tipo <h5> */
  const title = document.createElement("h5");
  /* Al h5 creado se le agrega una clase card-title */
  title.classList.add("card-title");
  /* El contenido de texto del nodo se le asigna el titulo del libro */
  title.textContent = book.title;

  /* Crea un nuevo nodo de elemento HTML del tipo <p> */
  const author = document.createElement("p");
  /* Al p creado se le agrega una clase card-text */
  author.classList.add("card-text");
  /* El contenido de texto del nodo se le asigna el nombre del autor del libro */
  author.textContent = `Author: ${book.authors[0].name}`;

  /* Se crea el elemento img */
  const img = document.createElement("img");
  /* Al elemento img se le agrega la clase card-img */
  img.classList.add("card-img");
  /* Se le agrega a la imagen la url del la foto del libro que viene en JSON */
  img.src = book.formats["image/jpeg"];

  // Add other book properties as needed (e.g., subjects, formats, etc.)
  /* Se agrega el elemento img  */
  cardDiv.appendChild(img);
  cardBody.appendChild(title);
  cardBody.appendChild(author);
  cardDiv.appendChild(cardBody);

  return cardDiv;
}

// Get the container where cards will be added
const container = document.getElementById("bookContainer");
/* Se valida si exite el elemento con el id bookContainer */
if (container) {
  // Loop through the books and create cards dynamically
  /* Recorre el listado de libros que esta en el JSON y por cada uno de ellos llama a la funcion createBookCard para crear las card */
  fantasyBooks.results.forEach((book) => {
    const bookCard = createBookCard(book);
    container.appendChild(bookCard);
  });
  /* Se la pasa como parametro a la funcion setupCounter la variable container con el listado de libros */
  setupCounter(
    document.querySelector<HTMLButtonElement>("#counter")!,
    container
  );
}
