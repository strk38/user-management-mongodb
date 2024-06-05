const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json())

const users = [
    { id: 1, name: 'Sarah', email: 'sarah@mail.com' },
    { id: 2, name: 'Srk', email: 'srk@mail.com' },
    { id: 3, name: 'Harry', email: 'harry@mail.com' }
]

app.get('/', (req, res) => {
    res.send('Users Management server is running')
})

app.get('/users', (req, res) => {
    res.send(users)
})
app.post('/users', (req, res) => {
    console.log('Post API hitting');
    console.log(req.body);  //shows the data passed from form (post)

    const newUser = req.body;
    newUser.id = users.length + 1;
    users.push(newUser);
    res.send(newUser);
})

app.listen(port, () => {
    console.log(`Server is tunning on PORT: ${port}`)
})