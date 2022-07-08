// var  a = 100;
// {
//     var a = 10; // a=10 shadows a=100
//     let b = 20;
//     const c = 30;
//     console.log(a);
//     console.log(b);
//     console.log(c);

// }

// console.log(a); // value of a  changes in global scope also (a = 10)
//-----------------------------------------------------------------------/
// var  b = 100;    //script scope
// {
//     var a = 10;  //global scope
//     let b = 20;  // Block scope
//     const c = 30;  // Block scope
//     console.log(a);
//     console.log(b);
//     console.log(c);

// }

// console.log(b); // value of b does not change in Global Scope (b = 100)
//-----------------------------------------------------------------------/
const  c = 100;
{
    var a = 10; 
    var b = 20;
    const c = 30; // c=30 shadows c=100
    console.log(a);
    console.log(b);
    console.log(c);

}

console.log(c); // value of c  does not change in Global Scope (c = 100)
//----------------------------------------------------------------------/