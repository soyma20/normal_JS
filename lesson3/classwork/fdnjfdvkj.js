// зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та:
//1. перебрати його циклом while
    let arr = [2,17,13,6,22,31,45,66,100,-18];
    let i = 0;
    while (i<arr.length) {
        console.log(arr[i])
        i++;
    }
//2. перебрати його циклом for
    for (let number of arr) {
        console.log(number)
    }
//3. перебрати циклом while та вивести  числа тільки з непарним індексом
    let o = 0;
    while (o<arr.length) {
        if (o % 2 !== 0) {
            console.log(arr[o]);
        }
        o++;
    }
// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
    for (let j = 0; j < arr.length; j++) {
        if (j%2 !== 0){
            console.log(arr[j])
        }
    }
// 5. перебрати циклом while та вивести  числа тільки парні  значення
    let l = 0;
    while (l<arr.length){
        if (l%2 === 0){
            console.log(arr[l]);
        }
        l++;
    }
// 6. перебрати циклом for та вивести  числа тільки парні  значення
    for (let h = 0; h < arr.length; h++) {
        if (h%2 === 0){
            console.log(arr[h])
        }
    }
// 7. замінити кожне число кратне 3 на слово "okten"
    for (let g = 0; g < arr.length; g++) {
        if (arr[g]%3 === 0){
            arr[g] = 'okten';
            console.log(arr[g])
        }
    }
// 8. вивести масив в зворотньому порядку.
    let arrBack = [2,17,13,6,22,31,45,66,100,-18];
    for (let j = arrBack.length-1; j >= 0 ; j--) {
        console.log(arrBack[j]);
    }
// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)
    for (let j = arrBack.length-1; j >= 0 ; j--) {
        console.log(arrBack[j]);
    }

    let f = arrBack.length;
    while (f) {
        if (f%2 !== 0) {
            console.log(arrBack[f]);
        }
        f--;
    }

    for (let j = arrBack.length-1; j >= 0; j--) {
        if (j%2 !== 0){
            console.log(arrBack[j])
        }
    }

    let s = arrBack.length;
    while (s) {
        if (s%2 === 0) {
            console.log(arrBack[s]);
        }
        s--;
    }

    for (let j = arrBack.length-1; j >= 0; j--) {
        if (j%2 === 0){
            console.log(arrBack[j])
        }
    }
    for (let q = arrBack.length-1; q >= 0; q--){
        if (arrBack[q]%3 === 0){
            arrBack[q]= 'okten'
            console.log(arrBack[q])
        }
    }