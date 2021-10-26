import "./App.css"
import axios from "axios"
import { Input } from "./Components/Input"
import { Notes } from "./Components/Notes"
import { useState, useEffect } from "react"
function App() {
  const [list, setList] = useState([])
  const [trigger, setTrigger] = useState(false)
  useEffect(() => {
    axios
      .get("https://notes-app-server1007.herokuapp.com/notes")
      .then(({ data }) => {
        data = data.sort((a, b) => {
          return (
            Number(a.date.split("-").join("")) -
            Number(b.date.split("-").join(""))
          )
        })
        console.log("data:", data)

        setList(data)
      })
      .catch((err) => {
        console.log("err:", err)
      })
  }, [trigger])

  const handleTrigger = () => {
    setTrigger(!trigger)
  }
  return (
    <div className="App">
      <Input handleTrigger={handleTrigger} />
      <div>
        <h2>Your Notes</h2>
        {list.map((elem) => {
          return <Notes key={elem.id} {...elem} handleTrigger={handleTrigger} />
        })}
      </div>
    </div>
  )
}

export default App
