const prev = document.getElementById("prev");
const next = document.getElementById("next");

prev.addEventListener('click', function(){
    const currentCard = document.querySelector('.card.view')
    // set the previousCard based on its availability
    const prevCard = currentCard.previousElementSibling
        ? currentCard.previousElementSibling
        : document.querySelector(".card-container").lastElementChild;
    currentCard.classList.remove("view");
    prevCard.classList.add("view");
  });
  next.addEventListener("click", function () {
    /* Find the current card */
    const currentCard = document.querySelector(".card.view");
    /* Set the nextCard based on its availability */
    const nextCard = currentCard.nextElementSibling
        ? currentCard.nextElementSibling
        : document.querySelector(".card-container").firstElementChild;
    currentCard.classList.remove("view");
    nextCard.classList.add("view");
  });


  let automateSlides = setInterval(automateNext, 3600);


  function automateNext() {
    /* Find the current card */
    const currentCard = document.querySelector(".card.view");
    /* Set the nextCard based on its availability */
    const nextCard = currentCard.nextElementSibling
        ? currentCard.nextElementSibling
        : document.querySelector(".card-container").firstElementChild;
    currentCard.classList.remove("view");
    nextCard.classList.add("view");
  }