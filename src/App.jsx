import { useState } from 'react'
import './App.css'
import { CharacterCard } from "./characterCard/CharacterCard"

export const App = () => {
  const [character, setCharacter] = useState("")
  const [data, setData] = useState([])
  const [searched, setSearched] = useState(false)

  const fetchData = async () => {
    try {
      const response = await fetch(`https://rickandmortyapi.com/api/character/?name=${character}`)
      const result = await response.json()

      setData(result.results)
      setSearched(true)
    } catch (error) {
      console.log(error)
      setSearched(true)
    }
  }

  const handlerOnChange = (e) => {
    setCharacter(e.target.value)
  }

  const handlerSubmit = (e) => {
    e.preventDefault()
    fetchData()
  }

  return (
    <>
      <h1>Rick And Morty</h1>
      <div className='container'>
        <form onSubmit={handlerSubmit}>
          <input
            type="text"
            value={character}
            onChange={handlerOnChange}
          />
          <button type='submit'>Search</button>
        </form>
        <div className='character-list'>
          {searched && data && data.length > 0 ? (
            data.map((item) => (
              <CharacterCard
                key={item.id}
                name={item.name}
                img={item.image}
                gender={item.gender}
                status={item.status}
                species={item.species}
              />
            ))
          ) : searched ? (
            <p>no characters found</p>
          ) : null}
        </div>
      </div>
    </>
  )
}
