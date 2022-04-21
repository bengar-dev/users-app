import React from 'react'

import Header from "../components/Header";
import AddUser from "../components/AddUser";
import UsersList from "../components/UsersList";

export default function Home() {
  return (
    <>
        <Header />
        <AddUser />
        <UsersList />
    </>
  )
}
