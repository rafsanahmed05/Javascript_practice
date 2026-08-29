// const weight = process.argv[2];
// const height = process.argv[3];

// function calculatebmi(weight, height) {
//     return weight / (height * height);
//     return bmi;
// }

// console.log(calculatebmi(weight, height));

const weight = process.argv[2];
const height = process.argv[3];

function calculatebmi( weight, height) {
    const bmi = weight / (height * height);
    return bmi;
}
const bmi = calculatebmi (weight, height)

console.log(bmi);

if (bmi < 18.5){
    console.log("Underweight");
}else if (bmi >= 18.5 && bmi < 24.9){
    console.log("Normal weight");
}else if (bmi >= 25 && bmi < 29.9){
    console.log("Overweight");
}else 
    {console.log("Obese");}