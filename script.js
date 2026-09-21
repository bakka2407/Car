function showMessage(message) {
    const messageBox = document.getElementById("message");

    messageBox.innerHTML = message;
    messageBox.style.display = "block";

    setTimeout(function() {
        messageBox.style.display = "none";
    }, 3000);
}


function showSection(section) {
    const sport = document.getElementById("sport");
    const cars = document.getElementById("cars");

    if (section === "sport") {
        sport.style.display = "block";
        cars.style.display = "none";
    }

    if (section === "cars") {
        sport.style.display = "none";
        cars.style.display = "block";
    }
}