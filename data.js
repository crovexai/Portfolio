const homeImages = [
  "/images/home/img-home-1.jpg",
  "/images/home/img-home-2.jpg",
  "/images/home/img-home-3.png",
  "/images/home/img-home-4.jpg",
  "/images/home/img-home-5.jpg",
  "/images/home/img-home-6.jpg"
];

const fashionImages = [
  "/images/home/img-home-1.jpg",
  "/images/home/img-home-2.jpg",
  "/images/home/img-home-3.png",
  "/images/home/img-home-4.jpg",
  "/images/home/img-home-5.jpg",
  "/images/home/img-home-6.jpg"
];

const fitnessImages = [
  "/images/home/img-home-1.jpg",
  "/images/home/img-home-2.jpg",
  "/images/home/img-home-3.png",
  "/images/home/img-home-4.jpg",
  "/images/home/img-home-5.jpg",
  "/images/home/img-home-6.jpg"
];

const lifestyleImages = [
  "/images/home/img-home-1.jpg",
  "/images/home/img-home-2.jpg",
  "/images/home/img-home-3.png",
  "/images/home/img-home-4.jpg",
  "/images/home/img-home-5.jpg",
  "/images/home/img-home-6.jpg"
];

function renderGallery(images) {
  const grid = document.querySelector(".grid");
  grid.innerHTML = images.map((src, i) => `<img src="${src}" class="img" alt="Gallery image">`).join("");
}
