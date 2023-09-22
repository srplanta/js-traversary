// let person = {
//     personName: "Aleem Khan",
//     age: 30,
//     hobbies: "music, movies, sports",
//     address: {
//         country: "Pakistan",
//         province: "Punjab",
//         city: "Rawalpindi"
//     },
//     isMarried: false
// }
// //add a property in object
// person.email = "person@gmail.com";

// document.write(`Person Name: ${person.personName} <br>`);
// document.write(`Person Age: ${person.age} <br>`);
// document.write(`Person Hobbies: ${person.hobbies} <br>`);
// document.write(`Person Country: ${person.address.country} <br>`);
// document.write(`Marital Status: ${person.isMarried} <br>`);
// document.write(`Added property: ${person.email} <br>`);
// document.write("<hr><br>");
// // ______________________________________________________________
// //declare array object literal
// const todos = [
//     {
//         id: 1,
//         task: "Take out trash",
//         isCompleted: true
//     },
//     {
//         id: 2,
//         task: "Meeting with boss",
//         isCompleted: true
//     },
//     {
//         id: 3,
//         task: "Visit doctor",
//         isCompleted: false
//     }
// ];

// // ******************************
// //      TRAVERSING THE ARRAY
// // ******************************
// //Method-1 : for Loop
// document.write("ARRAY TRAVERSAL BY SIMPLE (for) LOOP<BR>");
// document.write("-------------------------------");
// document.write("-------------------------------<BR>");
// document.write("COMPLETED TASKS<BR>");
// document.write("------------------------------<BR>");
// for (let i = 0; i < todos.length; i++) {
//     if (todos[i].isCompleted) {
//         document.write(`ID: ${todos[i].id} <br>`);
//         document.write(`TASK: ${todos[i].task} <br>`);
//         document.write(`STATUS: ${todos[i].isCompleted} <br>`);
//         document.write("<br>")
//     }
// }
// document.write("<hr><br>");

// // ______________________________________________________________
// //Method-1 : forEach Loop
// document.write("ARRAY TRAVERSAL BY (forEach) LOOP<BR>");
// document.write("-------------------------------");
// document.write("-------------------------------<BR>");
// document.write("COMPLETED TASKS<BR>");
// document.write("------------------------------<BR>");
// todos.forEach(element => {
//     if (element.isCompleted) {
//         document.write(`ID: ${element.id} <br>`);
//         document.write(`TASK: ${element.task} <br>`);
//         document.write(`STATUS: ${element.isCompleted} <br>`);
//         document.write("<br>")
//     }
// });
// document.write("<hr><br>");
// // ______________________________________________________________

// //extract new array from todos array consisting of only todos.task
// let todosTasks = todos.map(function (todo) {
//     return todo.task;
// })
// document.write("Todos completed taskes extracted in new array  from todos with (map function).<br>");
// document.write("---------------------------------");
// document.write("---------------------------------<br>");
// document.write(`Tasks array from todosTasks array:<br> ${todosTasks} <br>`);
// todosTasks.forEach(element => {
//     document.write(`Task: ${element}<br>`);
// })
// document.write("<hr><br>")
// // ______________________________________________________________

// //Extracting todos completed tasks by applying filter
// // let completedTasks = todos.filter(todo => {
// //     return todo.isCompleted;
// // })
// let completedTasks = todos.filter(todo => todo.isCompleted);
// document.write(`data type of completed tasks: ${completedTasks}<br>`);
// completedTasks.forEach(task => {
//     document.write(`id: ${task.id}<br>`);
//     document.write(`task: ${task.task}<br>`);
//     document.write(`status: ${task.isCompleted}<br>`);
// });
// // ______________________________________________________________

// //to send/recieve data to/from server
// let todosJSON = JSON.stringify(todos);
// document.write(todosJSON);
// // ______________________________________________________________

// ***************************************************************
//                  SIMPLE PROGRAMMING CONSTRUCTS
// ***************************************************************
let x = 10;
// let x = window.prompt("Enter any number");
if (x > 10) {
    document.write("x is greater than 10<br>");
} else if (x < 10) {
    document.write("x less than 10<br>");
} else {
    document.write("x is equal to 10<br>");
}
document.write("<hr><br>");

// --------------- SWITCH STATEMENT ---------------
let color = x >= 10 ? "red" : "green";
switch (color) {
    case "red":
        document.write("color is RED<br>");
        break;

    case "green":
        document.write("color is GREEN<br>");
        break;

    default:
        document.write("color is neither RED nor GREEN<br>");
        break;
}
document.write("<hr><br>");

// --------------- FUNCTIONS ---------------
// const AddNums = (num1 = 0, num2 = 0) => {
//     return num1 + num2;
// }
//below one is even better approach
const AddNums = (num1 = 0, num2 = 0) => num1 + num2;

document.write(AddNums(34, 23));
document.write("<hr><br>");

// ***************************************************************
//                  CLASSES IN JAVASCRIPT
// ***************************************************************
class Person {
    constructor(firstName, lastName, dob) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.dob = new Date(dob);
    }

    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    getBirthYear() {
        return this.dob.getFullYear();
    }
}

const person1 = new Person("Jon", "Doe", "3-5-1995");
document.write(person1.getFullName());

function SubmitForm() {
    let studentNameMsg = document.getElementById("studentName").innerHTML;
    if (studentNameMsg === "") {
        // document.getElementById("studentName").style.display = "block";
        document.getElementById("studentNameMsg").innerHTML = "Enter name plz";
    }
}

