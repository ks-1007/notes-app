import { useState } from "react"
import axios from "axios"
import styles from "./components.module.css"
export function Edit({
  title,
  description,
  date,
  id,
  handleTrigger,
  handleEdit,
}) {
  let initState = {
    title: title,
    date: date,
    description: description,
  }
  const [formData, setFormData] = useState(initState)
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }
  const handleSave = () => {
    axios
      .put(`https://notes-app-server1007.herokuapp.com/notes/${id}`, formData)
      .then((res) => {
        console.log("res:", res)
        handleTrigger()
        handleEdit()
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
      className={styles.editForm}
    >
      <label htmlFor="">Change title: </label>
      <input
        type="text"
        name="title"
        id=""
        placeholder="Enter title"
        onChange={handleChange}
      />
      <br />
      <label htmlFor="">Change description: </label>
      <input
        type="text"
        name="description"
        id=""
        placeholder="Enter description"
        onChange={handleChange}
      />
      <br />
      <label htmlFor="">Change date: </label>
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
