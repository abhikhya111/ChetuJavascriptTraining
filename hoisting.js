// Hoisting means accessing variables and functions even before they are declared//

getUsername(); // Returns Abhikhya Ashi
console.log(x); // Returns undefined
console.log(getUsername);  //Prints function
console.log(getUsernameCopy);  // Prints not defined (Arrow function)

var x = 7;

function getUsername()
{
    console.log('Abhikhya Ashi')
}

console.log(getUsername);   //Prints function

getUsernameCopy = () => {
    console.log('Abhikhya Ashi');

}

//Hence a function can be accessed before declaring it.
//Variable will be undefined before decleration and 
//Arrow function is not defined before declaration
