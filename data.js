const homeImages = [
  "https://res.cloudinary.com/dovrzmlqj/image/upload/v1776844074/img-home-4_wqqgw7.webp",
  "https://res.cloudinary.com/dovrzmlqj/image/upload/v1776844074/img-home-2_kfaujz.webp",
  "https://res.cloudinary.com/dovrzmlqj/image/upload/v1776844074/img-home-3_wd6oaa.webp",
  "https://res.cloudinary.com/dovrzmlqj/image/upload/v1776844074/img-home-1_cxlash.webp",
  "https://res.cloudinary.com/dovrzmlqj/image/upload/v1776844074/img-home-5_mud39s.webp",
  "https://res.cloudinary.com/dovrzmlqj/image/upload/v1776844074/img-home-6_rhleyv.webp"
];

const fashionImages = [
  "https://res.cloudinary.com/dovrzmlqj/image/upload/f_auto,q_auto:eco,w_1400/fashion/img-fashion-1.jpg",
  "https://res.cloudinary.com/dovrzmlqj/image/upload/f_auto,q_auto:eco,w_1400/fashion/img-fashion-2.jpg",
  "https://res.cloudinary.com/dovrzmlqj/image/upload/f_auto,q_auto:eco,w_1400/fashion/img-fashion-3.png",
  "https://res.cloudinary.com/dovrzmlqj/image/upload/f_auto,q_auto:eco,w_1400/fashion/img-fashion-4.jpg",
  "https://res.cloudinary.com/dovrzmlqj/image/upload/f_auto,q_auto:eco,w_1400/fashion/img-fashion-5.jpg",
  "https://res.cloudinary.com/dovrzmlqj/image/upload/f_auto,q_auto:eco,w_1400/fashion/img-fashion-6.jpg"
];

const fitnessImages = [
  "https://res.cloudinary.com/dovrzmlqj/image/upload/f_auto,q_auto:eco,w_1400/fitness/img-fitness-1.jpg",
  "https://res.cloudinary.com/dovrzmlqj/image/upload/f_auto,q_auto:eco,w_1400/fitness/img-fitness-2.jpg",
  "https://res.cloudinary.com/dovrzmlqj/image/upload/f_auto,q_auto:eco,w_1400/fitness/img-fitness-3.png",
  "https://res.cloudinary.com/dovrzmlqj/image/upload/f_auto,q_auto:eco,w_1400/fitness/img-fitness-4.jpg",
  "https://res.cloudinary.com/dovrzmlqj/image/upload/f_auto,q_auto:eco,w_1400/fitness/img-fitness-5.jpg",
  "https://res.cloudinary.com/dovrzmlqj/image/upload/f_auto,q_auto:eco,w_1400/fitness/img-fitness-6.jpg"
];

const lifestyleImages = [
  "https://res.cloudinary.com/dovrzmlqj/image/upload/f_auto,q_auto:eco,w_1400/lifestyle/img-lifestyle-1.jpg",
  "https://res.cloudinary.com/dovrzmlqj/image/upload/f_auto,q_auto:eco,w_1400/lifestyle/img-lifestyle-2.jpg",
  "https://res.cloudinary.com/dovrzmlqj/image/upload/f_auto,q_auto:eco,w_1400/lifestyle/img-lifestyle-3.png",
  "https://res.cloudinary.com/dovrzmlqj/image/upload/f_auto,q_auto:eco,w_1400/lifestyle/img-lifestyle-4.jpg",
  "https://res.cloudinary.com/dovrzmlqj/image/upload/f_auto,q_auto:eco,w_1400/lifestyle/img-lifestyle-5.jpg",
  "https://res.cloudinary.com/dovrzmlqj/image/upload/f_auto,q_auto:eco,w_1400/lifestyle/img-lifestyle-6.jpg"
];

function renderGallery(images) {
  const grid = document.getElementById("gallery");

  grid.innerHTML = images.map((src, i) => `
    <div class="img-wrap">
      <img src="${src}" class="img" alt="Model photo ${i + 1}" loading="lazy">
      <div class="overlay">VIEW</div>
    </div>
  `).join("");
}
