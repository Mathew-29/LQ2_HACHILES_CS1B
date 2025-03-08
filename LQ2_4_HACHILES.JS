let createMatrix = prompt("Do you want to create a Matrix? (true/false)");

if (createMatrix.toLowerCase() === "true") {
    let limit1 = Number(prompt("Enter the limit for the first loop:"));
    let limit2 = Number(prompt("Enter the limit for the second loop:"));
    let limit3 = Number(prompt("Enter the limit for the third loop:"));

    let string1 = prompt("Enter the first string:");
    let string2 = prompt("Enter the second string:");
    let string3 = prompt("Enter the third string:");

    for (let i = 0; i < limit1; i++) {
        for (let j = 0; j < limit2; j++) {
            for (let k = 0; k < limit3; k++) {
                console.log(string1 + " " + string2 + " " + string3);
            }
        }
    }
} else {
    console.log("Thank you, re-run the program if you change your mind.");
}
