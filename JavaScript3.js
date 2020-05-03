// declear a variable to an empty array
let myArray = [];
// Checking if the argument is equal to the conditions
function myFunction(num) {
    // for loop appending num to x  
    for (x = 1; x <= num; x++) {
        // the switch statement is checking if the loops is equal to the cases iterate else return the value of x".
        switch (true) {
            case (x % 2 == 0 && x % 3 == 0 && x % 5 == 0):
                myArray.push("yu-gi-oh");
                break;
            case (x % 2 == 0 && x % 3 == 0):
                myArray.push("yu-gi");
                break;
            case (x % 2 == 0 && x % 5 == 0):
                myArray.push("yu-oh");
                break;
            case (x % 3 == 0 && x % 5 == 0):
                myArray.push("gi-oh");
                break;
            case (x % 2 == 0):
                myArray.push('yu');
                break;
            case (x % 3 == 0):
                myArray.push('gi');
                break;
            case (x % 5 == 0):
                myArray.push('oh');
                break;
            default:
                myArray.push(x);
                break;
        }
    }
    return myArray;
}
// calling myFunction.
console.log(myFunction(100));
console.log(myFunction(20));









//Second Answer
function yuGiOhReplacer(num) {
    let yuGiOh = [];
    for (let i = 1; i <= num; i++) {
        let temp = "";
        if (i % 2 === 0) {
            temp += "yu";
        }
        if (i % 3 === 0) {
            temp += temp !== "" ? "-gi" : "gi";
        }
        if (i % 5 === 0) {
            temp += temp !== "" ? "-oh" : "oh";
        }
        if (temp === "") {
            temp = i;
        }
        yuGiOh.push(temp);
    }
    console.log(yuGiOh);
    return yuGiOh;
}
yuGiOhReplacer(100);
yuGiOhReplacer(45);










//Third Answer
//StartNG JavaScript Task 3

function divisible(number) {
    let i;
    let divisibleNumber = []
    for (i = 1; i <= number; i++) {
        let string = i;        

        if (i % 2 == 0 && i % 3 == 0 && i % 5 == 0) {
            string = "yu" + "-" + "gi" + "-" + "oh"
        }
        else if (i % 3 == 0 && i % 5 == 0) {
            string = "gi" + "-" + "oh"
        }
        else if (i % 2 == 0 && i % 5 == 0) {
            string = "yu" + "-" + "oh"
        }
    
        else if (i % 2 == 0) {
            string = "yu"
        }
        else if (i % 3 == 0) {
            string = "gi"
        }
        else if (i % 5 == 0) {
            string = "oh"
        }
        else {
            string = i
        }
        divisibleNumber.push(string)
    }

    return divisibleNumber
}

const randomNumber = divisible(50)
console.log(randomNumber)


