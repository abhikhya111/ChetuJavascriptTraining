let p = new Promise((resolve,reject) => {
    let a = 5 + 2;
    if(a == 3)
    {
        resolve('success')
    }
    else
    {
        reject('failure')
    }
})

p.then((message) => {
    console.log(message)
})
.catch((message) => {
    console.log(message)
})