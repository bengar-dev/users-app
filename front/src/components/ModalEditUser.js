import React, {useState, useContext, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../context/UserContext'

export default function ModalEditUser(props) {

  const navigate = useNavigate()

  const {usersList, handleEdit} = useContext(UserContext) // notre state qui va récupérer la liste de nos utilisateurs

  const [form, setForm] = useState({
    id: props.id,
    firstname: '',
    lastname: '',
    email: ''
  })

  useEffect(() => { // on recherche notre utilisateur avec l'id et on mets à jour le state formulaire

    let findUser = usersList.find(p => p.id === props.id)
    setForm(findUser)

  },[])

  const handleInputs = (e) => {
    if(e.target.id === 'firstname-edit') {
      setForm({
        ...form,
        firstname: e.target.value
      })
    } else if(e.target.id === 'lastname-edit') {
      setForm({
        ...form,
        lastname: e.target.value
      })
    } else if(e.target.id === 'email-edit') {
      setForm({
        ...form,
        email: e.target.value
      })
    }
  }

  const handleEditUser = () => { // function de gestion d'édition utilisateur
    handleEdit(form) // on appelle notre fonction éditer
    setForm({ // on mets à jour notre state formulaire en le vidant
      firstname: '',
      lastname: '',
      email: ''
    })
    navigate('/') // on retourne sur la page home
  }

  return (
    <div id='edit-modal' className='absolute z-20 top-0 left-0 w-full min-h-screen bg-zinc-900 flex flex-col items-center justify-center'>        
        <button 
        onClick={(e) => e.preventDefault(navigate('/'))}
        className='absolute top-5 right-5 text-rose-400 text-4xl'>X</button>
        <h1 className='text-2xl font-medium text-sky-300'>Editer {form.firstname}</h1>
        <form className='flex flex-col'>
          <label htmlFor='firstname-edit'>Prénom</label>
          <input 
          value={form.firstname}
          onChange={(e) => handleInputs(e)}
          type='text' id='firstname-edit' className='mb-2 text-slate-900 p-2 outline-none'/>
          <label htmlFor='lastname-edit'>Nom de famille</label>
          <input 
          value={form.lastname}
          onChange={(e) => handleInputs(e)}
          type='text' id='lastname-edit'  className='mb-2 text-slate-900 p-2 outline-none'/>
          <label htmlFor='email-edit'>E-mail</label>
          <input 
          value={form.email}
          onChange={(e) => handleInputs(e)}
          type='email' id='email-edit'  className='mb-2 text-slate-900 p-2 outline-none'/>
          <button 
          onClick={(e) => e.preventDefault(handleEditUser())}
          className='transition-all duration-200 mt-2 p-2 text-white font-medium bg-emerald-600 hover:bg-emerald-500'>Editer</button>
        </form>

    </div>
  )
}
