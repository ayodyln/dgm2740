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
    imgURL: `img/blog01.jpg`,
    content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo libero quos recusandae natus ab ipsum, ipsa est. Repellendus amet vitae numquam voluptates beatae voluptatum, aspernatur labore illo inventore rem eaque?`,
  },
  {
    title: `Blog Post #2`,
    imgURL: `img/blog02.jpg`,
    content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo libero quos recusandae natus ab ipsum, ipsa est. Repellendus amet vitae numquam voluptates beatae voluptatum, aspernatur labore illo inventore rem eaque?`,
  },
  {
    title: `Blog Post #3`,
    imgURL: `img/blog03.jpg`,
    content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo libero quos recusandae natus ab ipsum, ipsa est. Repellendus amet vitae numquam voluptates beatae voluptatum, aspernatur labore illo inventore rem eaque?`,
  },
  {
    title: `Blog Post #4`,
    imgURL: `img/blog04.jpg`,
    content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo libero quos recusandae natus ab ipsum, ipsa est. Repellendus amet vitae numquam voluptates beatae voluptatum, aspernatur labore illo inventore rem eaque?`,
  },
];



//Setting variables
const lawyerDiv = document.querySelector(".lawyers"); //laywers div
const ctaDiv = document.querySelector(".CTA");
const blogPost = document.querySelector(".blog-post");
const tipOfTheDay = document.querySelector('.tipofday-div');
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

    lawyerBtn.textContent = `Learn More`;

    lawyerCard.appendChild(lawyerName);
    lawyerCard.appendChild(lawyerImg);
    lawyerCard.appendChild(lawyerBtn);
    lawyerDiv.appendChild(lawyerCard);
  });
})();

//blog posts
(function blogPostsDisplay() {
  blogInfo.forEach((el, i, arr) => {

    const blogPostCard = document.createElement("div");
    const blogImg = document.createElement("img");
    const blogTitle = document.createElement("h2");
    const blogContent = document.createElement("p");
    const readMoreBtn = document.createElement("button");

    //giving class names
    blogPostCard.className = "column small-12 medium-6 large-3 blog-cards";
    blogImg.className = "blog-img";
    blogTitle.className = "blog-title";
    blogContent.className = "blog-content";
    readMoreBtn.className = "read-more-btn";
    ///Setting Attributes///
    blogImg.setAttribute("width", "1600");
    blogImg.setAttribute("height", "500");
    ///////////////////////

    blogImg.src = el.imgURL;
    blogTitle.textContent = el.title;
    blogContent.textContent = el.content;
    readMoreBtn.textContent = `Read More`;

    blogPostCard.appendChild(blogImg);
    blogPostCard.appendChild(blogTitle);
    blogPostCard.appendChild(blogContent);
    blogPostCard.appendChild(readMoreBtn);
    blogPost.appendChild(blogPostCard);
  });
})();


