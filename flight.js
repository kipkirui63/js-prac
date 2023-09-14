function Flight(flightNumber,flightStatus){
    this.flightNumber = flightNumber;
    this.flightStatus = flightStatus
}

var flight1 = new Flight ("kq",22);
var flight2 = new Flight ("Qatar",23);

console.log('Welcome to' +  ' ' + flight1.flightNumber , flight2.flightNumber )