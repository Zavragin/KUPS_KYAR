
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modal-img");
const close = document.querySelector(".close");
const photos = document.querySelectorAll(".photo");

photos.forEach(photo => {
  photo.addEventListener("click", () => {
    modal.style.display = "block";
    modalImg.src = photo.src;
  });
});

close.onclick = () => {
  modal.style.display = "none";
}

window.onclick = event => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
}