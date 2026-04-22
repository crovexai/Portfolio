const homeImages = [
  "https://res.cloudinary.com/dovrzmlqj/image/upload/v1776844074/img-home-4_wqqgw7.webp",
  "https://res.cloudinary.com/dovrzmlqj/image/upload/v1776844074/img-home-2_kfaujz.webp",
  "https://res.cloudinary.com/dovrzmlqj/image/upload/v1776844074/img-home-3_wd6oaa.webp",
  "https://res.cloudinary.com/dovrzmlqj/image/upload/v1776844074/img-home-1_cxlash.webp",
  "https://res.cloudinary.com/dovrzmlqj/image/upload/v1776844074/img-home-5_mud39s.webp",
  "https://res.cloudinary.com/dovrzmlqj/image/upload/v1776844074/img-home-6_rhleyv.webp"
];

const fashionImages = [];

const commercialImages = [
  // ADD YOUR COMMERCIAL IMAGES HERE LATER
];

const lifestyleImages = [];

function renderGallery(images) {
  const grid = document.getElementById("gallery");

  grid.innerHTML = images.map((src, i) => `
    <div class="img-wrap" onclick="openLightbox(${i})">
      <img src="${src}" class="img" alt="Model photo ${i + 1}" loading="lazy">
      <div class="overlay">VIEW</div>
    </div>
  `).join("");

  window.currentImages = images;
}

/* LIGHTBOX */

function openLightbox(index) {
  const lightbox = document.getElementById("lightbox");
  const img = document.getElementById("lightbox-img");

  img.src = window.currentImages[index];
  lightbox.classList.add("active");
}

function closeLightbox() {
  document.getElementById("lightbox").classList.remove("active");
}
