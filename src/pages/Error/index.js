import './style.css'
import {Link} from 'react-router-dom'

function Error(){
  //Criação página de erro, apenas utilizando a propriedade Link do react-router-dom
  return(
    <div className="err-container">
      <div className='err'>
        <h1>Erro 404</h1>
        <img src = {require('../../img/err-img.png')} alt='Popcorn error'/>
      </div>
      <h2>Ops...Página não encontrada</h2>
      <br/>
      <Link to={'/home'}>Todos os filmes disponíveis!</Link>
    </div>
  )
}

export default Error;