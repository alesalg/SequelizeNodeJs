const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('nodesequelize','root', '123456',{
    host:'localhost',
    dialect: 'mysql'
})

try{
    sequelize.authenticate()
    console.log('Banco de dados conectado via ORM Sequelize')
}catch(err){
    console.log('Não houve como conectar', err)
}

module.exports = sequelize