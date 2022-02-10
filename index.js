const express = require('express')
const exphbs = require('express-handlebars')
const app = express()
const conn = require('./db/conn')

//Importação do modelo para drive de Sequelize.
const User = require('./models/User')

app.engine('handlebars', exphbs.engine())
app.set('view engine','handlebars')
app.use(express.static('public'))
app.use(express.urlencoded({extended: true}))
app.use(express.json())

//Coleta de dados do body para entidade User.
app.get('/users/create', (req, res) =>{
    res.render('adduser')
})
app.post('/users/create', (req, res) =>{
    const name = req.body.name
    const occupation = req.body.occupation
    let newsletter = req.body.newsletter

    if(newsletter === 'on'){
        newsletter = true
    }else{
        newsletter = false
    }

    User.create({name, occupation, newsletter})
    res.redirect('/')
})
//Renderização da home.
app.get('/', function(req, res){
    res.render('home')
})
conn
.sync()
.then(() =>{
    app.listen(3000)
}).catch((err) => console.log(err))