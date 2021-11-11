const hotelAPI = "json/hotel.json";
const cardsSection = document.getElementById("cards");

const getHotelAPI = function (url) {
  fetch(url)
    .then((data) => data.json())
    .then((data) => populateDOM(data))
    .catch((error) => console.log(error));
};

function populateDOM(data) {
  data.forEach((el, i) => {
    //!   el is the each element of the array, in other words, each object of this array
    //! i is the index of each element
    // console.log(el)
    let card = document.createElement("div");

    //* Car section *//
    //? Card Img and figcap //
    const img = cardImg(el);

    //? Card Info Section //
    const info = cardInfo(el);

    card.appendChild(img);
    card.appendChild(info);
    cardsSection.appendChild(card);
  });
}

function cardImg(data) {
  let cardImg = document.createElement("img");
  let cardImgFigcap = document.createElement("figcaption");
  let cardFigure = document.createElement("figure");

  cardImg.setAttribute("width", "1600")
  cardImg.setAttribute("height", "500")

  cardImg.src = data.photo;
  cardImgFigcap.textContent = data.name;

  cardFigure.appendChild(cardImg);
  cardFigure.appendChild(cardImgFigcap);
  return cardFigure;
}

function cardInfo(data) {
  //*Card Address Info
  let addressStreet = document.createElement("p");
  let addressStateZip = document.createElement("p");
  let addressIcon = document.createElement("p");

  addressIcon.className = "icon ion-md-compass";

  //*Card Contact Info
  let contactIcon = document.createElement("i");
  let contactNum = document.createElement("p");

  contactIcon.className = "icon ion-md-call";

  //*assigning data
  addressStreet.textContent = data.address[0];
  addressStateZip.textContent = data.address[1];

  contactNum.textContent = data.phone;

  //?Appending el
  let addressDiv = document.createElement("div");
  let contactDiv = document.createElement("div");
  let cardInfoSection = document.createElement("section");

  //!Appending El
  addressDiv.appendChild(addressIcon);
  addressDiv.appendChild(addressStreet);
  addressDiv.appendChild(addressStateZip);

  contactDiv.appendChild(contactIcon);
  contactDiv.appendChild(contactNum);

  cardInfoSection.appendChild(addressDiv);
  cardInfoSection.appendChild(contactDiv);
  return cardInfoSection;
}

// calling func
getHotelAPI(hotelAPI);
