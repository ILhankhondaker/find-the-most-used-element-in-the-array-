// let arr1 = [1, 4, 6, 6, 1, 8, 9, 10, 1]
// let arr1 = [3, 'a', 'a', 3, 'a', 2, 3, 'a', 3, 3, 3, 'a', 2, 4, 9, 3];
// let arr1 = ['py', 'js', 'js', 'c', 'js', 'c#', 'py', 'c']
// let arr1 = [1, 4, 6, 6, 1, 8, 9, 10, 1]
let arr1 = [1, 4, 10, 1]
let mf = 1;
let m = 0;
let item;
for (let i = 0; i < arr1.length; i++) {
    for (let j = i; j < arr1.length; j++) {
        if (arr1[i] == arr1[j])
            m++;
        if (mf < m) {
            mf = m;
            item = arr1[i];
        }
    }
    m = 0;
}
console.log(item + " ( " + mf + " times ) ");

//=== If we wanna need sum of arry all number =====
const numbers = [1, 4, 6, 6, 1, 8, 9, 10, 1, 4];
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];
    sum = sum + element;
}
// console.log("Total sum=", sum);


//=== If we wanna need sum of arry all number to use function=====
function arrayTotal(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        const element = numbers[i];
        sum = sum + element;
    }
    return sum;
}
let numb = [1, 4, 6, 6, 1, 8, 9, 10, 1, 4, 50];
const total = arrayTotal(numb);
console.log('array total', total)