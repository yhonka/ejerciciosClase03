/* Funcion accede al DOM usando Javascript */
export function setupCounter(
  element: HTMLButtonElement,
  container: HTMLElement
) {
  let counter = 0;
  const setCounter = (count: number) => {
    counter = count;
    // element.innerHTML = `count is ${counter}`;
    element.innerHTML =
      counter % 2 === 0 ? "Ordenar Ascendente" : "Ordenar Descendente";
  };
  element.addEventListener("click", () => setCounter(counter + 1));

  /* Event  listener atento al click para llamar a la funcion sortBooks */
  element.addEventListener("click", () => sortBooks(container, counter));
  setCounter(0);
}

/* Funcion sortBooks ordena el listado de libros */
function sortBooks(container: HTMLElement, counter: number) {
  /* Calcula la direccion del filtrado si le contador es par entonces, decendiente, si es impar ascendente */
  const sortDireccion = counter % 2 === 0;

  /* Lista de book-card y se crea una copia */
  const bookCards = Array.from(container.children);

  /* Se borra el listado de libros que se tenia en la vista */
  while (container.lastElementChild) {
    container.removeChild(container.lastElementChild);
  }

  /* sort nos permite ordenar */
  const sortedBookCards = bookCards.sort((bookA, bookB) => {
    /*getElementsByClassName nos permite el titulo del libro pasandole el nombre de la clase */
    const titleA =
      bookA.getElementsByClassName("card-title")[0].textContent || "";
    const titleB =
      bookB.getElementsByClassName("card-title")[0].textContent || "";

    /* Se verifica si se quiere ordenar de forma ascendente p decendente */
    if (!sortDireccion) {
      return titleA > titleB ? 1 : -1;
    } else {
      return titleA > titleB ? -1 : 1;
    }
  });

  /* Se recrea la lista de libros */
  sortedBookCards.forEach((bookCard) => {
    container.appendChild(bookCard);
  });
}
