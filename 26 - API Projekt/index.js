"use strict"

// loading axios module
const axios = require("axios")

let url = "https://api.nal.usda.gov/fdc/v1/foods/search"

axios
    .get(url, {
        params: {
            api_key: "rbPh1DHMesLmpbAVm9hdDyjJGyxfT2fRKqpqcqQX",
            query: "apple juice",
        },
    })
    .then((response) => {
        // console.log(response)
        for (const food of response.data.foods) {
            console.log(food["fdcId"] + ": " + food["description"])
        }
    })
