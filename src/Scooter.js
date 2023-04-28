class Scooter {
  
  static nextSerial = 1;

  constructor(station) {
    // string; the station the scooter is located at, or null if checked out
    this.station = station;
    //unboxes the object and creates a copy
    this.user = {...user};
    this.serial = Scooter.nextSerial++;
    this.charge = 100;
    this.isBroken = false;
  }

  rent(user) {
    if (this.charge < 20)  {
      throw new Error("Battery below 20%, please charge the scooter");
    } else if (this.isBroken) {
      throw new Error("Scooter needs repair!");
    } else {
      //
      this.user = user;
      this.station = null;
    }
  }

  dock(station) {
    
    this.station = station;
    this.user = null;
  }

  recharge(charge) {

    this.charge = charge;
      //if current charge is less than 100 and is less than 90 %
      if ( this.charge < 100 &&  this.charge > 90) {
        // add 10 charge so the increments are equal and do not exceed 100 %
        this.charge += 10;
        // update user of status of charge for that specific scooter
        console.log(`Scooter ${this.serial} is now charged ${this.charge}%`);
      } else {
        // otherwise let user know that the scooter doesnt require charging!
        return console.log(`Scooter ${this.serial} is fully charged!`);
      }
    
  }

 
}



module.exports = Scooter
