var names = ["Bill", "John", "Jen", "Jason", "Paul", "Frank", "Steven", "Larry", "Paula", "Laura", "Jim"];

for (var i = 0; i < names.length; i++) {
    var firstLetter = names[i].charAt(0).toLowerCase();
    if (firstLetter === 'j') {
        byeSpeaker.speak(names[i]);
    } else {
        helloSpeaker.speak(names[i]);
    }
}

console.log("-------------------------------------------------------------------");
console.log("Якщо ім'я менше або рівне 4, то ім'я коротке.");
console.log("Відповідно якщо більше 4, то ім'я довге.");
console.log("-------------------------------------------------------------------");

for (var i = 0; i < names.length; i++) {
    var nameLength = names[i].length;
    if (nameLength <= 4) {
        console.log(names[i] + ": Short Name");
    } else {
        console.log(names[i] + ": Long Name");
    }
}
