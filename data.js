const homeImages = [
  "https://res.cloudinary.com/dovrzmlqj/image/upload/v1776844074/img-home-4_wqqgw7.webp",
  "https://res.cloudinary.com/dovrzmlqj/image/upload/v1776844074/img-home-2_kfaujz.webp",
  "https://res.cloudinary.com/dovrzmlqj/image/upload/v1776844074/img-home-3_wd6oaa.webp",
  "https://res.cloudinary.com/dovrzmlqj/image/upload/v1776844074/img-home-1_cxlash.webp",
  "https://res.cloudinary.com/dovrzmlqj/image/upload/v1776844074/img-home-5_mud39s.webp",
  "https://res.cloudinary.com/dovrzmlqj/image/upload/v1776844074/img-home-6_rhleyv.webp"
];

const fashionImages = [
  "https://res.cloudinary.com/dovrzmlqj/image/upload/v1776844074/img-home-4_wqqgw7.webp",
  "https://res.cloudinary.com/dovrzmlqj/image/upload/v1776844074/img-home-2_kfaujz.webp",
  "https://res.cloudinary.com/dovrzmlqj/image/upload/v1776844074/img-home-3_wd6oaa.webp",
  "https://res.cloudinary.com/dovrzmlqj/image/upload/v1776844074/img-home-1_cxlash.webp",
  "https://res.cloudinary.com/dovrzmlqj/image/upload/v1776844074/img-home-5_mud39s.webp",
  "https://res.cloudinary.com/dovrzmlqj/image/upload/v1776844074/img-home-6_rhleyv.webp"
];
const commercialImages = [
  "https://res.cloudinary.com/dovrzmlqj/image/upload/v1776844074/img-home-4_wqqgw7.webp",
  "https://res.cloudinary.com/dovrzmlqj/image/upload/v1776844074/img-home-2_kfaujz.webp",
  "https://res.cloudinary.com/dovrzmlqj/image/upload/v1776844074/img-home-3_wd6oaa.webp",
  "https://res.cloudinary.com/dovrzmlqj/image/upload/v1776844074/img-home-1_cxlash.webp",
  "https://res.cloudinary.com/dovrzmlqj/image/upload/v1776844074/img-home-5_mud39s.webp",
  "https://res.cloudinary.com/dovrzmlqj/image/upload/v1776844074/img-home-6_rhleyv.webp"
];
const lifestyleImages = [
  "https://res.cloudinary.com/dovrzmlqj/image/upload/v1776844074/img-home-4_wqqgw7.webp",
  "https://res.cloudinary.com/dovrzmlqj/image/upload/v1776844074/img-home-2_kfaujz.webp",
  "https://res.cloudinary.com/dovrzmlqj/image/upload/v1776844074/img-home-3_wd6oaa.webp",
  "https://res.cloudinary.com/dovrzmlqj/image/upload/v1776844074/img-home-1_cxlash.webp",
  "https://res.cloudinary.com/dovrzmlqj/image/upload/v1776844074/img-home-5_mud39s.webp",
  "https://res.cloudinary.com/dovrzmlqj/image/upload/v1776844074/img-home-6_rhleyv.webp"
];
function renderGallery(images) {
  const grid = document.getElementById("gallery");

  grid.innerHTML = images.map((src, i) => {
    let sizeClass = "";

    // 🔥 FIRST IMAGE = BIG TOP LEFT
    if (i === 0) sizeClass = "hero";

    return `
      <div class="img-wrap ${sizeClass}" onclick="openLightbox(${i})">
        <img src="${src}" class="img" alt="Model photo ${i + 1}" loading="lazy">
        <div class="overlay">VIEW</div>
      </div>
    `;
  }).join("");

  window.currentImages = images;
}

/* LIGHTBOX */

let currentIndex = 0;

function openLightbox(index) {
  currentIndex = index;
  const lightbox = document.getElementById("lightbox");
  const img = document.getElementById("lightbox-img");

  img.src = window.currentImages[currentIndex];
  lightbox.classList.add("active");
}

function closeLightbox() {
  document.getElementById("lightbox").classList.remove("active");
}

function nextImage(e) {
  e.stopPropagation();
  currentIndex = (currentIndex + 1) % window.currentImages.length;
  document.getElementById("lightbox-img").src = window.currentImages[currentIndex];
}

function prevImage(e) {
  e.stopPropagation();
  currentIndex = (currentIndex - 1 + window.currentImages.length) % window.currentImages.length;
  document.getElementById("lightbox-img").src = window.currentImages[currentIndex];
}
