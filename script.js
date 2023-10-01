const animalList = document.getElementById("animal-list");
const animalImage = document.getElementById('animal-image');
const animalVotes = document.getElementById("animal-votes");
const voteButton = document.getElementById("vote-button");
const apiUrl = 'http://localhost:3000/characters';

let currentAnimal = null; // To store the currently displayed animal

// Fetch animal data from the local API
async function fetchAnimalData() {
    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error(`Failed to fetch data: ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
        return [];
    }
}

// Populate the list of animals
async function populateAnimalList() {
    const animalData = await fetchAnimalData();
    animalData.forEach(animal => {
        const listItem = document.createElement("li");
        listItem.textContent = animal.name;
        listItem.addEventListener("click", () => showAnimalDetails(animal));
        animalList.appendChild(listItem);
    });
}

// Display animal details
function showAnimalDetails(animal) {
    currentAnimal = animal;
    animalImage.src = animal.image;
    animalVotes.textContent = `Votes: ${animal.votes}`;
    voteButton.addEventListener("click", voteForAnimal);
}

// Vote for an animal
function voteForAnimal() {
    if (currentAnimal) {
        currentAnimal.votes++;
        animalVotes.textContent = `Votes: ${currentAnimal.votes}`;
    }
}

// Initially populate the list of animals
populateAnimalList();
