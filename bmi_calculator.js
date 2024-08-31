const weight =109;
const height = 1.8;

let bmi = weight/ (height)**2;

if (bmi < 18.5){
    b = parseFloat(bmi).toFixed(1)
    console.log("You are under weight. You bmi is ", parseFloat(b))
}
else if(bmi<=18.5 || bmi<=24.9){
    b = parseFloat(bmi).toFixed(1)
    console.log("You are normal. Your bmi is ", parseFloat(b))
}
else if(bmi<=25 || bmi <=29.9){
    b = parseFloat(bmi).toFixed(1)
    console.log("You are overweight. Your bmi is ", parseFloat(b))
}
else{
    bmi = parseFloat(bmi).toFixed(1)
    console.log("You are obese. Your bmi is ", parseFloat(bmi))
}