const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json())

const port = process.emitWarning.PORT || 5000;

const users = [
    {
        id: 0,
        name: "Tamim",
        age: 34,
        email: "Tamim@email.com",
        phone: "017*******"
    },
    {
        id: 1,
        name: "Shakib",
        age: 33,
        email: "Shakib@email.com",
        phone: "017*******"
    },
    {
        id: 2,
        name: "Mushfiq",
        age: 35,
        email: "Mushfiq@email.com",
        phone: "017*******"
    },
    {
        id: 3,
        name: "Mahmudullah",
        age: 36,
        email: "Mahmudullah@email.com",
        phone: "017*******"
    },
    {
        id: 4,
        name: "Mash",
        age: 38,
        email: "Mash@email.com",
        phone: "017*******"
    }
]

app.get('/', (req, res) => {
    res.send('Hello World! how are you');
});

app.get('/users', (req, res) => {
    const search = req.query.search;
    if (search) {
        const searchResult = users.filter(user => user.name.toLocaleLowerCase().includes(search));
        res.send(searchResult)
    }
    else {
        res.send(users);
    }
});

app.post('/users', (req, res) => {
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser);
    console.log('hitting the post', req.body);
    res.json(newUser);
})

app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    res.send(users[id])
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});