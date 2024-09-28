import { useState } from 'react'

function User(props) {

  return (
    <>
      <h3>Nome: {props.name} </h3>
      <h3>Email: {props.email} </h3>
    </>
  )
}

export default User
