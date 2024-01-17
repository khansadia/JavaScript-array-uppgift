// 1. Create a variable where you store the first element of the `numbers` array. Log it to the console.
const numbers = [2, 6, 12, 7, 22, 35];
const firstElmt = numbers[0];
 console.log(firstElmt);
  // output 2

// 2. Create a variable where you store the last element of the `numbers` array. Log it to the console.
 const lastElmt = numbers[numbers.length - 1];
 console.log(lastElmt);
     // output 35

// 3. Create a variable where you store the fourth element of the `numbers` array. Log it to the console.
const fourthElmt = numbers[3];
console.log(fourthElmt);

        // output 7 


// 4. Store the second and the fifth element of the `numbers` array in variables. Create a new array and populate it with those two variables. Log it to the console.
 const secondElmt = numbers[1];
 const fifthElmt = numbers[4];
 const newArray = [secondElmt, fifthElmt];
 console.log(newArray);
       // output [  6,22 ]

// 5. What is the length of the `numbers` array? Use the correct array property to save that number to a variable and log it to the console.
const ArrayLength = numbers.length;
console.log(ArrayLength);
 // output 6

// 6. Add an arbitrary number to the end of the `numbers` array with the correct array method. This array method returns a value. Save that to a variable and log it to the console. What does this number represent?
const returnAValueAfterPush = numbers.push(85);
console.log(returnAValueAfterPush);
        // Out put : 7 => The returned number represent the numbers of 
        //elements in the array after adding the new element.


// 7. Add an arbitrary number to the start of the `numbers` array using the correct array method.
// This method also returns a value. Log it to the console and reflect on what this value means.

 const returnValueAfterUnshift = numbers.unshift(66);
console.log(returnValueAfterUnshift);
// Out put : 8 => The returned number represent the numbers of elements in the Array after adding the new element.


// 8. By now the `numbers` array should have been modified a couple of times. Let's shrink it again. Remove the last element from the array with an array method. This method should return a value as well. Log it to the console as see what it is.
const myReturnedValueAfterPop = numbers.pop();
 console.log(myReturnedValueAfterPop);
      //outout   85: The returned number represent the element that have been deleted from the Array.


// 9. Do the same as the last one, but remove it from the beginning instead. Log the return value to the console.
const ReturnedValueAfterShift = numbers.shift();
console.log(ReturnedValueAfterShift);
// outout 66: The returned number represent the element that have been deleted from the Array.


// 10. If we have done the last couple of exercises correctly, we should have the same content as the default array. Log it out the console and see for yourself. 
console.log(numbers);
// yes we have the same array [2, 6, 12, 7, 22, 35]