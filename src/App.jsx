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

  useEffect(() => {

    if (selectedGenre === "") {
      setFilteredMovies(movies);
    } else {
      setFilteredMovies(
        movies.filter((movie) => movie.genre === selectedGenre)
      );
    }
  }, [selectedGenre]);




  return (
    <>


      <h1>LISTA DI FILM</h1>

      <select value={selectedGenre} onChange={(e) => setSelectedGenre(e.target.value)}>
        <option value="">Tutti i generi</option>
        <option value="Fantascienza">Fantascienza</option>
        <option value="Thriller">Thriller</option>
        <option value="Romantico">Romantico</option>
        <option value="Azione">Azione</option>
      </select>

      <ul>

        {
          filteredMovies.map((movie, index) => (
            <li key={index}>{movie.title}</li>
          ))
        }
      </ul>

    </>
  )
}

export default App
