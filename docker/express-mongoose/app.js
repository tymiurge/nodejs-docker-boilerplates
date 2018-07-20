var express = require('express')
var app = express();

var mongoose = require('mongoose');

var bodyParser = require('body-parser');
var PORT = 3000;

// Schemas

const CardSchema = new mongoose.Schema({
    type: String,
    front: String,
    back: String
})

const CardModel = mongoose.model('Card', CardSchema)

// REQUIRE MIDDLEWARE

mongoose.connect('mongodb://database:27017/db1')
    .then(() => console.log('!!! connection established !!!'))
    .catch(e => console.log(e));

var options = { //specify options
    host: `localhost:${PORT}`
}

//USE AS MIDDLEWARE
app.use(bodyParser.json()); // add body parser

app.get('/entry', (req, res) => {
    res.send('this is an entry 111')
    console.log('!!! entry !!!')
})

const Cat = mongoose.model('Cat', { name: String })
app.get('/saver', (req, res) => {
    //new Thread({title: req.body.title, author: req.body.author}).save();
    console.log('!!! looking for a cat !!!')
    const k = new Cat({name: 'Zildjian'})
    k.save().then(() => console.log('meow'))
        //new CardModel({type: 'simple', front: 'crank', back: 'crank1'}).save()
        //.then(() => res.send('ok'))
        //.catch(e => res.send(e))
})




app.listen(PORT, ()=>{
    console.log('started');
});
