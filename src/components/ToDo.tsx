import React, { useState } from 'react';
import AddToList from './AddToList';
import List from './List'

// this interface is a strongly typed way of setting  a state like
// const [people, setPeople] = useState([{
  //  name: "",
  //  age: undefined,
  //  url: "etc..."
  // }])
export interface IState {
  people: {
    // defining state
    name: string
    age: number
    url: string
    // ? makes it optional
    note?: string
    // [] makes this an array of objects
  }[]
}

export default function ToDo() {


  const [people, setPeople] = useState<IState["people"]>([
    {
      name: "Sam Artioli",
      age: 40,
      url: "https://media-exp1.licdn.com/dms/image/C4E03AQECdTptdgL_nw/profile-displayphoto-shrink_800_800/0/1517684537013?e=1640822400&v=beta&t=13EtjoDARy1rLHjM0ugvGXkF4mL2Ykf7yg_Ng6fdMrY",
      note: "Father, Coder, Musician"
    }
  ])

  return (
    <>
      <h1>People</h1>
      <br />
      <List people={people}/>
      <AddToList people={people} setPeople={setPeople}/>
    </>
  )
}
