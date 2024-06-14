const prevRoomBtn = document.querySelector(".prev-room-btn");
const nextRoomBtn = document.querySelector(".next-room-btn");
const roomsCont = document.getElementById("rooms-container");
let pct = 0;

nextRoomBtn.addEventListener("click", () => {
  pct += 25;
  roomsCont.style.transform = `translateX(-${pct}%)`;
});

prevRoomBtn.addEventListener("click", () => {
  pct -= 25;
  roomsCont.style.transform = `translateX(-${pct}%)`;
});
