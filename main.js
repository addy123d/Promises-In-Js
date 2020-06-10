// // WITHOUT PROMISE

// const wholeList = document.getElementById("collection");
// /*
//     Suppose array of object coming from server.
// */
// const products = [
//     {name : "Burger", price: "30"},
//     {name : "Samosa", price: "10"},
//     {name : "Fried Rice", price: "50"}
// ]


// function displayProducts(){
//     let output = "";
//     setTimeout(()=>{
//         products.forEach(element=>{
//             output += `<li>${element.name}</li>`;
//         })
//         wholeList.innerHTML = output;
//     },1000)
// }

// function removeProduct(){
   
//         setTimeout(()=>{
//             products.pop();

//         },2000)

// }


// // Function Calling
// removeProduct();
// displayProducts();

// PROBLEM - Products are displayed before product removal, if we go synchronously.
// SOLUTION - We have to go asynchronously with the help of promises.



// WITH PRMOISE
const wholeList = document.getElementById("collection");
/*
    Suppose array of object coming from server.
*/
const products = [
    {name : "Burger", price: "30"},
    {name : "Samosa", price: "10"},
    {name : "Fried Rice", price: "50"}
]


function displayProducts(){
    let output = "";
    setTimeout(()=>{
        products.forEach(element=>{
            output += `<li>${element.name}</li>`;
        })
        wholeList.innerHTML = output;
    },1000)
}

function removeProduct(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            products.pop();
            const err = false; 

            if(!err) resolve("Promise resolved !");
            else reject("Error !");
        },2000)
    })
}

// ${WHOLE IDEA BEHIND USING PROMISE} - Firt product should be removed from the product array then product list should be DISPLAYED !

removeProduct().then((data)=>{
    console.log(data);
    displayProducts();
}).catch(err=>console.log(err));