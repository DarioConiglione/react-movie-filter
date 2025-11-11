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
    utilizzare useState per cambiare una lista in base alla selezione
    creare una lista che mostra i film

    
    
    */}






    </>
  )
}

export default App
