const User = require('./User')
const Scooter = require('./Scooter')

class ScooterApp {
  // ScooterApp code here
  constructor()
  {
    this.stations = [];
    this.registeredUsers = [];
  }

  createScooter(stationName) {
    const station = this.stations.find(station => station.name === stationName);
    if (!station) {
      console.log(`Station ${stationName} does not exist.`);
      return false;
    } else {
      const scooter = new Scooter();
      station.addScooter(scooter);
      console.log(`Scooter created successfully at station ${stationName}.`);
      return scooter;
    }
  }

}

module.exports = ScooterApp
