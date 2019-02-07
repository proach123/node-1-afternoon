const express = require('express');
const bodyParser = require('body-parser');
const controlla = require('./controlla/messages_controlla');
const messageURL = "/api/messages"
const app = express();

app.use( bodyParser.json());
app.use( express.static( __dirname + '/../public/build' ) );


app.post(messageURL,controlla.create);
app.get(messageURL,controlla.read)
app.put(`${messageURL}/:id`,controlla.update)
app.delete(`${messageURL}/:id`,controlla.delete)





const port = 3001;


app.listen(port, () =>{console.log(`I read you loud and clear David Bowie from your nipple antena on channel ${port}`)} )