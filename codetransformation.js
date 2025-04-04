//I.1a
(age >= 18 && genAverage >= 83)  
  console.log("You may enter College, under BSCS Program");
    console.log("Both conditions may have not met and not allowed to enroll");
//I.1b
(subject === "DSA" && grade >= 80) ? console.log("You may enroll Application Development");
    (subject === "Math101" && grade <= 80) ? console.log("You may enroll Calculus");
    console.log("You have to enroll DSA and pass to enroll AD and Math101 and pass to enroll Calculus");
//I.2a
if(age >= 18) {
    console.log("You may now Register as a Voter for Elections 2025");
} else {
    console.log("You are too young register as a voter for Elections 2025");
}
//I.2b
if(genAverage >= 85) {
    console.log("You may enroll in all Course Programs");
} else if(genAverage < 85 && genAverage > 82) {
    console.log("You may enroll in any Course Program except in CTE, SCJE, CHS");
} else {
    console.log("You may enroll in any Course Program except CTE, SCJE, CHS, CCS");
}
//I.3a
let fname = "Jose Cruz";
let i = 0;
while (fname.length > i) {
    let c = 2 + i;
    let nLengthCounterTwo = fname.length - c;
    console.log(fname);
    console.log("Iterations Name was Printed: " + i);
    i++;
}


