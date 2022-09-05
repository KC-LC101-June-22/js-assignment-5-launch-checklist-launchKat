// Write your JavaScript code here!
//import fetch from './scriptHelper';
//require("./scriptHelper.js");
// const pickPlanet = require("./scriptHelper");
// const myFetch = require("./scriptHelper");

window.addEventListener("load", function () {
    let form = document.querySelector("form");
    form.addEventListener("submit", function(event){
        event.preventDefault();
        
        let pilotName = document.querySelector("input[name=pilotName]").value;
        let copilotName = document.querySelector("input[name=copilotName]").value;
        let fuelLevel = document.querySelector("input[name=fuelLevel]").value;
        let cargoMass = document.querySelector("input[name=cargoMass]").value;
        let list = document.getElementById('faultyItems');

        //stop formSubmission
        formSubmission(document, list, pilotName, copilotName, fuelLevel, cargoMass);
    })

    let listedPlanets;
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse = myFetch();
    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
        console.log(listedPlanets);
    }).then(function () {
        console.log(listedPlanets);
        let targetPlanet = pickPlanet(listedPlanets);
        let name = targetPlanet.name;
        let diameter = targetPlanet.diameter;
        let star = targetPlanet.star;
        let distance = targetPlanet.distance;
        let imageUrl = targetPlanet.image;
        let moons = targetPlanet.moons;


        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
        addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl)
    })

});
