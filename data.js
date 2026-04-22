const homeImages = [
  "https://res.cloudinary.com/dovrzmlqj/image/upload/f_auto,q_auto,w_1600/home/img-home-1.jpg",
  "https://res.cloudinary.com/dovrzmlqj/image/upload/f_auto,q_auto,w_1600/home/img-home-2.jpg",
  "https://res.cloudinary.com/dovrzmlqj/image/upload/f_auto,q_auto,w_1600/home/img-home-3.png",
  "https://res.cloudinary.com/dovrzmlqj/image/upload/f_auto,q_auto,w_1600/home/img-home-4.jpg",
  "https://res.cloudinary.com/dovrzmlqj/image/upload/f_auto,q_auto,w_1600/home/img-home-5.jpg",
  "https://res.cloudinary.com/dovrzmlqj/image/upload/f_auto,q_auto,w_1600/home/img-home-6.jpg"
];

const fashionImages = [
  "https://res.cloudinary.com/dovrzmlqj/image/upload/f_auto,q_auto,w_1600/fashion/img-fashion-1.jpg",
  "https://res.cloudinary.com/dovrzmlqj/image/upload/f_auto,q_auto,w_1600/fashion/img-fashion-2.jpg",
  "https://res.cloudinary.com/dovrzmlqj/image/upload/f_auto,q_auto,w_1600/fashion/img-fashion-3.png",
  "https://res.cloudinary.com/dovrzmlqj/image/upload/f_auto,q_auto,w_1600/fashion/img-fashion-4.jpg",
  "https://res.cloudinary.com/dovrzmlqj/image/upload/f_auto,q_auto,w_1600/fashion/img-fashion-5.jpg",
  "https://res.cloudinary.com/dovrzmlqj/image/upload/f_auto,q_auto,w_1600/fashion/img-fashion-6.jpg"
];

const fitnessImages = [
  "https://res.cloudinary.com/dovrzmlqj/image/upload/f_auto,q_auto,w_1600/fitness/img-fitness-1.jpg",
  "https://res.cloudinary.com/dovrzmlqj/image/upload/f_auto,q_auto,w_1600/fitness/img-fitness-2.jpg",
  "https://res.cloudinary.com/dovrzmlqj/image/upload/f_auto,q_auto,w_1600/fitness/img-fitness-3.png",
  "https://res.cloudinary.com/dovrzmlqj/image/upload/f_auto,q_auto,w_1600/fitness/img-fitness-4.jpg",
  "https://res.cloudinary.com/dovrzmlqj/image/upload/f_auto,q_auto,w_1600/fitness/img-fitness-5.jpg",
  "https://res.cloudinary.com/dovrzmlqj/image/upload/f_auto,q_auto,w_1600/fitness/img-fitness-6.jpg"
];

const lifestyleImages = [
  "https://res.cloudinary.com/dovrzmlqj/image/upload/f_auto,q_auto,w_1600/lifestyle/img-lifestyle-1.jpg",
  "https://res.cloudinary.com/dovrzmlqj/image/upload/f_auto,q_auto,w_1600/lifestyle/img-lifestyle-2.jpg",
  "https://res.cloudinary.com/dovrzmlqj/image/upload/f_auto,q_auto,w_1600/lifestyle/img-lifestyle-3.png",
  "https://res.cloudinary.com/dovrzmlqj/image/upload/f_auto,q_auto,w_1600/lifestyle/img-lifestyle-4.jpg",
  "https://res.cloudinary.com/dovrzmlqj/image/upload/f_auto,q_auto,w_1600/lifestyle/img-lifestyle-5.jpg",
  "https://res.cloudinary.com/dovrzmlqj/image/upload/f_auto,q_auto,w_1600/lifestyle/img-lifestyle-6.jpg"
];

function renderGallery(images) {
  const grid = document.querySelector(".grid");
  grid.innerHTML = images.map((src, i) => `<img src="${src}" class="img" alt="Gallery image">`).join("");
}
