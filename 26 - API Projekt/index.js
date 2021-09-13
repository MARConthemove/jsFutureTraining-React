"use strict"

// loading axios module
const axios = require("axios")

let url = "https://api.nal.usda.gov/fdc/v1/foods/search"

const searchFood = (term) => {
    return axios
        .get(url, {
            params: {
                api_key: "rbPh1DHMesLmpbAVm9hdDyjJGyxfT2fRKqpqcqQX",
                query: term,
            },
        })
        .then((response) => {
            return response.data['foods']
        })
}

searchFood("Apple, raw").then((response) => {
    console.log(response)
})
