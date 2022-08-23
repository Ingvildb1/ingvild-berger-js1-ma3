
const url = "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=9a678584df0045b39e09dc92cc7dcd80";

const resultsContainer = document.querySelector(".results");

async function getData() {
    // fetch

    const response = await fetch(url);

    const facts = await response.json();

    
    console.log(facts.results);

    resultsContainer.innerHTML = "";

    

    for (let i = 0; i < facts.results.length; i++) {
        //console.log(facts.results[i].name)
        //console.log(facts.results[i].rating)
        //console.log(facts.results[i].tags.length)
         
            if (i === 8) {
                break;
            }
        
            // innerHTML
        resultsContainer.innerHTML += `<div class="results">${("Name: ") + facts.results[i].name + (" Rating: ") + facts.results[i].rating + (" Tags: ") + facts.results[i].tags.length}</div>`;
    }
}


getData();