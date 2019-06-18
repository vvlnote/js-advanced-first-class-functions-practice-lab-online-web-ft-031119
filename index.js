// Code your solution in this file!
function logDriverNames(drivers) {
  drivers.forEach(function(driver) {
    console.log(`${driver.name}`);
  })
}

function logDriverbyHometown(drivers, cityName) {
  drivers.forEach(function(driver) {
    if (driver.hometown === cityName){
      console.log(`${driver.name}`)
    }
  })
}
