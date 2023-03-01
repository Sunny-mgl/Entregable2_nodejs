const { Router } = require('express')
const ToDo = require('../models/todo')

const router = Router()

router.get('/api/v1/todos', async (req, res) => {
    try {
        const todo = await ToDo.findAll({
            attributes: ["id", "title", "description", "statu"]
        })
        res.json(todo)
    } catch (error) {
        res.status(400).json(error)
    }
})


router.post('/api/v1/todos', async (req, res) => {
    try {
        const createTodo = req.body
        const todos = await ToDo.create(createTodo)
        res.status(201).send(todos)
    } catch (error) {
        res.status(400).json(error)
    }
})

router.put('/api/v1/todos/:id', async (req, res) => {
    try {
        const {id} = req.params
        const bodys = req.body
        const todos = await ToDo.update(bodys, {
            where:{
                id
            }
        })
        res.status(204).send()
    } catch (error) {
        res.status(400).json(error)
    }
})

router.delete('/api/v1/todos/:id', async (req, res) => {
    try {
       const {id} = req.params
       const todos = await ToDo.destroy({
        where:{id} //id:id
       })
    res.status(204).send()
    } catch (error) {
        res.status(400).json(error)
    }
})

module.exports = router