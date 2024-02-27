console.log("ІНСТРУКЦІЯ");
console.log("Для використання функції triangle введіть наступну команду:");
console.log("triangle(значення_аргумента_1, 'тип_аргумента_1', значення_аргумента_2, 'тип_аргумента_2');");
console.log("Перелік можливих типів аргументів:");
console.log("- leg (катет)");
console.log("- hypotenuse (гіпотенуза)");
console.log("- adjacent angle (прилеглий до катета кут)");
console.log("- opposite angle (протилежний до катета кут)");
console.log("- angle (один з двох гострих кутів)");
console.log("Приклад виклику функцій:");
console.log("triangle(4, 'leg', 8, 'hypotenuse');");


function triangle(val1, type1, val2, type2) {
    // Перевірка на наявність правильних типів
    const validTypes = ["leg", "hypotenuse", "adjacent angle", "opposite angle", "angle"];
    if (!validTypes.includes(type1) || !validTypes.includes(type2)) {
        console.log("Будь ласка, перечитайте інструкцію та введіть правильні типи.");
        return "failed";
    }

    // Перевірка на коректність введених значень
    if ((typeof val1 !== 'number' && isNaN(parseFloat(val1))) || (typeof val2 !== 'number' && isNaN(parseFloat(val2)))) {
        console.log("Введені значення повинні бути числами або числовими рядками.");
        return "failed";
    }

    // Перевірка на від'ємні значення
    if (val1 < 0 || val2 < 0) {
        console.log("Введені значення не можуть бути від'ємними числами.");
        return "failed";
    }

    // Перетворення рядкових значень у числа, якщо необхідно
    val1 = typeof val1 === 'number' ? val1 : parseFloat(val1);
    val2 = typeof val2 === 'number' ? val2 : parseFloat(val2);

    let c, a, b, alpha, beta;

    // Перевірка усіх можливих порядків типів аргументів
    switch (type1) {
        case "leg":
            switch (type2) {
                case "hypotenuse":
                    a = val1;
                    c = val2;
                    if (a >= c) {
                        console.log("Значення катету не може бути більшим або рівним за значення гіпотенузи.");
                        return "failed";
                    }
                    b = Math.sqrt(c * c - a * a);
                    alpha = Math.atan(a / b) * (180 / Math.PI);
                    beta = 90 - alpha;
                    break;
                case "angle":
                    a = val1;
                    alpha = val2;
                    beta = 90 - alpha;
                    b = a / Math.tan(alpha * (Math.PI / 180));
                    c = Math.sqrt(a * a + b * b);
                    break;
            }
            break;
        case "hypotenuse":
            switch (type2) {
                case "leg":
                    c = val1;
                    a = val2;
                    if (c <= a) {
                        console.log("Значення гіпотенузи не може бути меншим або рівним за значення катету.");
                        return "failed";
                    }
                    b = Math.sqrt(c * c - a * a);
                    alpha = Math.atan(a / b) * (180 / Math.PI);
                    beta = 90 - alpha;
                    break;
                case "angle":
                    c = val1;
                    beta = val2;
                    alpha = 90 - beta;
                    a = (c * Math.sin(beta * (Math.PI / 180))) / Math.sin(90 * (Math.PI / 180));
                    b = Math.sqrt(c * c - a * a);
                    break;
            }
            break;
        case "angle":
            switch (type2) {
                case "leg":
                    alpha = val1;
                    a = val2;
                    beta = 90 - alpha;
                    c = a / (Math.sin(alpha * (Math.PI / 180)) / Math.sin(90 * (Math.PI / 180)));
                    b = Math.sqrt(c * c - a * a);
                    break;
                case "hypotenuse":
                    alpha = val1;
                    c = val2;
                    beta = 90 - alpha;
                    a = (c * Math.sin(alpha * (Math.PI / 180))) / Math.sin(90 * (Math.PI / 180));
                    b = Math.sqrt(c * c - a * a);
                    break;
            }
            break;
    }

    // Перевірка на негострі кути
    if (alpha >= 90 || beta >= 90) {
        console.log("Введені кути не є гострими кутами.");
        return "failed";
    }

    console.log(`a = ${a}`);
    console.log(`b = ${b}`);
    console.log(`c = ${c}`);
    console.log(`alpha = ${alpha}`);
    console.log(`beta = ${beta}`);

    return "success";
}
