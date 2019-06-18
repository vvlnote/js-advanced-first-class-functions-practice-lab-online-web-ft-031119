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
  let newSortedArr = [...drivers];
  newSortedArr.sort(function(d1, d2) {
    return d1.revenue - d2.revenue;
  })
  return newSortedArr;
}

function driversByName(drivers) {
  let newSortedArr = [...drivers];
  newSortedArr.sort(function(d1, d2) {
    return d1.name.localeCompare(d2.name);
  })
  return newSortedArr;
}

function totalRevenue(drivers) {
  drivers.reduce(function(sum, d, i, drivers){
    console.log(`sum = ${sum} d.revenum = ${d.revenue}`);
     return sum + d.revenum;
  })
}
