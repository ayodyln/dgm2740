const lawyersInfo = [
  {
    name: `Jason Ellis`,
    imgURL: `img/img01.jpg`,
  },
  {
    name: `Alicia Florrick`,
    imgURL: `img/img02.jpg`,
  },
  {
    name: `Allis Jacobson`,
    imgURL: `img/img03.jpg`,
  },
  {
    name: `Allen Smith`,
    imgURL: `img/img04.jpg`,
  },
];

const blogInfo = [
  {
    title: `Blog Post #1`,
    content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo libero quos recusandae natus ab ipsum, ipsa est. Repellendus amet vitae numquam voluptates beatae voluptatum, aspernatur labore illo inventore rem eaque?`,
  },
  {
    title: `Blog Post #2`,
    content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo libero quos recusandae natus ab ipsum, ipsa est. Repellendus amet vitae numquam voluptates beatae voluptatum, aspernatur labore illo inventore rem eaque?`,
  },
  {
    title: `Blog Post #3`,
    content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo libero quos recusandae natus ab ipsum, ipsa est. Repellendus amet vitae numquam voluptates beatae voluptatum, aspernatur labore illo inventore rem eaque?`,
  },
  {
    title: `Blog Post #4`,
    content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo libero quos recusandae natus ab ipsum, ipsa est. Repellendus amet vitae numquam voluptates beatae voluptatum, aspernatur labore illo inventore rem eaque?`,
  },
];

//Setting variables
const lawyerDiv = document.querySelector(".lawyers"); //laywers div
const ctaDiv = document.querySelector(".CTA");
//Initializing function

// LawyersDisplay function
(function lawyerDisplay() {
  lawyersInfo.forEach((el, i, arr) => {
    // console.log(el);
    //creating elements
    const lawyerCard = document.createElement("div");
    const lawyerName = document.createElement("p");
    const lawyerImg = document.createElement("img");
    const lawyerBtn = document.createElement("button");

    // giving element class names
    lawyerCard.className = "column small-6 medium-3 large-2 lawyer-card";
    lawyerName.className = "lawyer-name";
    lawyerImg.className = "lawyer-img";

    //

    ///Setting Attributes///
    lawyerImg.setAttribute("width", "1600");
    lawyerImg.setAttribute("height", "500");
    ///////////////////////

    lawyerName.textContent = el.name;
    lawyerImg.src = el.imgURL;

    lawyerBtn.textContent = `Read More`;

    lawyerCard.appendChild(lawyerName);
    lawyerCard.appendChild(lawyerImg);
    lawyerCard.appendChild(lawyerBtn);
    lawyerDiv.appendChild(lawyerCard);
  });
})();


//blog posts
(function blogPostsDisplay() {
  blogInfo.forEach((el, i , arr) => {
    console.log(el)
  })
})();