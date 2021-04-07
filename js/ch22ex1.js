console.log("Mihir's output from Chapter 22 Exercise 1");
const userElement = document.querySelector("form");
userElement.addEventListener("submit", e => {
    e.preventDefault();
    const details = userElement.elements.login.value;
    fetch('https://api.github.com/users/$%7Blogin%7D%60')
        .then(response => response.json())
        .then(user => {
            // Create user info
            const imgElement = document.createElement("img");
            imgElement.src = 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fgithub.com%2Fjoin&psig=AOvVaw01oCLO4VSPdAOWnIph8fBH&ust=1617840909198000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCIjKipnt6u8CFQAAAAAdAAAAABAD';
            imgElement.style.height = "100px";
            imgElement.style.width = "100px";
            const nameElement = document.createElement("name");
            nameElement.textContent = user.name;
            nameElement.style.fontSize = "25px";
            const blogElement = document.createElement("blog");
            blogElement.href = user.blog;
            blogElement.textContent = blogElement.href;
            // Add info on the page
            const informationElement = document.getElementById("info");
            informationElement.innerHTML = ""; // Remove previous user info
            informationElement.appendChild(imgElement);
            informationElement.appendChild(nameElement);
            informationElement.appendChild(blogElement);
        })
        .catch(err => {
            console.error(err.message);
        });
});