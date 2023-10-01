function fetchDbJson() {
  // Replace 'db.json' with the actual URL of your JSON file if it's hosted remotely.
  const url = 'db.json';

  return fetch("http://localhost:3000/characters")
    .then(response => {
      // Check if the response status is OK (200)
      if (!response.ok) {
        throw new Error(`Failed to fetch data from ${url}`);
      }
      // Parse the JSON response and return it as a JavaScript object
      return response.json();
    })
    .catch(error => {
      console.error(error);
    });
}
const animalList = document.getElementById("animal-list");
const animalImage = document.getElementById('animal-image');
const animalVotes = document.getElementById("animal-image");
const animalButton = document.getElementById("animal-votes");


//populate animal list

animalData.forEach(animal => {
  const listItem = document.createElement("li");
  listItem.textContent = animal.name;
  listItem.addEventListener("click", () => showAnimalDeatils(animal));
  animalList.appendChild(listItem);
      
});

//display animal details
function showAnimalDetails(animal) {
  animalImage.src = animal.image;
  animalVotes.textContent = `Votes: ${animal.votes}`};
  voteButton.addEventListener("click", () => voteForAnimal(animal));


  //vote animal
  function voteForAnimal(animal) {
    animal.votes++;
    animalVotes.textContent = `Votes: ${animal.votes}`;
}

// Initially show details for the first animal
showAnimalDetails(animalData[0]);


