import {BrowserRouter, Routes, Route} from 'react-router-dom';

import WcPage from './pages/WcPage';
import Home from './pages/Home';
import Favorite from './pages/Favoritos';
import Movie from './pages/Movie';
import Header from './components/Header';
import Error from './pages/Error';

//No nosso movie/:id é algum filme em específico que estamos querendo passar, aqui nessa parte fazemos todo o controle de rotas.
function RoutesApp(){
  return(
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path='/' element = {<WcPage/>}/>
        <Route path='/home' element = {<Home/>}/>
        <Route path='/movie/:id' element = {<Movie/>}/>
        <Route path='/favorite' element = {<Favorite/>}/>
        <Route path='*' element = {<Error/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default RoutesApp;