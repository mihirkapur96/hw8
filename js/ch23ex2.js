console.log("Mihir's output from Chapter 23 Exercise 2");

const name = "Mihir Kapur"
const countries = [
    {
        name: "United States",
        year: 2017,
    },
    {
        name: "Dubai",
        year: 2018
    }
];

fetch(
    "https://thejsway-server.herokuapp.com/api/countries", {
    method: "POST",
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
    },
    body: JSON.stringify(countries)
})
    .then(response => response.text())
    .then(result => {
        console.log(result);
    })
    .catch(err => {
        console.error(err.message);
    });
    
    console.log("Your name is Mihir Kapur and you visited 2 countires. Keep travelling!");