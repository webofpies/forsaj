const prevRoomBtn = document.querySelector(".prev-room-btn");
const nextRoomBtn = document.querySelector(".next-room-btn");
const roomsList = document.querySelector(".rooms-list");
const gamesContainer = document.querySelector(".games-container");
const contactForm = document.querySelector(".contact-form");

const games = [
  { sn: "ac-mirage", ln: "Assassin's Creed: Mirage" },
  { sn: "battlefield-5", ln: "Battlefield V" },
  { sn: "rdr-2", ln: "Read Dead Redemption II" },
  { sn: "ctr-nitro-fueled", ln: "Crash Team Racing Nitro-Fueled" },
  { sn: "blur", ln: "Blur" },
  { sn: "ghost-of-tsushima", ln: "Ghost of Tsushima" },
  { sn: "f1-23", ln: "F1 23" },
  { sn: "god-of-war-ragnarok", ln: "God of War Ragnarök" },
  { sn: "cod-bo-3", ln: "Call of Duty: Black Ops III" },
  { sn: "cod-mw-2", ln: "Call of Duty: Modern Warfare II" },
  { sn: "mk-11", ln: "Mortal Kombat 11" },
  { sn: "spider-man", ln: "Spider-Man" },
  { sn: "tekken-7", ln: "Tekken 7" },
  { sn: "pes-2021", ln: "eFootball PES 2021" },
  { sn: "nfs-heat", ln: "Need for Speed Heat" },
  { sn: "a-way-out", ln: "A Way Out" },
  { sn: "dark-souls", ln: "Dark Souls" },
  { sn: "bloodborne", ln: "Bloodborne" },
  { sn: "diablo-3", ln: "Diablo III" },
  { sn: "fifa-24", ln: "EA Sports FC 24" },
  { sn: "gran-turismo-7", ln: "Gran Turismo 7" },
  { sn: "gta-5", ln: "Grand Theft Auto V" },
  { sn: "knack-2", ln: "Knack II" },
  { sn: "minecraft", ln: "Minecraft" },
  {
    sn: "pop-the-lost-crown",
    ln: "Prince of Persia: The Lost Crown",
  },
  { sn: "ratchet-and-clank", ln: "Ratchet & Clank" },
  { sn: "resident-evil-3", ln: "Resident Evil 3" },
  { sn: "sackboy", ln: "Sackboy: A Big Adventure" },
  {
    sn: "sniper-contracts-2",
    ln: "Sniper Ghost Warrior: Contracts 2",
  },
  { sn: "street-fighter-6", ln: "Street Fighter 6" },
  { sn: "the-last-of-us-1", ln: "The Last of Us Part I" },
  { sn: "the-last-of-us-2", ln: "The Last of Us Part II" },
  { sn: "the-long-dark", ln: "The Long Dark" },
  {
    sn: "tmnt-shredders-revenge",
    ln: "Teenage Mutant Ninja Turtles: Shredder's Revenge",
  },
  { sn: "trackmania-turbo", ln: "TrackMania Turbo" },
  { sn: "uncharted-4", ln: "Uncharted 4: A Thief's End" },
  { sn: "cyberpunk", ln: "Cyberpunk 2077" },
];

// game cards
const size = Math.ceil(games.length / 3);
const gamesRows = Array.from({ length: 3 }, (_, i) => games.slice(i * size, i * size + size));

gamesRows.forEach((row) => {
  const fragment = document.createDocumentFragment();
  const list = document.createElement("ul");
  list.classList.add("games-row");
  gamesContainer.appendChild(list);

  row.forEach((game) => {
    const li = document.createElement("li");
    const img = document.createElement("img");
    li.appendChild(img);
    li.classList.add("game");

    img.src = `images/games/${game.sn}.jpg`;
    img.alt = game.ln;
    img.title = game.ln;

    fragment.appendChild(li);
  });

  list.appendChild(fragment);
});

// rooms
let pct = 0;

nextRoomBtn.addEventListener("click", () => {
  pct += 25;
  roomsList.style.transform = `translateX(-${pct}%)`;
});

prevRoomBtn.addEventListener("click", () => {
  pct -= 25;
  roomsList.style.transform = `translateX(-${pct}%)`;
});

const roomTexts = [
  `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt, nesciunt illo
                cum dolores commodi, sapiente, ex rerum odit rem quam non eveniet culpa magnam
                expedita modi quis possimus iusto repellendus.`,
  `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt, nesciunt illo
                cum dolores commodi, sapiente, ex rerum odit rem quam non eveniet culpa magnam
                expedita modi quis possimus iusto repellendus.`,
  `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt, nesciunt illo
                cum dolores commodi, sapiente, ex rerum odit rem quam non eveniet culpa magnam
                expedita modi quis possimus iusto repellendus.`,
  `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt, nesciunt illo
                cum dolores commodi, sapiente, ex rerum odit rem quam non eveniet culpa magnam
                expedita modi quis possimus iusto repellendus.`,
];

const roomsFragment = document.createDocumentFragment();
roomTexts.forEach((text, ind) => {
  const li = document.createElement("li");
  const img = document.createElement("img");
  const txt = document.createElement("p");
  li.append(img, txt);
  li.classList.add("room-li");
  img.classList.add("room");
  txt.classList.add("room-text");
  txt.textContent = text;

  img.src = `images/rooms/${ind + 1}.png`;

  roomsFragment.appendChild(li);
});

roomsList.appendChild(roomsFragment);

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
