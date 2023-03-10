const menu = () => {
  const content = document.getElementById("content");

  let heading1 = document.createElement("h1");
  heading1.classList.add("nameOfRestaurant");
  heading1.textContent = "Dash's Diner!";
  content.appendChild(heading1);

  let img = document.createElement("img");
  img.classList.add("top-img");
  img.src = "../src/assets/diner.jpg";
  content.appendChild(img);

  let restaurantDescription = document.createElement("p");
  restaurantDescription.textContent = "Breakfast, Lunch, Dinner";
  content.appendChild(restaurantDescription);
};

export { menu };
