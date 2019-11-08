const express = require('express')
const bodyparser = require('body-parser')
const app = express()

const todos = require('./models').todos
const category = require('./models').category

app.use(bodyparser.json())

app.get('/',(req, res)=>{
    res.send('hello')
})

app.get('/todos',(req, res)=>{
    todos.findAll()
    .then(function(result){
        res.send(result)
    })
})
app.post('/todos',(req, res)=>{
    todos.create({
        ...req.body
    })
    .then(function(result){
        res.send(result)
    })
})
app.patch('/todo/:id',(req, res)=>{
    const id = req.params.id
    todos.update({
        ...req.body
    },
    {
        where: {id}
    })
    .then(function(result){
        res.send({
            message: 'Update Done'
        })
    })
})
app.patch('/todo/checked/:id',(req, res)=>{
    const id = req.params.id
    todos.update({
        isDone: req.body.isDone
    },
    {
        where: {id}
    })
    .then(function(result){
        res.send({
            message: 'Update Done'
        })
    })
})
app.delete('/todo/:id', (req, res)=>{
    todos.destroy({
        where: {id: req.params.id}
    })
    .then(function(result){
        res.send({
            message: 'Delete Success'
        })
    })
})

app.listen(process.env.PORT || 3000, function () {
    console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});