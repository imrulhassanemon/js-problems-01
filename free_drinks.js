const burgerPrice = 499;
let cokePrice = 30;
coke = true;

if (burgerPrice>500){
    console.log("you got is fee coke. Your taka is ", burgerPrice)
}
else{
    if(coke===true){
        totalPrice = burgerPrice + cokePrice;
        console.log("You take burger and coke. Your price is", totalPrice)
    }
    else{
        console.log("You buy only buger. Your taka is, ", burgerPrice);
    }
}