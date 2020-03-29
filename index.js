const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('<h1>Hello Awais!</h1>'))
app.get('/work', (req, res) => res.send('<h1>Hello Work!</h1>'))
app.get('/get_todo_list', (req, res) => {

    let data = [
        {
            data: 'Pick milk from shop.', date_time: '10 minutes ago'
        },
        {
            data: 'Go to school.', date_time: '2 minutes ago'
        },
        {
            data: 'Go to the gym.', date_time: '1 minutes ago'
        }

    ];

    res.send(data);



})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))