import React, { useState } from 'react'
import { IState as Props } from "./ToDo"

// strongly typed props
interface IProps {
  people: Props["people"]
  setPeople: React.Dispatch<React.SetStateAction<Props["people"]>>
}

// typing functional component with props interface
const AddToList: React.FC<IProps> = ({ people, setPeople }) => {
  const [input, setInput] = useState({
    name: "",
    age: "",
    note: "",
    img: ""
  })

  // here we are using the built in strong types for input and textarea and the pipe means "or"
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    setInput({
      ...input,
      [e.target.name]: e.target.value
    })
  }

  const handleClick = ():void => {
    if (
      !input.name ||
      !input.age ||
      !input.img
    ) {
      return
    }
    setPeople([
      ...people,
      {
        name: input.name,
        age: parseInt(input.age),
        url: input.img,
        note: input.note
      }
    ])
    
  }

  return (
    <div>
    Add to List
    <input
      type="text"
      placeholder="name"
      value={input.name}
      onChange={handleChange}
      name="name"
    />
    <input
      type="text"
      placeholder="age"
      value={input.age}
      onChange={handleChange}
      name="age"
    />
    <input
      type="text"
      placeholder="url"
      value={input.img}
      onChange={handleChange}
      name="img"

    />
    <textarea
      placeholder="notes"
      value={input.note}
      name="note"
      onChange={handleChange}

    />
    <button
      onClick={handleClick}
    >
      Add to list
    </button>
    </div>
  )
}
export default AddToList
