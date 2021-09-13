"use strict"

// Konzept: LIVE Selectoren

const on = (selector, eventType, cb) => {
    document.addEventListener(eventType, (event) => {
        let element = event.target

        while (element) {
            if (element.matches(selector)) {
                return cb({
                    handleOjb: element,
                    orginalElement: event
                })
            }
            element = element.parentElement
        }
    })
}

window.addEventListener('DOMContentLoaded', () => {
    on(".close", "click", (event) => {
        console.log("event:", event)
    })
})
