const {getUsers, getUser, postUser, editUser, deleteUser} = require('../controllers/userCtrl')
const {Users, User} = require('../schema/User')

const getUsersOpts = {
    schema: {
        response: {
            200: Users
        },
    },
    handler: getUsers
}

const getUserOpts = {
    schema: {
        response: {
            200: User
        },
    },
    handler: getUser
}

const postUserOpts = {
    schema: {
        response: {
            200: User
        },
    },
    handler: postUser
}

const editUserOpts = {
    schema: {
        response: {
            200: User
        },
    },
    handler: editUser
}

const deleteUserOpts = {
    schema: {
        response: {
            200: User
        },
    },
    handler: deleteUser
}


function userRoutes (fastify, options, done) {
    fastify.get('/api/users', getUsersOpts)
    fastify.get('/api/user/:id', getUserOpts)
    fastify.post('/api/user', postUserOpts)
    fastify.put('/api/user/:id', editUserOpts)
    fastify.delete('/api/user/:id', deleteUserOpts)
    done()
}

module.exports = userRoutes