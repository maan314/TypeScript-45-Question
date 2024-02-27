// Objects containing information about countries
var countryObjects = {
    Pakistan: { name: 'Pakistan', capital: 'Islamabad', population: 220892340 },
    Canada: { name: 'Canada', capital: 'Ottawa', population: 37742154 },
    Russia: { name: 'Russia', capital: 'Moscow', population: 145912025 },
    China: { name: 'China', capital: 'Beijing', population: 1444216107 },
    Japan: { name: 'Japan', capital: 'Tokyo', population: 126476461 },
};
console.log('Information about Countries:');
for (var countryKey in countryObjects) {
    if (countryObjects.hasOwnProperty(countryKey)) {
        var country = countryObjects[countryKey];
        console.log("Name: ".concat(country.name, ", Capital: ").concat(country.capital, ", Population: ").concat(country.population));
    }
}
