import React, {useState, createContext, useEffect} from 'react'
import { getUsers, delUser, postUser, editUser } from '../services/users'
export const UserContext = createContext()

const UserContextProvider = props => {

    const [usersList, setUsersList] = useState([])

    useEffect(() => { // on récupère notre liste d'utilisateur au lancement de l'app
        async function getInfo() {
            const result = await getUsers() // on fait la requete api pour récupérer nos données utilisateurs
            if(!result) {
              console.log('erreur')
            }
            else {
                setUsersList(result) // si il n'y a pas d'erreurs on mets à jour notre state en lui passant les données récupérer depuis le back
            }
          }
          getInfo()
    }, [])

    const handleDelete = (id) => { // function asynchrone pour supprimer un utilisateur
        async function awaitDelUser() {
          const result = await delUser(id) // on fait la requete vers l'api pour delete notre utilisateur
          if(!result) {
            console.log('erreur')
          }else {
            let newArray = [...usersList]
            let findUser = newArray.findIndex(p => p.id === id)
            newArray.splice(findUser, 1)
            setUsersList(newArray) // on mets à jour notre state en suppriment l'utilisateur
          }
        }
        awaitDelUser()
      }

      const handleSubmit = (form) => { // validation et ajout de notre utilisateur
        if(form.firstname && form.lastname && form.email) {
          async function awaitPostUser() {
            const result = await postUser(form) // requete vers notre service api
            if(!result) {
              console.log('erreur')
            }
            else {
              let newArray = [...usersList]
              newArray.unshift(form)
              setUsersList(newArray) // on mets à jour notre list avec les nouvelles données
            }
          }
          awaitPostUser()
        } 
      }

      const handleEdit = (form) => { // fonction lorsqu'on édit un utilisateur
        if(form.firstname && form.lastname && form.email) {
          async function awaitEditUser() {
            const result = await editUser(form, form.id) // requete vers notre service api
            if(!result) {
              console.log('erreur')
            } else {
              let newArray = [...usersList]
              let findUser = newArray.findIndex(p => p.id === form.id) // on cherche l'utilisteur dans notre tableau
              newArray[findUser] = form // on mets à jour les données de l'utilisateur
              setUsersList(newArray) // on mets à jour notre state
            }
          }
          awaitEditUser()
        }
      }
      
      const orderArray = () => { // fonction pour ranger par ordre alphabétique notre tableau d'utilisateurs
        let newArray = [...usersList]
        newArray.sort(function (a,b) { // on utilise la méthode sort avec une fonction qui va ns permettre de comparer les noms de familles
          if(a.lastname.toLowerCase() < b.lastname.toLowerCase()) return -1
          if(a.lastname.toLowerCase() > b.lastname.toLowerCase()) return 1
          return 0
        })
        setUsersList(newArray) // on mets à jour notre state
      }

    return(
        <UserContext.Provider value={{handleDelete, orderArray, handleEdit, handleSubmit, usersList}}>
            {props.children}
        </UserContext.Provider>
    )
}

export default UserContextProvider