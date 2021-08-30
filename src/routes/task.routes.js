const express = require('express')
const Task = require('../models/task.models')
const auth = require('../middlewares/auth')
const router = new express.Router


// Task Routes

// GET /tasks?completed
// GET /tasks?limit=2&skip=2
// GET /tasks?sortBy=createdAt:desc
router.post('/tasks', auth, async (req, res) => {
    const task = new Task({
        ...req.body,
        owner: req.user._id
    })

    try {
        await task.save()
        res
        .status(201)
        .send(task)
    } catch (e) {
        res
        .status(400)
        .send(e)
    }

})

router.get('/tasks', auth, async (req, res) => {
    const match = {}
    const sort = {}

    if (req.query.completed) {
        match.completed = req.query.completed === 'true'
    }

    if (req.query.sortBy) {
        const parts = req.query.sortBy.split(':')
        sort[parts[0]] = parts[1] === 'desc' ? -1 : 1
    }

    try {
        // const tasks = await Task.find({ owner: req.user._id }) // alternative way
        await req.user.populate({
            path: 'tasks',
            match,
            options: {
                limit: parseInt(req.query.limit),
                skip: parseInt(req.query.skip),
                sort
            }
        }).execPopulate()

        res
        .status(200)
        .send(req.user.tasks)
        // .send(tasks) // alternative way
    } catch (e) {
        res
        .status(500)
        .send(e)
    }

})

router.get('/tasks/:id', auth, async (req, res) => {
    const _id = req.params.id

    try {
        const task = await Task.findOne({ _id, owner: req.user._id })


        if (!task) {
            return res
            .status(404)
            .send('Nothing here.')
        }
        res
        .status(200)
        .send(task)
    } catch (e) {
        res
        .status(500)
        .send(e)
    }

})

router.patch('/tasks/:id', auth, async (req, res) => {
    const _id = req.params.id
    const taskUpdates = Object.keys(req.body)
    const taskAllowedUpdates = ['description', 'completed']
    const isValidOperation = taskUpdates.every((taskUpdate) => taskAllowedUpdates.includes(taskUpdate))

    if (!isValidOperation)  {
        return res
        .status(400)
        .send({ error: "Invalid task update!"})
    }

    try {
        const task = await Task.findOne({ _id, owner: req.user._id})

        if(!task) {
            return res
            .status(404)
            .send('Nothing here.')
        }

        taskUpdates.forEach((taskUpdate) => task[taskUpdate] = req.body[taskUpdate])
        await task.save()

        res
        .status(200)
        .send(task)

    } catch (e) {
        res
        .status(400)
        .send(e)
    }
})

router.delete('/tasks/:id', auth, async (req, res) => {
    const _id = req.params.id

    try {
        const task = await Task.findOneAndDelete({ _id, owner: req.user._id})
        if (!task) {
            return res
            .status(404)
            .send('Nothing here.')
        }

        res
        .status(200)
        .send('Task deleted successfully!')

    } catch (e) {
        res
        .status(400)
        .send(e)
    }
})

module.exports = router