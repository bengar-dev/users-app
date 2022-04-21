const data = require('../data/user')

const getUsers = (req, res, next) => {
    res.send(data)
}

const getUser = (req, res, next) => {
    const findUser = data.find(p => p.id === req.params.id)
    res.send(findUser)
}

const postUser = (req, res, next) => {
    data.push(req.body)
    res.send('User add')
}

const editUser = (req, res, next) => {
    const findUser = data.findIndex(p => p.id === req.params.id)
    if(findUser === -1) {
        res.send('User not found')
    } else {
        data[findUser] = {...req.body}
        res.send('User edit')
    }
}

const deleteUser = (req, res, next) => {
    const findUser = data.findIndex(p => p.id === req.params.id)
    if(findUser === -1) {
        res.send('User not found')
    } else {
        data.splice(findUser, 1)
        res.send('User deleted')
    }
}

module.exports = {
    getUsers,
    getUser,
    postUser,
    editUser,
    deleteUser
}