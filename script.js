document.addEventListener("DOMContentLoaded", async () => {
    const animalList = document.querySelector(".animal-list");
    const animalDetails = document.querySelector(".animal-details");
)

  
    // Fetch the JSON data from your file
    // Define the URL of the JSON data
const url = 'http://localhost:3000/characters';

// Fetch the data from the URL
fetch('http://localhost:3000/characters')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    // Now you can work with the data
    const characters = data.characters;

    // For example, you can loop through the characters and access their properties
    characters.forEach(character => {
      console.log(`Name: ${character.name}`);
      console.log(`Image URL: ${character.image}`);
      console.log(`Votes: ${character.votes}`);
    });
  })
  .catch(error => {
    console.error('There was a problem fetching the data:', error);
  
});

  