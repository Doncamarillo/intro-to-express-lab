const express = require ('express')
const PORT = process.env.PORT || 3003

const app = express ()

app.listen (PORT, () => {
    console.log(`Express server listening on ${PORT}`)
})

app.get('/', (req,res) => {
    res.send ('EXPRESS LAB - DON CAMARILLO') 
})

//3. Be Polite, Greet the User

app.get('/greetings/:username',(req,res) => {
    res.send({
        msg: `Welcome Back ${req.params.username}!`
    })
})

//2. Rolling the Dice 

app.get('/roll/:number', (req, res) => {
    const param = req.params.number;


    const number = parseInt(param, 10);
    const outcome = Math.floor(Math.random() * (number + 1));

    res.send(`You rolled a ${outcome}.`);
});

//3. I Want That One!

app.get('/collectibles/:name', (req,res) => {
let name = req.params.name;

const collectibles = [
    { name: 'shiny ball', price: 5.95 },
    { name: 'autographed picture of a dog', price: 10 },
    { name: 'vintage 1970s yogurt SOLD AS-IS', price: 0.99 }
  ];

const collectible = collectibles.find(item => item.name === name)
    
    if (collectible) {
  res.send ({
    msg: `So, you want the ${req.params.name},which costs $${collectible.price}.`

    })}
 else {
    res.send ({
        error: `sorry, we don't have any ${req.params.name}s`
    })}
}
)

//4. Filter Shoes 
const shoes = [
    { name: "Birkenstocks", price: 50, type: "sandal" },
    { name: "Air Jordans", price: 500, type: "sneaker" },
    { name: "Air Mahomeses", price: 501, type: "sneaker" },
    { name: "Utility Boots", price: 20, type: "boot" },
    { name: "Velcro Sandals", price: 15, type: "sandal" },
    { name: "Jet Boots", price: 1000, type: "boot" },
    { name: "Fifty-Inch Heels", price: 175, type: "heel" }
];

app.get('/shoes', (req,res) => {
    const type = req.query.type;

    if (type){
        const shoeFilter = shoes.filter
        if (shoeFilter.length>0) {
            res.send(shoeFilter)
        }
    }
})

//general error message

app.get ('/*', (req,res) => {
    res.send ({
        error: '404 file not found'
    })
})