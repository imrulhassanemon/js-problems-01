const age  = 20;
const student = false;
const regularPrice = 800;

if(age<10){
    console.log("You are children you are for free")
}
else{
    if(student === true){
        const discount = regularPrice * 50/100
        console.log("You are student. You got 50% discout. Your discount price is "+ discount , "total price is ",  regularPrice- discount)
    }
    else if(age>=60){
        const discount = regularPrice * 15 / 100;
        console.log("You are senior citizen. You got 15% discount. You discount prize is "+ discount , " Toatl price is ", regularPrice-discount)
    }
    else{
        console.log("You don't have any discount. You have to pay ", regularPrice)
    }
}
