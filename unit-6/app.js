var lazyLoadInstance = new LazyLoad({
    // Your custom settings go here
    elements_selector: '.lazy',
    threshold: 0
});

const concertGallery = [
  {
    id: 1,
    url: `img/gallery/concert01.jpg`,
  },
  {
    id: 2,
    url: `img/gallery/concert02.jpg`,
  },
  {
    id: 3,
    url: `img/gallery/concert03.jpg`,
  },
  {
    id: 4,
    url: `img/gallery/concert04.jpg`,
  },
  {
    id: 5,
    url: `img/gallery/concert05.jpg`,
  },
  {
    id: 6,
    url: `img/gallery/concert06.jpg`,
  },
  {
    id: 7,
    url: `img/gallery/concert07.jpg`,
  },
  {
    id: 8,
    url: `img/gallery/concert08.jpg`,
  },
  {
    id: 9,
    url: `img/gallery/concert09.jpg`,
  },
  {
    id: 10,
    url: `img/gallery/concert10.jpg`,
  },
  {
    id: 11,
    url: `img/gallery/concert11.jpg`,
  },
  {
    id: 12,
    url: `img/gallery/concert12.jpg`,
  },
  {
    id: 13,
    url: `img/gallery/concert13.jpg`,
  },
  {
    id: 14,
    url: `img/gallery/concert14.jpg`,
  },
  {
    id: 15,
    url: `img/gallery/concert15.jpg`,
  },
];

const galleryDiv = document.querySelector(".gallery");

function displayGallery(gallery) {
  console.log(concertGallery);
  
  gallery.forEach((el, i, arr) => {
    console.log(el);

    let figure = document.createElement("figure");
    let img = document.createElement("img");
    img.className = "lazy";
    /////////////////////////////////////
    //Setting attributes//
    img.setAttribute("width", "1600");
    img.setAttribute("height", "500");
    img.setAttribute("alt", "concert");
    img.setAttribute("loading", "lazy")
    img.setAttribute("data-src", `img/gallery/concert${el.id}.jpg`);
    /////////////////////////////////////

    img.src = el.url;
    figure.appendChild(img);
    galleryDiv.appendChild(figure);
  });
}

displayGallery(concertGallery);
