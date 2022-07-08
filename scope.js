{
    var a = 10 //global scope
    let b = 20 //block scope
    const c = 30 //block scope

    console.log(a); //accessible
    console.log(b); //accessible
    console.log(c); //accessible
}

console.log(a); //accessible
console.log(b); //not accessible
console.log(c); //not accessible
