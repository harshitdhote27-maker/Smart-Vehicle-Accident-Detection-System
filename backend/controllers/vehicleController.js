// vehicleController.js

const vehicleData = {};

// Function to lock the engine of the vehicle
function engineLock() {
    // Logic to lock the engine
    console.log('Engine locked');
}

// Function to update the vehicle's location
function updateLocation(newLocation) {
    // Logic to update vehicle location
    vehicleData.location = newLocation;
    console.log('Location updated to:', newLocation);
}

// Function to update the fuel level
function updateFuelLevel(newLevel) {
    // Logic to update fuel level
    vehicleData.fuelLevel = newLevel;
    console.log('Fuel level updated to:', newLevel);
}

// Function to get vehicle data
function getVehicleData() {
    // Logic to get vehicle data
    return vehicleData;
}

module.exports = { engineLock, updateLocation, updateFuelLevel, getVehicleData };