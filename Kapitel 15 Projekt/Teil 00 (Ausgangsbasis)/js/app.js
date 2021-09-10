'use strict';

const KEY_ENTER = 13

/*
    < li >
		<div class="view">
            <input class="toggle" type="checkbox">
            <label>Buy a unicorn</label>
            <button class="destroy"></button>
        </div>
    </>
*/


document.addEventListener("DOMContentLoaded", () => {
    const newTodoElement = document.querySelector(".new-todo")
    const todoListElement = document.querySelector(".todo-list")
    const footerElement = document.querySelector(".footer")
    const todoCountElement = document.querySelector(".todo-count strong")

    const refreshFooter = () => {
        if (todoListElement.children.length === 0) {
            console.log(footerElement)
            footerElement.style.display = "none"
        } else {
            footerElement.style.display = ""
        }

        let todoCounter = 0
        for (const todoListItem of todoListElement.children) {
            if (!todoListItem.classList.contains("completed")) {
                todoCounter++
            }
        }
        todoCountElement.innerText = todoCounter
    }
    refreshFooter()

    const addCallbacksForLi = (liElement) => {
        const checkBoxElement = liElement.querySelector(".toggle")
        const destroyButtonElement = liElement.querySelector(".destroy")

        checkBoxElement.addEventListener("change", () => {
            if (checkBoxElement.checked) {
                liElement.classList.add("completed")
            } else {
                liElement.classList.remove("completed")
            }
            console.log("changed!")
            refreshFooter()
        })

        destroyButtonElement.addEventListener("click", () => {
            liElement.remove()
            refreshFooter()
        })
    }

    newTodoElement.addEventListener("keypress", event => {
        if (event.which === KEY_ENTER && newTodoElement.value !== "") {
            const newButtonElement = document.createElement("button")
            newButtonElement.classList.add("destroy")

            const newLabelElement = document.createElement("label")
            newLabelElement.appendChild(
                document.createTextNode(newTodoElement.value)
            )

            const newInputElement = document.createElement("input")
            newInputElement.type = "checkbox"
            newInputElement.classList.add("toggle")

            const newDivElement = document.createElement("div")
            newDivElement.classList.add("view")
            newDivElement.appendChild(newInputElement)
            newDivElement.appendChild(newLabelElement)
            newDivElement.appendChild(newButtonElement)

            const newLiElement = document.createElement("li")
            newLiElement.appendChild(newDivElement)

            addCallbacksForLi(newLiElement)

            todoListElement.prepend(newLiElement)

            newTodoElement.value = ""

            refreshFooter()
        }
    })
})
