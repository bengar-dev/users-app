import React, {useState, useContext} from 'react'
import { UserContext } from '../context/UserContext'

export default function ModalEditUser(props) {

  const {handleEdit} = useContext(UserContext) // notre state qui va récupérer la liste de nos utilisateurs

  const [form, setForm] = useState({
    id: props.id,
    firstname: props.firstname,
    lastname: props.lastname,
    email: props.email
  })

  const handleInputs = (e) => {
    if(e.target.id === 'firstname') {
      setForm({
        ...form,
        firstname: e.target.value
      })
    } else if(e.target.id === 'lastname') {
      setForm({
        ...form,
        lastname: e.target.value
      })
    } else if(e.target.id === 'email') {
      setForm({
        ...form,
        email: e.target.value
      })
    }
  }

  const handleEditUser = () => {
    handleEdit(form)
    setForm({
      firstname: '',
      lastname: '',
      email: ''
    })
    props.toggle()
  }

  return (
    <div id='edit-modal' className='absolute z-20 top-0 left-0 w-full min-h-screen bg-zinc-900 flex flex-col items-center justify-center'>        
        <button 
        onClick={(e) => e.preventDefault(props.toggle())}
        className='absolute top-5 right-5 text-rose-400 text-4xl'>X</button>
        <h1 className='text-2xl font-medium text-sky-300'>Editer </h1>
        <form className='flex flex-col'>
          <label htmlFor='firstname'>Prénom</label>
          <input 
          value={form.firstname}
          onChange={(e) => handleInputs(e)}
          type='text' id='firstname' className='mb-2 text-slate-900 p-2 outline-none'/>
          <label htmlFor='lastname'>Nom de famille</label>
          <input 
          value={form.lastname}
          onChange={(e) => handleInputs(e)}
          type='text' id='lastname'  className='mb-2 text-slate-900 p-2 outline-none'/>
          <label htmlFor='email'>E-mail</label>
          <input 
          value={form.email}
          onChange={(e) => handleInputs(e)}
          type='email' id='email'  className='mb-2 text-slate-900 p-2 outline-none'/>
          <button 
          onClick={(e) => e.preventDefault(handleEditUser())}
          className='transition-all duration-200 mt-2 p-2 text-white font-medium bg-emerald-600 hover:bg-emerald-500'>Editer</button>
        </form>

    </div>
  )
}
