// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    // Here is the HTML formatting for our mission target div.
    let missionDestination = document.getElementById('missionTarget')
    missionDestination.innerHTML = `
                 <h2>Mission Destination</h2>
                 <ol>
                     <li>Name: ${name} </li>
                     <li>Diameter: ${diameter} </li>
                     <li>Star: ${star}</li>
                     <li>Distance from Earth: ${distance} </li>
                     <li>Number of Moons: ${moons} </li>
                 </ol>
                 <img src='${imageUrl}'>
                 `



}

function validateInput(testInput) {
    if (!testInput) {
        return `Empty`
    } else if (!isNaN(testInput)) {
        return `Is a Number`
    } else {
        return `Not a Number`
    }
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    // let pilot = document.querySelector("input[name=pilotName]").value;
    // let copilot = document.querySelector("input[name=copilotName]").value;
    // let fuelLevel = document.querySelector("input[name=fuelLevel]").value;
    // let cargoLevel = document.querySelector("input[name=cargoMass]").value;
    // let list = document.getElementById('faultyItems');

    let pilotStatus = document.getElementById("pilotStatus");
    let copilotStatus = document.getElementById("copilotStatus");
    let fuelStatus = document.getElementById("fuelStatus");
    let cargoStatus = document.getElementById("cargoStatus");
    let launchStatus = document.getElementById("launchStatus");
    //let list = document.getElementById("faultyItems")

    if (validateInput(pilot) === 'Empty' || validateInput(copilot) === 'Empty' || validateInput(fuelLevel) === 'Empty' || validateInput(cargoLevel) === `Empty`) {
        //console.log('All fields are required!')
        launchStatus.innerHTML = 'Awaiting information before launch';
        list.style.visibility = 'hidden';
        alert('All fields are required!');
    } else if (validateInput(fuelLevel) === 'Not a Number' || validateInput(cargoLevel) === 'Not a Number') {
        //console.log('Fuel level and cargo mass must be numbers')
        launchStatus.innerHTML = 'Awaiting information before launch';
        list.style.visibility = 'hidden';
        alert('Fuel level and cargo mass must be numbers.');
    } else if (validateInput(pilot) === `Is a Number` || validateInput(copilot) === `Is a Number`) {
        //console.log('Pilot names cannot be numbers')
        launchStatus.innerHTML = 'Awaiting information before launch';
        list.style.visibility = 'hidden';
        alert('Pilot names cannot be numbers.');
    } else if (validateInput(pilot) === `Not a Number` && validateInput(copilot) === `Not a Number`) {
        launchStatus.innerHTML = 'Awaiting information before launch'
        pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
        copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;
        list.style.visibility = 'hidden';

    }
    if (Number(cargoLevel) <= 10000 && Number(fuelLevel) >= 10000) {
        list.style.visibility = 'visible';
        fuelStatus.innerHTML = 'Fuel level high enough for launch';
        cargoStatus.innerHTML = 'Cargo mass low enough for launch';
        launchStatus.innerHTML = 'Shuttle is Ready for Launch';
        launchStatus.style.color = 'rgb(65, 159, 106)';
    } else if (Number(cargoLevel) > 10000) {
        cargoStatus.innerHTML = 'Cargo mass too heavy for launch';
        list.style.visibility = 'visible';
        launchStatus.innerHTML = 'Shuttle Not Ready for Launch';
        launchStatus.style.color = 'rgb(199, 37, 78';
    } else if (Number(fuelLevel) < 10000) {
        fuelStatus.innerHTML = 'Fuel level too low for launch';
        list.style.visibility = 'visible';
        launchStatus.innerHTML = 'Shuttle Not Ready For Launch';
        launchStatus.style.color = 'rgb(199, 37, 78)';
    }
};

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then(function (response) {
        return response.json()
    });

    return planetsReturned;
};

function pickPlanet(planets) {
    let index = Math.floor(Math.random() * planets.length);
    return planets[index]
};


module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet;
module.exports.myFetch = myFetch;
