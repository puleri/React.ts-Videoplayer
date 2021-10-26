import React, { useState } from 'react'

const AddToList = () => {
  const [input, setInput] = useState({
    name: "",
    age: "",
    note: "",
    img: ""
  })

  // here we are using the built in strong types for input and textarea
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value
    })
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
    </div>
  )
}
export default AddToList
