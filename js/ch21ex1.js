console.log("Mihir's output from Chapter 21 Exercise 1");

[
    {
        "name": "The Starry Night",
        "year": "1889",
        "artist": "Vincent Van Gogh"
    },
    {
        "name": "The Scream",
        "year": "1893",
        "artist": "Edvard Munch"
    },
    {
        "name": "Guernica",
        "year": "1937",
        "artist": "Pablo Picasso"
    }
]

fetch(
    "https://raw.githubusercontent.com/bpesquet/thejsway/master/resources/paintings.json"
)
.then(response=> response.json ())
.then(paintings=> {
    paintings.forEach(painting => {
        console.log(painting.name);  
    });
})
.catch(err => {
    console.error(err.message);
});
