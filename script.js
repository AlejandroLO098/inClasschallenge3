// 1) Create 3 arrays, One with all String data types, one with all Numbers data types, and one with Boolean data types.  
// You will need to add sample data to each array (don't over think this). Each array should have at least 5 elements.. 

// 2) Next create a function that can take any of these arrays as a parameter and add an additional String, Number, or 
// Boolean depending on which array was passed in. 

// Hint: You will need an array method to add new items to the end of the array. You will also need conditionals set up 
// to check the item at index 0 so you know what array was passed into the function.  You can use the typeof method to 
// determine what type of data is in the array.  

const fruits = ['Mango', 'Apple', 'Pear', 'Orange', 'Grape'];
const numbers = [2, 4, 6, 8, 10];
const trueorfalse = [4>3, 2=3, false, true,false];

function userInput() {
    if(userInput === typeof 1) {
        return fruits.push('Watermelon')
    } else if(userInput === typeof "") {
        return numbers.push(3)
    } else if(userInput === typeof true) {
        return trueorfalse.push(true)
    }

}
 
console.log(userInput(3))