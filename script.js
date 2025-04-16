// Fetch a random joke from JokeAPI
async function getJoke() {
    const jokeElement = document.getElementById("joke");
    jokeElement.innerText = "Loading...";

    try {
        const response = await fetch("https://v2.jokeapi.dev/joke/Any");
        const data = await response.json();

        if (data.type === "single") {
            // Single-line joke
            jokeElement.innerText = data.joke;
        } else if (data.type === "twopart") {
            // Two-part joke
            jokeElement.innerText = `${data.setup} \n\n ${data.delivery}`;
        }
    } catch (error) {
        console.error("Error fetching joke:", error);
        jokeElement.innerText = "Oops! Couldn't fetch a joke. Please try again later.";
    }
}