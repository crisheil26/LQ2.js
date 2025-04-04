// Collecting user input
let name = prompt("Enter your Name:");
let address = prompt("Enter your Address:");
let age = parseInt(prompt("Enter your Age:"));
let classRole = prompt("Enter your Class Role (Officer, Student, Teacher):");
let course = prompt("Enter your Course (BSCS, BSM, BAEL):");

// Conditional Statement to check Course and Class Role
if (course === "BSCS") {
    if (classRole === "Officer") {
        alert(name + " is a BSCS Officer.");
        for (let i = 0; i < (age / 4); i++) {
            console.log(name);
        }
    } else if (classRole === "Student") {
        alert(name + " is a BSCS Student.");
        for (let i = 0; i < (age / 4); i++) {
            console.log(name);
        }
    } else if (classRole === "Teacher") {
        alert(name + " is a BSCS Teacher.");
        for (let i = 0; i < (age / 4); i++) {
            console.log(name);
        }
    } else {
        alert(name + " has an unknown class role for BSCS.");
        for (let i = 0; i < (age / 4); i++) {
            console.log(name);
        }
    }
} else if (course === "BSM") {
    if (classRole === "Officer") {
        alert(name + " is a BSM Officer.");
        for (let i = 0; i < (age / 4); i++) {
            console.log(name);
        }
    } else if (classRole === "Student") {
        alert(name + " is a BSM Student.");
        for (let i = 0; i < (age / 4); i++) {
            console.log(name);
        }
    } else if (classRole === "Teacher") {
        alert(name + " is a BSM Teacher.");
        for (let i = 0; i < (age / 4); i++) {
            console.log(name);
        }
    } else {
        alert(name + " has an unknown class role for BSM.");
        for (let i = 0; i < (age / 4); i++) {
            console.log(name);
        }
    }
} else if (course === "BAEL") {
    if (classRole === "Officer") {
        alert(name + " is a BAEL Officer.");
        for (let i = 0; i < (age / 4); i++) {
            console.log(name);
        }
    } else if (classRole === "Student") {
        alert(name + " is a BAEL Student.");
        for (let i = 0; i < (age / 4); i++) {
            console.log(name);
        }
    } else if (classRole === "Teacher") {
        alert(name + " is a BAEL Teacher.");
        for (let i = 0; i < (age / 4); i++) {
            console.log(name);
        }
    } else {
        alert(name + " has an unknown class role for BAEL.");
        for (let i = 0; i < (age / 4); i++) {
            console.log(name);
        }
    }
} else {
    alert("The course you entered is not recognized.");
}

// Display the final information
alert("Name: " + name + "\nAddress: " + address + "\nAge: " + age + "\nCourse: " + course + "\nClass Role: " + classRole);
