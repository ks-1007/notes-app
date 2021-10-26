import styled from "styled-components"
import axios from "axios"
import { Edit } from "./Edit"
import { useState } from "react"

export function Notes({ title, description, date, id, handleTrigger }) {
  const [showEdit, setShowEdit] = useState(false)
  const Note = styled.div`
    border: 2px solid black;
    border-radius: 5px;
    /* height: 200px; */
    width: 400px;
    margin: 5px auto;
    /* display: flex; */
    padding: 1%;
    div:nth-child(2) {
      display: ${(props) => (props.showEdit ? "block" : "none")};
      border: 2px solid black;
      padding: 1%;
      border-radius: 5px;
      margin: 5px;
    }
    background-color: indianred;
    button {
      height: 40px;
      width: 100px;
      color: white;
      font-size: 20px;
      border-radius: 5px;
      margin: 1%;
      background-color: maroon;
      border: none;
    }
  `
  const handleRemove = () => {
    axios
      .delete(`https://notes-app-server1007.herokuapp.com/notes/${id}`)
      .then((res) => {
        console.log("res:", res)
        handleTrigger()
      })
      .catch((err) => {
        console.log("err:", err)
      })
  }

  const handleEdit = () => {
    setShowEdit(!showEdit)
  }

  return (
    <Note showEdit={showEdit}>
      <div>
        <h2>{title}</h2>
        <h3>{date}</h3>
        <p>{description}</p>
        <button onClick={handleRemove}>remove</button>
        <button onClick={handleEdit}>edit</button>
      </div>
      <div>
        <h3>Edit here</h3>
        <Edit
          id={id}
          handleTrigger={handleTrigger}
          title={title}
          description={description}
          date={date}
          handleEdit={handleEdit}
        />
      </div>
    </Note>
  )
}
