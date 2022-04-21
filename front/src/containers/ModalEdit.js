import React from 'react'
import { useParams } from 'react-router-dom'

import ModalEditUser from '../components/ModalEditUser'

export default function ModalEdit() {

  const params = useParams()

  return (
    <ModalEditUser 
    id={params.id}
    />
  )
}
