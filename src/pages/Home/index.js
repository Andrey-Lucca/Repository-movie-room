import { useEffect, useState } from 'react';
import '../../style/Home/style.css'
import api from '../../services/api';
import {Link} from 'react-router-dom'

function Home(){
  const [movies, setMovies] = useState([]);

  useEffect(()=>{
    //função para carregar os filmes
    async function loadMovie(){
      //Pegando a resposta da nossa api que salvamos em outro arquivo e mostrando apenas a parte que queremos, que no caso são filmes em cartazes
      const response = await api.get("movie/now_playing",{
        //Como parametros passamos a chave da api, a linguagem e a página da requisição
        params:{
          api_key:"9e10f3160f991706b420ee38ad281d56",
          language: "pt-BR",
          page: 1,
        }
      })
      //Colocando na nossa variavel nossa resposta acesso a data onde fica conteudo, resultados e dando slice para exibir somente os 10 primeiros filmes em cartaz (principais)
      setMovies(response.data.results.slice(0,10));
    }

    loadMovie()

  },[])
  return(
    <div className='mv-container'>
      <h1>Filmes em cartaz</h1>
      <div className='mv-list'>
        {movies.map((movie) =>{
          return(
            <article key={movie.id}>
              <strong>{movie.title}</strong>
              <img src = {`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt={movie.title}/>
              <Link to = {`/movie/${movie.id}`}>Acessar mais detalhes</Link>
            </article>
          )
        })}
      </div>
    </div>
  )
}
export default Home;