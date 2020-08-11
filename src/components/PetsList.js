import React from 'react'
// 1- We need the Pet component

export default function PetsList(props) {
  const { pets } = props

  return (
    <div className='list-pets-friends container'>
      {/* 2- Loop over the data generating a Pet element as you go */}
      {/* What props does the Pet component expect? */}
      {
        pets.map(pet => {
          return <div key={pet.id}>{pet.name} is a {pet.type}</div>
        })
      }
    </div>
  )
}
