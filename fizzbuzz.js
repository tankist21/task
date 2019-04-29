let num = +prompt("Введите число: ");
    for (let i = 1; i <= num; i++) {
        if (i % 3 === 0 && i % 5 === 0) {               // число кратно 3 и 5
            console.log('fizzbuzz');
        } else if (i % 5 === 0) {                       // число кратно 5
            console.log('buzz');
            } else if (i % 3 === 0) {                   // число кратно 3
                console.log('fizz');
            } else {
                console.log(i);
            }
    }