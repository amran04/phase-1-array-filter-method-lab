// Code your solution here
function superbowlWin(record) {
	let obj = record.find(function (obj) {
		return obj.result === "W";
	});
	if (typeof obj === "undefined") {
		return undefined;
	} else {
		return obj.year;
	}
}
function findMatching(drivers, name) {
  return drivers
    .filter(function (driver) {
      return driver.toLowerCase().indexOf(name.toLowerCase()) !== -1;
    })
    .sort();
}
function fuzzyMatch(drivers, name) {
  return drivers
    .filter(function (driver) {
      return driver.toLowerCase().indexOf(name.toLowerCase()) === 0;
    })
    .sort();
}
function matchName(drivers, name) {
  return drivers.filter(function (driver) {
    return driver.name.toLowerCase() === name.toLowerCase();
  });
}



