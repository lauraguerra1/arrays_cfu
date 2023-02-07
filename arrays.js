var friends = ["Miranda","Dave","Heather","Greg"]; 
var ages = [25, 29, 34, 33];
var collegeGraduate = [false, true, false, true];

// ARRAY METHODS 

friends.shift(); // The shift method will remove the first element from the array.
// If we print the friends variable to the console, we can expect Miranda to have been removed. 

ages.unshift(23); // The unshift methid will add new elements to the beginning of the array. 
// If we print the ages variable to the console, we can expect 23 to be added to the begging of the array. 

collegeGraduate.push(false); // The push method will add new elements to the end of the array. 
// If we print the collegeGraduate variable to the console, we can expect false to be added to the end of the array. 


// INDEX POSITIONS 

console.log(friends[0]); // The index positions begin with 0, so logging out the index position 0 will return the 
// first element in the array. Since we used the shift method on line 7, we can expect Dave to be printed to the 
// console, not Miranda.

console.log(ages[4]); // Logging out the index position 4 will return the fifth element in the array. The original 
// ages variable contained only 4 elements, so one might expect the console to say undefined. However, given that 
// the unshift method on line 10 adds an element to the beginning of the array, we can actually expect 33 to be 
// printed to the console. 

console.log(collegeGraduate[1]); // Logging out the index position 1 will return the second element in the array. 
// The push method on line 13 adds an element to the end of the array, so index position 1 remains unaffected. We 
// can expect true to be printed to the console. 