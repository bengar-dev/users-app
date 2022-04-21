import React, {useState, useContext} from 'react'
import {v4 as uuidv4} from 'uuid'
import { UserContext } from '../context/UserContext'

export default function AddUser() {


  const {handleSubmit} = useContext(UserContext)

    const [toggle, setToggle] = useState(false)
    const [form, setForm] = useState({
      id: uuidv4(),
      firstname: '',
      lastname: '',
      email: ''
    })

    const handleToggle = (e) => { // fonction pour afficher/cacher notre formulaire
        e.preventDefault()
        setToggle(!toggle)
    }

    const handleInput = (e) => { // fonction pour gérer le state de notre formulaire
      if(e.target.id === 'firstname') {
        setForm({
          ...form,
          firstname: e.target.value
        })
      } else if (e.target.id === 'lastname') {
        setForm({
          ...form,
          lastname: e.target.value
        })
      } else if (e.target.id === 'email') {
        setForm({
          ...form,
          email: e.target.value
        })
      }
    }

    const verifSubmit = () => { // si on envoie les données
      handleSubmit(form) // on fait la requete qui va gérer l'envoi vers notre API + la mise à jour de notre state users list
      setForm({ // on vide notre form
        id: uuidv4(),
        firstname: '',
        lastname: '',
        email: ''
      })
      setToggle(!toggle) // on cache le formulaire
    }

  return (
    <div className='relative mt-6 p-2'>
        <button onClick={(e) => handleToggle(e)} className='absolute right-10 z-10 text-white hover:text-sky-400'>Ajouter un utilisateur</button>
            {toggle && 
            <form className='mt-10 relative p-2 bg-slate-800 rounded flex flex-col text-sky-300 text-sm'>
                <label htmlFor='firstname' className='p-1'>Prénom</label>
                <input 
                onChange={(e) => handleInput(e)}
                value={form.firstname}
                type='text' id='firstname' className='p-1 border border-sky-400 text-slate-900 outline-none'/>
                <label htmlFor='lastname' className='p-1'>Nom de famille</label>
                <input 
                onChange={(e) => handleInput(e)}
                value={form.lastname}
                type='text' id='lastname' className='p-1 border border-sky-400 text-slate-900 outline-none'/>
                <label htmlFor='email' className='p-1'>E-mail</label>
                <input 
                onChange={(e) => handleInput(e)}
                value={form.email}
                type='email' id='email' className='p-1 border border-sky-400 text-slate-900 outline-none'/>
                <button 
                onClick={(e) => e.preventDefault(verifSubmit())}
                type='button' className='transition-all duration-200 mt-2 p-2 text-white font-medium bg-emerald-600 hover:bg-emerald-500'>Valider</button>
            </form>
            }
    </div>
  )
}
