const gamesContainer = document.querySelector(".games-container");
const contactForm = document.querySelector(".contact-form");
const heroSection = document.querySelector(".section-hero");

// game cards
const size = Math.ceil(games.length / 3);
const gamesRows = Array.from({ length: 3 }, (_, i) => games.slice(i * size, i * size + size));

gamesRows.forEach((row) => {
  const fragment = document.createDocumentFragment();
  const gamesRow = document.createElement("ul");
  gamesRow.classList.add("games-row");
  gamesContainer.appendChild(gamesRow);

  row.forEach((game) => {
    const li = document.createElement("li");
    const fig = document.createElement("figure");
    const img = document.createElement("img");
    fig.append(img);
    li.appendChild(fig);
    li.classList.add("game");
    fig.classList.add("game-fig");

    img.src = `images/games/${game.sn}.jpg`;
    img.alt = game.ln;
    img.title = game.ln;

    fragment.appendChild(li);
  });

  gamesRow.appendChild(fragment);

  const duplicateRow = gamesRow.cloneNode(true);
  gamesContainer.append(gamesRow, duplicateRow);
});

// add room images
const prevRoomBtn = document.querySelector(".prev-room-btn");
const nextRoomBtn = document.querySelector(".next-room-btn");
const roomsList = document.querySelector(".rooms-list");
const roomsFrame = document.querySelector(".rooms-carousel-frame");

const roomsFragment = document.createDocumentFragment();
rooms.forEach((room) => {
  const li = document.createElement("li");
  const img = document.createElement("img");
  const fig = document.createElement("figure");

  li.append(fig);
  fig.classList.add("room-fig");
  li.classList.add("room-li");
  img.classList.add("room-img");

  if (room.caption) {
    const caption = document.createElement("figcaption");
    fig.append(img, caption);
    caption.classList.add("room-text");
    caption.textContent = room.caption;
  }

  img.src = `images/rooms/${room.name}.png`;

  roomsFragment.appendChild(li);
});

roomsList.appendChild(roomsFragment);

// rooms slider
let direction;

nextRoomBtn.addEventListener("click", () => {
  direction = -1;
  roomsList.style.transform = `translateX(-25%)`;
});

prevRoomBtn.addEventListener("click", () => {
  direction = 1;
  roomsList.style.transform = `translateX(25%)`;
});

roomsList.addEventListener("transitionend", () => {
  if (direction === -1) {
    roomsList.appendChild(roomsList.firstElementChild);
  }
  if (direction === 1) {
    roomsList.prepend(roomsList.lastElementChild);
  }

  roomsList.style.transition = "none";
  roomsList.style.transform = `translateX(0)`;
  setTimeout(() => {
    roomsList.style.transition = "transform .2s ease-out";
  });
});

// send to whatsapp
function sendMessage(e) {
  e.preventDefault();
  const message = document.getElementById("message").value;
  const url = `https://wa.me/+994709105090?text=${message}`;
  window.open(url, "_blank").focus();
}

contactForm.addEventListener("submit", (e) => {
  sendMessage(e);
});

//fixed header
const obs = new IntersectionObserver(
  function (entries) {
    const entry = entries[0];
    if (entry.isIntersecting) {
      document.querySelector("header").classList.remove("fixed");
    } else {
      document.querySelector("header").classList.add("fixed");
    }
  },
  { root: null, threshold: 0, rootMargin: "-96px" }
);

obs.observe(heroSection);
