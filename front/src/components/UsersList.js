import React, {useState, useContext, useRef} from 'react'
import { Link } from 'react-router-dom';
import { UserContext } from '../context/UserContext'

import ModalEditUser from "../components/ModalEditUser";

export default function UsersList() {

  const {usersList, handleDelete, orderArray} = useContext(UserContext) // notre state qui va récupérer la liste de nos utilisateurs

  const [toggle, setToggle] = useState(false) // state qui va nous permettre de toggle la modal éditer utilisateur

  const handleToggle = () => {
    setToggle(!toggle)
  }

  const handleArray = () => {
    orderArray()
  }

  return (
    <div className='mt-10 p-2 bg-slate-800 flex flex-col space-y-2'>
        {usersList.length > 0 && <button 
        onClick={(e) => e.preventDefault(handleArray())}
        className='transition-all duration-200 p-1 bg-purple-400 hover:bg-purple-500 text-sm rounded'>Trier par ordre Alphabétique (nom)</button>}
        {usersList.length > 0 ? // on vérifie si le tableau n'est pas vide
       usersList.map(item => 
        <div key={item.id} className='border border-sky-300 bg-slate-900 text-white font-medium p-2 flex justify-between'>
          <div className='flex items-center space-x-4'>
            <p>{item.lastname} {item.firstname}</p>
            <p className='text-sky-300 text-sm'>{item.email}</p>
          </div>
          <div className='flex space-x-2 text-xs'>
            <Link
            to={'/edit-user/' + item.id}
            className='text-orange-400'>Editer</Link>
            <button 
            onClick={(e) => e.preventDefault(handleDelete(item.id))} 
            className='text-red-400'>Supprimer</button>
          </div>
          {toggle && 
          <ModalEditUser
          id={item.id}
          firstname={item.firstname}
          lastname={item.lastname}
          email={item.email} 
          toggle={handleToggle}/>}
        </div>
        ) 
      : // si le tableau est vide on affiche un message comme quoi il n'existe aucun utilisateur
      <p className='text-sky-300 text-center'>Aucun utilisateur</p>
      }

    </div>
  )
}
