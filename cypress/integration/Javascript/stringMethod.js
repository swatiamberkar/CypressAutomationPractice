let day = 'monday '
console.log(day.length);  // 6

let subDay  = day.slice(0,4)
console.log(subDay);   //mond

console.log(day[5]);    // y

let splitDay = day.split("n")
console.log(splitDay[1].length);    //4
console.log(splitDay[1].trim().length); //3

let date = '23'
let nextDate = '27'
let diff = parseInt(nextDate) - parseInt(date)
console.log(diff);
console.log(typeof(diff));
let newDiff = diff.toString()
console.log(typeof(newDiff));

let quote = day + "is funday day"
console.log(quote);

let val = quote.indexOf("day", 5)
console.log(val);

// count the occurance of word
let count = 0;
let value = quote.indexOf("day")
while(value!== -1)
{
    count++;
    value = quote.indexOf("day", value+1)
}
console.log(count);