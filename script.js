let person = {
    personName: "Aleem Khan",
    age: 30,
    hobbies: "music, movies, sports",
    address: {
        country: "Pakistan",
        province: "Punjab",
        city: "Rawalpindi"
    },
    isMarried: false
}
//add a property in object
person.email = "person@gmail.com";

document.write(`Person Name: ${person.personName} <br>`);
document.write(`Person Age: ${person.age} <br>`);
document.write(`Person Hobbies: ${person.hobbies} <br>`);
document.write(`Person Country: ${person.address.country} <br>`);
document.write(`Marital Status: ${person.isMarried} <br>`);
document.write(`Added property: ${person.email} <br>`);
document.write("<hr><br>");
// ______________________________________________________________

const todos = [
    {
        id: 1,
        task: "Take out trash",
        isCompleted: true
    },
    {
        id: 2,
        task: "Meeting with boss",
        isCompleted: true
    },
    {
        id: 3,
        task: "Visit doctor",
        isCompleted: false
    }
];

document.write("COMPLETED TASKS<BR>");
document.write("------------------------------<BR>");
todos.forEach(element => {
    if (element.isCompleted) {
        document.write(`ID: ${element.id} <br>`);
        document.write(`TASK: ${element.task} <br>`);
        document.write(`STATUS: ${element.isCompleted} <br>`);
        document.write("<br>")
    }
});
document.write("<hr><br>")
// ______________________________________________________________

//new array from todos array consisting only on todos.task
let todosTasks = todos.map(function (todo) {
    return todo.task;
})
document.write(`Tasks array from todos:<br> ${todosTasks} <br>`);
todosTasks.forEach(element => {
    document.write(`Task: ${element}<br>`);
})
document.write("<hr><br>")
// ______________________________________________________________

//to send/recieve data to/from server
let todosJSON = JSON.stringify(todos);
document.write(todosJSON);
// ______________________________________________________________

