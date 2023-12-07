

var marks = Array(6)
var marks = new Array(20, 30, 40, 50, 60, 70)
var marks = [11, 2, 3, 4, 5, 6]
marks[2] = 50
marks.push(65)
marks.pop()
marks.unshift(30)
console.log(marks)
console.log(marks.indexOf(11));
console.log((marks.includes(12)));
newArray = marks.slice(2, 5)
console.log(newArray);
var sum =0;
for(let i=0; i<marks.length; i++)
{
    sum = sum + marks[i]
    
}
console.log(sum);

// Reduce filter map
let total = marks.reduce((sum, mark) => sum+mark,0)
console.log(total);

// Print even numbers
var scores = [12, 13, 14, 16]
var evenArray = []
for(let i=0; i<scores.length; i++)
{
    if(scores[i] % 2 ==0)
    {
        evenArray.push(scores[i])
    }
}
console.log(evenArray);

let newEvenArray = scores.filter(score => score%2==0)
console.log(newEvenArray);

// multiple each value with new array
let newMapArray = newEvenArray.map(score=>score*3)
console.log(newMapArray);

// Sum of new Array
let totalVal = newMapArray.reduce((sum, val) =>sum+val, 0)
console.log(totalVal);

// Create new array with even numbers of scores and multiply each value with 3 and sum them.
var scores1 = [2, 5, 6, 8]
let sumValue = scores1.filter(score=>score%2==0).map(score=>score*3).reduce((sum,val)=>sum+val,0)
console.log(sumValue);

// Sort string array
let friuts = ["banana", "mongo", "lemon", "apple"]
friuts.sort()
console.log(friuts);
// Descending order
console.log(friuts.reverse());

// Sort number array
let nums = [13, 24, 56, 43, 33, 3]
console.log(nums.sort());
console.log((nums.reverse()));
console.log(nums.sort((a, b)=>a-b));
console.log(nums.sort((a, b)=>b-a));