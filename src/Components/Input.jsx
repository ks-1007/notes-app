import { useState } from "react"
import axios from "axios"

import styles from "./components.module.css"
export function Input({ handleTrigger }) {
  const [formData, setFormData] = useState({})
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }
  const handleSave = (e) => {
    axios
      .post("https://notes-app-server1007.herokuapp.com/notes", formData)
      .then((res) => {
        console.log("res:", res)
        handleTrigger()
      })
      .catch((err) => {
        console.log("err:", err)
      })
  }

  return (
    <form
      action=""
      onSubmit={(e) => {
        e.preventDefault()
      }}
      className={styles.formCont}
    >
      <h2>Enter notes here</h2>
      <label htmlFor="">Title: </label>
      <input
        type="text"
        name="title"
        id=""
        placeholder="Enter title"
        onChange={handleChange}
      />
      <br />
      <label htmlFor="">Description: </label>
      <input
        type="text"
        name="description"
        id=""
        placeholder="Enter description"
        onChange={handleChange}
      />
      <br />
      <label htmlFor="">Date: </label>
      <input
        type="date"
        name="date"
        id=""
        placeholder="Enter date"
        onChange={handleChange}
      />
      <br />
      <input type="submit" name="" id="" value="Save" onClick={handleSave} />
    </form>
  )
}
