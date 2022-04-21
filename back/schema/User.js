const Users = {
    type: 'array',
    items: {
        type: 'object',
        properties: {
            id: {type: 'string'},
            firstname: {type: 'string'},
            lastname: {type: 'string'},
            email: {type: 'string'}
        }
    }
}

const User = {
    type: 'object',
    properties: {
        id: {type: 'string'},
        firstname: {type: 'string'},
        lastname: {type: 'string'},
        email: {type: 'string'}
    }
}

module.exports = { Users, User }