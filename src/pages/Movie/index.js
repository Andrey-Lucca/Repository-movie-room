import { useState, useEffect } from "react";
import api from "../../services/api";
import { useParams, useNavigate } from 'react-router-dom'
import '../../style/MvDetails/style.css'
import {toast} from 'react-toastify'

function Movie(){
  const { id } = useParams();
  //usando um id passado do react-router-dom com a propriedade useParams para podermos usar um definido em outras partes do projeto
  const [movie, setMovie] = useState({});
  const [loading, setLoading] = useState(true);
  //
  const navigate = useNavigate()
  //usodo navigate para fazermos navegação páginas

  useEffect(()=>{
    //useeffect para carregar a função e ler o filme
    async function loadMovie(){
      //Requisição api + / filme especifico/id do filme passado estipulado nas rotas através do react-router-dom
      await api.get(`/movie/${id}`,{
        params:{
          api_key:"9e10f3160f991706b420ee38ad281d56",
          language: "pt-BR",
        }
      })
      .then((response)=>{
        //Caso de certo ele armazenará os detalhes do filme na variavel e irá parar de carregar
        setMovie(response.data);
        setLoading(false);
      }).catch(() =>{
        setTimeout(() => { 
            navigate('/home', {replace: true});
            return;
        }, 200);
      })
    }

    loadMovie();

    return () =>{
      console.log('desmontado')
    }
  },[navigate, id])

  function saveMovie(){
    const mylist = localStorage.getItem('@RMR');
    //pegando itens do local storage
    let movieSaves = JSON.parse(mylist) || [];

    const hasMovie= movieSaves.some((movieSaves) => movieSaves.id === movie.id);
    //se tiver algum filme com o id passado igual ao id em questão, ele aparecerá a mensagem que já possui essa filme na lista
    if(hasMovie){
      toast.warn('Esse filme já está na sua lista')
      return;
    }

    movieSaves.push(movie);
    //Salvar o filme na lista de filme salvo e armazenará no nosso localstorage
    localStorage.setItem("@RMR", JSON.stringify(movieSaves))
    toast.success('Filme salvo com sucesso')
  }

  if(loading){
    return(
      <div className="mv-details">
        <h1>Carregando detalhes...</h1>
      </div>
    )
  }
  
  return(
    <div className="mv-details">
      <h1>{movie.title}</h1>
      <img src= {`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} alt={movie.title}/>
      <h3>Sinopse do filme:</h3>
      <span>{movie.overview}</span>
      <strong>Avaliação: {movie.vote_average.toFixed(1)} / 10</strong>
      <div className="buttons">
        <button onClick={saveMovie}>Salvar</button>
        <button>
          <a href= {`https://www.youtube.com/results?search_query=${movie.title} trailer`} target="blank" rel="external">
            Trailer
          </a>
        </button>
      </div>
    
    </div>
  )
}
export default Movie;