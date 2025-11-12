import { useState, useEffect } from 'react'
import './App.css'

const movies = [
  { title: 'Inception', genre: 'Fantascienza' },
  { title: 'Il Padrino', genre: 'Thriller' },
  { title: 'Titanic', genre: 'Romantico' },
  { title: 'Batman', genre: 'Azione' },
  { title: 'Interstellar', genre: 'Fantascienza' },
  { title: 'Pulp Fiction', genre: 'Thriller' },
]

function App() {

  const [selectedGenre, setSelectedGenre] = useState("");
  const [filteredMovies, setFilteredMovies] = useState(movies);




  return (
    <>

      {/*
    creare un campo select dove inserire i generi nelle option
    utilizzare useState per gestire il genere selezionato
    utilizzare useeffect per cambiare una lista in base alla selezione
    creare una lista che mostra i film
    */}

      <h1>LISTA DI FILM</h1>

      <select name="" id="">
        <option value="">Tutti</option>

        {
          movies.map((genre) => (
            <option value={genre}>{movies.genre}</option>
          ))
        }


      </select>

      <ul>
        {
          movies.map((title) => (
            <li>{filteredMovies.title}</li>
          ))
        }
      </ul>






    </>
  )
}

export default App
