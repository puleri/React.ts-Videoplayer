import React from 'react'
import { IState as IProps } from './ToDo'


// in order to pass and recieve the prop of people, we need the same
 // interface in this component & this is one way we can recieve them
const List: React.FC<IProps> = ({ people }) => {

  // adding : JSX.Element[]  tells us what we want to return
  const renderList = (): JSX.Element[] => {
     return people.map(person => {
        return (
          <div>
            <h2>{person.name}</h2>
            <img src={person.url} />
            <p>{person.age} years old</p>
            <p>{person.note}</p>
          </div>
        )
      })
    }

  return (
    <>
    <h1>List</h1>
    <ul>
      {renderList()}
    </ul>
    </>
  )
}

export default List
