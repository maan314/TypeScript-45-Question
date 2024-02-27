// Objects containing information about countries
let countryObjects: { [key: string]: { name: string; capital: string; population: number } } = {
    Pakistan: { name: 'Pakistan', capital: 'Islamabad', population: 220892340 },
    Canada: { name: 'Canada', capital: 'Ottawa', population: 37742154 },
    Russia: { name: 'Russia', capital: 'Moscow', population: 145912025 },
    China: { name: 'China', capital: 'Beijing', population: 1444216107 },
    Japan: { name: 'Japan', capital: 'Tokyo', population: 126476461 },
};


console.log('Information about Countries:');
for (const countryKey in countryObjects) {
    if (countryObjects.hasOwnProperty(countryKey)) {
        const country = countryObjects[countryKey];
        console.log(`Name: ${country.name}, Capital: ${country.capital}, Population: ${country.population}`);
    }
}
