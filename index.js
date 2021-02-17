const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;


app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    const result = {name: 'jair', email: 'jair.andrad.filho@gmail.com'};
    return res.json(result);
});

app.post('/', (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    return res.json([email, name]);
});


app.listen(port, () => console.log(`Listening on port ${port}!`));