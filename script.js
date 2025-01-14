const categories = ["chair", "beds", "sofa", "lamp"];
const carousel = document.querySelector(".carousel");
const grid = document.querySelector(".grid");
const filterButtons = document.querySelectorAll(".filter-btn");
const viewAllBtn = document.getElementById("viewAllBtn");
const leftArrow = document.querySelector(".arrow.left");
const rightArrow = document.querySelector(".arrow.right");
const product = products();

function generateCards(category) {
  const cards = [];

  product.map((item) => {
    if (item.category === category) {
      cards.push(`
            <div class="card">
              <img src="${item.image}" alt="">
              <div class="card-info">
                  <small>${item.category}</small>
                  <h3>${item.name}</h3>
              <img class="stars" src="./assets/icons/stars.svg" alt="">
                <div class="price">
                 <p> <span>$</span>${item.price}</p>
                 <button class="plus-btn" onclick="add()">
                      <img class="plus" src="./assets/icons/plus-btn.svg" alt="">
                 </button>
                </div>
              </div>
            </div>
       
            `);
    }
  });
  return cards.join("");
}

function updateView(category) {
  const cards = generateCards(category);
  carousel.innerHTML = cards;
  grid.innerHTML = cards;
}

filterButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    filterButtons.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    updateView(btn.dataset.category);
  });
});

viewAllBtn.addEventListener("click", () => {
  if (grid.classList.contains("active")) {
    grid.classList.remove("active");
    carousel.style.display = "flex";
    viewAllBtn.textContent = "View All";
    leftArrow.style.display = "block";
    rightArrow.style.display = "block";
  } else {
    grid.classList.add("active");
    carousel.style.display = "none";
    viewAllBtn.textContent = "Hide";
    leftArrow.style.display = "none";
    rightArrow.style.display = "none";
  }
});

leftArrow.addEventListener("click", () => {
  carousel.scrollBy({ left: -330, behavior: "smooth" });
});

rightArrow.addEventListener("click", () => {
  carousel.scrollBy({ left: 330, behavior: "smooth" });
});

updateView("chair");

const header = document.getElementById("header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 0) {
    header.classList.add("shrink");
  } else {
    header.classList.remove("shrink");
  }
});

const counter = document.getElementById("counter");
function add() {
  counter.textContent = parseInt(counter.textContent) + 1;
}


const backToTopButton = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
  if (window.scrollY > 100) {
    backToTopButton.classList.add('show');
  } else {
    backToTopButton.classList.remove('show');
  }
});

backToTopButton.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
