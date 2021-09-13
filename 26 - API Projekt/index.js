"use strict"

// loading axios module
const axios = require("axios")

let url =
    "https://api.nal.usda.gov/fdc/v1/foods/search?api_key=rbPh1DHMesLmpbAVm9hdDyjJGyxfT2fRKqpqcqQX&query=Apple"

axios.get(url)
    .then((response) => {
        console.log(response)
        for(const food of response.data.foods)
    })

