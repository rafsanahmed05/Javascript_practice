// for increment loop
// for (let i = 0; i < 5; i++) {
//     console.log(i);
// }

// for decreament loop 
for ( let i = 5; i >= 0; i--) {
    console.log(i);
}


let fruits = ["mango", "banana", "apple", "orange"];
 for  ( let i = 0; i < fruits.length; i++) {
    console.log("khabo :", fruits[i]);
 }


 let car= [ "bus", "car", "bike", "truck"];

    for (let i = 0; i < car.length; i++) {
        console.log("ami jabo :", car[i]);
    }

    for (let i = 0; i < 10; i++) {
        if (i%2 !=0)
            continue;
            {console.log("odd number :", i);}
    }
   
    let marks = [ 10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

    let sum = 0;
    for (let mark of marks) {
        sum += mark;
    }
    console.log("total mark :", sum);