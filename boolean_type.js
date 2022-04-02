let falsyVar = false;
let truthyVar = true;

if (truthyVar) {
    console.log("truthy var is true!");
}

if (falsyVar) {
    console.log("falsy var is true!");
}


let temperature = 9;

// Sunny / Snowy / Rain / Cloudy
let weather = "Rain";

let hangover = true;

if (weather === "Rain" && temperature < 10 && hangover) {
    console.log("I stay at home");
}

