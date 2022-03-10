module.exports = function toReadable(number) {
    // function toReadable(number) {
    let arrayHundred = ['zero', 'one hundred', 'two hundred', 'three hundred', 'four hundred', 'five hundred', 'six hundred', 'seven hundred', 'eight hundred', 'nine hundred', 'ten hundred'];
    let arr2 = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen', 'twenty'];
    let arr3 = ['null1', 'null2', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

    if (number <= 20) {
        return arr2[number];
    } else if (number < 100 && number > 20) {
        let arrayOfTwo = ("" + number).split("").map(Number)
            //преобразование числа в массив. а после разделение на переменные.
        let firstNumb1 = arrayOfTwo[0];
        console.log('первое число =' + firstNumb1);
        let secondNumb1 = arrayOfTwo[1];
        console.log('второе число =' + secondNumb1);
        return arr3[firstNumb1] + ' ' + arr2[secondNumb1];
    } else if (number >= 100) {
        let arrayOfThird = ("" + number).split("").map(Number)
        let firstNumb2 = arrayOfThird[0];
        console.log('первая переменная равна ' + firstNumb2)
        let secondNumb2 = arrayOfThird[1];;
        console.log('вторая переменная равна ' + secondNumb2)
        let thirdNumb2 = arrayOfThird[2];;
        console.log('третья переменная равна ' + thirdNumb2)
        return arrayHundred[firstNumb2] + ' ' + arr3[secondNumb2] + ' ' + arr2[thirdNumb2];
    }
}
console.log(toReadable(865));


// function divisionOfNumbers(number) {
//     let array = ("" + number).split("").map(Number);
//     return array;

// }
// console.log(divisionOfNumbers(123));
