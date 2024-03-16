// Stack (primitive Data type)
// Primitive data types and references	_ string _boolean
// Size is known at compile time 	
// Fixed memory allocated

// Heap (Non-primitive Data type)
// Objects and functions
// Size is known at run time
// No limit for object memory



// example for stack memory allocation
// it always give the copy and never changes the original value
let newname ='js';
let anotherName = newname;
anotherName ='react'
console.log(anotherName);
console.log(newname);


// heap memory allocation
// it always gets the reference 
let user={
email:"test@123",
testno:"123"
}
;

let user1 = user
user1.email ='test@321'
console.log(user);
console.log(user1);
