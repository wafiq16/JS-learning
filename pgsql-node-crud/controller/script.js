$(document).ready(function() {
    $.getJSON("http://localhost:3000/fishes").then(function(fishes) {
        fishes.forEach(function(fish) {
            console.log("let's see each fish!", fish);
        });
    });
});