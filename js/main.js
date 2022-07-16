import { testimonialsList } from "./testimonials.js";

const testimonialsElement = document.getElementById("testimonial-container");

testimonialsList.map((element, key) => {
  let card = document.createElement("div");
  let picture = document.createElement("img");
  let testimonialHolder = document.createElement("div");
  let testimonialMessage = document.createElement("p");
  let personName = document.createElement("p");
  let companyName = document.createElement("p");

  picture.src = element.image;
  testimonialMessage.innerHTML = element.message;
  personName.innerHTML = element.name;
  companyName.innerHTML = element.company;

  card.classList.add("card");
  testimonialHolder.classList.add("testimonialHolder");
  testimonialMessage.classList.add("testimonialMessage");
  personName.classList.add("personName");
  companyName.classList.add("companyName");

  testimonialHolder.append(testimonialMessage, personName, companyName);
  card.append(picture, testimonialHolder);

  testimonialsElement.append(card);
});
