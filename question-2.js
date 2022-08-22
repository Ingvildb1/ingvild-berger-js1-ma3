
//Question 2
//Make a call to the Rawg API.
//Go to https://rawg.io/apidocs and get an API key which you’ll use as part of the endpoint you’re making an API call to. You can use https://noroff.no for the URL and Noroff Assignment for the description.

 //Make a call to the following API endpoint replacing INSERTAPIKEYHERE with the key given to you from the Rawg API.
const url = "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=9a678584df0045b39e09dc92cc7dcd80";

const resultsContainer = document.querySelector(".results");

async function getData() {
// fetch

    const response = await fetch(url);

    const results = await response.json();
    
    
    const facts = results.all;
    

    resultsContainer.innerHTML = "";

    for (let i = 0; i < facts; i += 1) {
       console.log(facts[i].name);

        if (i === 8) {
           break;
        }

        resultsContainer.innerHTML += `<div class="results">${facts[i].name}</div>`;
    }

}

getData();
