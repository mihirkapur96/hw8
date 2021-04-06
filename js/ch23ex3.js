console.log("Mihir's output from Chapter 23 Exercise 3");
document.querySelector("form").addEventListener("submit", e => {
    e.preventDefault();
    const formData = new FormData(e.target);
    fetch("http://127.0.0.1:5500/html/ch23ex3.html", {
     // method: "POST",
     // body: formData
    })
      .then(response => response.text())
      .then(result => {
        document.getElementById("result").textContent = result;
      })
      .catch(err => {
        console.error(err.message);
      });
  });