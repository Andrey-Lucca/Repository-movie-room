import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {toast} from 'react-toastify'
import '../../style/Favoritos/style.css'

function Favorite(){
  
  const [movies, setMovies] = useState([]);
  //Cria variaveis para receber filmes favoritos
  
  useEffect(()=>{
    //UseEffect para que toda vez que a página seja acessada, ele pegue os itens salvos no localstorage
    const myList = localStorage.getItem('@RMR');
    setMovies(JSON.parse(myList) || []);
    //aqui ou está passando a lista de filmes ou array vazio caso não haja nada
  }, [])

  function deleteMovie(id){

    let filterMovie = movies.filter((movie)=>{
      return(movie.id!== id);//retorna todos filmes com id diferentes do que está sendo passado
    //Ou seja, apenas o filme com Id passado será deixado de fora
    })
    setMovies(filterMovie);
    localStorage.setItem('@RMR', JSON.stringify(filterMovie));
    //Salvando de novo os filmes, porém agora com o item excluido
    toast.success('Filme removido com sucesso');
    //Uso da biblioteca react-toastify para melhor estilização de aviso
  }

  return(
    <div className='fav-movies'>
      <h1>Meus filmes</h1>
      {movies.length === 0 && <span>Você não salvou nenhum filme ;( </span>
      //Basicamente se o tamanho da lista movies for zero, a mensagem que irá aparecer é essa no span
      }

      <uL>
        {movies.map((movie) =>{
          return(
            //Fazendo um map para renderizar na tela o que queremos
            <li key={movie.id}>
              <span>{movie.title}</span>

              <div>
                <Link to={`/movie/${movie.id}`}>
                  Ver detalhes
                </Link>
                <button onClick={() => deleteMovie(movie.id)}>Excluir</button>
              </div>
            </li>
          )
        })}
      </uL>
    </div>
  )
}
export default Favorite;