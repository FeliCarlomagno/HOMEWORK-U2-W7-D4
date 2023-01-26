const fetchReference = async function () {
  try {
    let response = await fetch("https://striveschool-api.herokuapp.com/books");
    console.log(response);
    if (response.ok) {
      let data = await response.json();
      console.log("data", data);

      const cardReference = document.querySelector(".row");
      data.forEach((book) => {
        let newCard = document.createElement("div");
        //newCard.classList.add("col-");

        newCard.innerHTML = `<div class="card m-3 w-25" >
        <img src="${book.img}" class="card-img-top" alt="image poster" />
        <div class="card-body d-flex flex-column justify-content-center align-items-center bg-light ">
          <h5 class="card-title" id="cardTitle">${book.title}</h5>
          <p class="card-text"> Categoria:
           ${book.category}
          </p>
          <p> Prezzo: ${book.price}</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>`;

        cardReference.appendChild(newCard);
      });
    }
  } catch (error) {
    console.log(error);
  }
};

fetchReference();
