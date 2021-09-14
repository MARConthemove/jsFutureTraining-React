"use strict"

function runCallback(cb) {
    cb()
}

const data = {
    todos: ["Javascript lernen", "Node.js lernen"],
    addTodo: function(todo) {
        runCallback(() => {
            // this geht innerhalb der Callback Funktion verloren!
            this.todos.push(todo)
        })
    }
}

data.addTodo("3. Todo")
console.log(data)


// const printStudentName = function() {
//     console.log(this.lastname + ", " + this.firstname)
// }

// const students = [
//     {
//         firstname: "Max",
//         lastname: "Mustermann",
//         printName: printStudentName
//     },
//     {
//         firstname: "Erika",
//         lastname: "Mustermann",
//         printName: printStudentName
//     }
// ]

// students[0].printName()
// students[1].printName()

