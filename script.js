const animalList = document.getElementById("animal-list");
const animalVotes = document.getElementById("animal-image");
const animalButton = document.getElementById("animal-votes");

//populate animal list

animalData.forEach(animal => {
  const listItem = document.createElement("li");
  listItem.textContent = animal.name;
  listItem.addEventListener("click", () => showAnimalDeatils(animal));
  animalList.appendChild(listItem);
      
});
