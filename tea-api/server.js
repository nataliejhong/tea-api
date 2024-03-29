const express = require('express')
const app = express()
const PORT = 8000
const cors = require('cors')

app.use(cors())

const tea = {
    'oolong': {
        'type': 'black',
        'origin': 'Yo mommas HOuse',
        'waterTemp': 200,
        'steepTimeSeconds': 180,
        'caffeinated': true,
        'flavor': 'delicious' 
    },
    'matcha': {
        'type': 'green',
        'origin': 'Yo mommas HOuse',
        'waterTemp': 200,
        'steepTimeSeconds': 180,
        'caffeinated': false,
        'flavor': 'delicious' 
    },
    'unknown': {
        'type': 'unknown',
        'origin': 'unknown',
        'waterTemp': 0,
        'steepTimeSeconds': 0,
        'caffeinated': false,
        'flavor': 'unknown' 
    }

}

app.get('/', (request, response) =>{
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:name', (request, response) => {
    const teaName = request.params.name.toLowerCase()
    if(tea[teaName]){
        response.json(tea[teaName])
    } else{
        response.json(tea['unknown'])
    }
    response.json(tea)
})

app.listen(process.env.PORT || PORT, () => {
    console.log(`The server is running on port ${PORT}! Betta Go Catch It!`)
})