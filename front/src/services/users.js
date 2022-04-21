const axios = require('axios').default

export function getUsers() { // requete GET pour récupérer tous les utilisateurs
    return axios.get('http://localhost:4000/api/users')
                .then(function (response) {
                    return response.data
                })
                .catch(function (error) {
                    return false
                })

}

export function delUser(id) { // requete DELETE pour supprimer un utilisateur en fonction de son ID
    return axios.delete('http://localhost:4000/api/user/' + id)
                .then(function (response) {
                    return true
                })
                .catch(function (error) {
                    return false
                })
}

export function postUser(content) { // requete POST pour ajouter un nouvel utilisateur
    return axios.post('http://localhost:4000/api/user', content)
                .then(function (response) {
                    return true
                })
                .catch(function (error) {
                    return false
                })
}

export function editUser(content, id) { // requete PUT pour éditer un utilisateur en fonction de son id
    return axios.put('http://localhost:4000/api/user/' + id, content)
                .then(function (response) {
                    return true
                })
                .catch(function (error) {
                    return false
                })
}