var friends = ["Miranda","Dave","Heather","Greg"]; 
var ages = [25, 29, 34, 33];
var collegeGraduate = [true, false, false, true];

friends.shift(); // The shift method will remove the first element from the array.
// If we print the friends variable to the console, we can expect Miranda to have been removed. 

ages.unshift(23); // The unshift methid will add new elements to the beginning of the array. 
// If we print the ages variable to the console, we can expect 23 to be added to the begging og the array. 

collegeGraduate.push(false); // The push method will add new elements to the end of the array. 
//If we print the collegeGraduate variable to the console, we can expect false to be added to the end of the array. 