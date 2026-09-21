const cars = document.querySelectorAll(".car-card");


cars.forEach(function(car) {

    car.addEventListener("click", function() {

        const name = car.querySelector("h3").innerHTML;

        alert("Je hebt gekozen voor: " + name);

    });

});