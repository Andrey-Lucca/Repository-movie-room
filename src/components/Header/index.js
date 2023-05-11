import {Link} from 'react-router-dom'
import './style.css'
//Nesse import está toda a estilização do header
function Header(){
  //Usamos o Link do react-router-dom para nos levar a algum lugar quando clicarmos, no caso a imagem leva para home, e a outra para favoritos atraves caminho estabelecido nas rotas
  return(
    <header>
      <Link to={'/home'}><img src = {require('../../img/RMR.png')} alt= "Logo RMR" id='logo'/></Link>
      <Link to={'/favorite'} id='fav'>Filmes Favoritos</Link>
    </header>
  )
}
export default Header;