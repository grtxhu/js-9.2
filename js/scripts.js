var femaleNames = ['Zosia', 'Tosia', 'Hania', 'Iga'];
var maleNames = ['Franek', 'Jaś', 'Antek', 'Kuba'];

var allNames = femaleNames.concat (maleNames);

var newName = 'Leon';


if (allNames.indexOf(newName) === -1) {
    allNames.push(newName);
}


console.log(allNames);