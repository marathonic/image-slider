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


  // let automateSlides = setInterval(automateNext, 3600);


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


  const test = document.querySelectorAll('.testing');
  
  test.forEach(radio => {
    radio.addEventListener('click', function(e) {
      console.log(radio.id)
      console.log('e target id is the same, look ' + e.target.id);

      switch (radio.id) {
        case 'pip-1':
          switchTo('pip-1');
          break;
      
        default:
          break;
      }
    })
  });


  function switchToCard(e) {
    const clickedPip = e.target.id;
    const cards = document.querySelector(".card-container").children;
    const cardSelection = cards.item(clickedPip);
    console.log(cardSelection);

    if(cardSelection == 'pip-1') console.log('You clicked the first pip');
  }

function switchTo(identifier) {
  const currentCard = document.querySelector('.card.view');  
  currentCard.classList.remove('view');
  switch (identifier) {
    case 'pip-1':
      document.querySelector('[data-picture-one]').classList.add('view')
      break;
  
    default:
      break;
  }
}