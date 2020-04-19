//StartNG JavaScript Task 3

function divisible(number) {
    let i;
    let divisibleNumber = [];
    for (let i = 1; i <= number; i++) {
        let string = i;        

        if (i%2 == 0) {
            string = "yu"
        } 
        else if (i % 3 == 0 && i % 5 == 0) {
            string = "gi" + "-" + "oh"
        }
        else if (i % 2 == 0 && i % 5 == 0) {
            string = "yu" + "-" + "oh"
        }
        else if (i % 2 == 0) {
            string = "yu";
        }
        else if (i % 3 == 0) {
            string = "gi";
        }
        else if (i % 3 == 0) {
            string = "oh";
        }
        else {
            string = i;
        }
        divisibleNumber.push(string)
    }

    return divisibleNumber;
}

const lastResult =divisible(20);
console.log(lastResult);