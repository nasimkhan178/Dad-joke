const btnEl =document.getElementById("btn");
const jokeEl = document.getElementById("joke");

const apiKey = "sdrATBNh3d/ZyoE0Qgk49w==VVRzakDLxzVE56qC";

const options = {
    method: "GET",
    headers: {
        "X-Api-Key": apiKey,
    },
};

const apiURL = "https://api.api-ninjas.com/v1/dadjokes?limit=";

async function getJoke() {

    try {
        jokeEl.innerText = "Updating...!";
        btnEl.disabled = true;
        btnEl.innerText = "Loading...";
    
        const response = await fetch(apiURL, options);
    
        const data = await response.json();
        btnEl.disabled = false;
        btnEl.innerText = "TELL ME A JOKE";
    
        jokeEl.innerText = data[0].joke;
        
    } catch (error) {

        jokeEl.innerText = "Please Check Your Internet Connection.";
        btnEl.disabled = false;
        btnEl.innerText = "TELL ME A JOKE";
        console.log(error);
        
    }

   
}

btnEl.addEventListener("click",getJoke);