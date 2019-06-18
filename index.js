// Code your solution in this file!
function logDriverNames(drivers) {
  drivers.forEach(function(driver) {
    console.log(`${driver.name}`);
  })
}

function logDriversByHometown(drivers, cityName) {
  drivers.forEach(function(driver) {
    if (driver.hometown === cityName){
      console.log(`${driver.name}`)
    }
  })
}

function driversByRevenue(drivers){
  let newSortedArr = [];
  newSortedArr = drivers.sort(function(d1, d2) {
    return d1.revenue - d2.revenue;
  })
  return newSortedArr;
}
