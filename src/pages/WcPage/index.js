import {useState, useEffect} from 'react'
import { Navigate } from 'react-router-dom';

import '../../style/wcPage/index.css'

function WcPage(){
  
  const [shouldNavigate, setShouldNavigate] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShouldNavigate(true);
    }, 4000); // tempo em milissegundos

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return(
    <div className="main-content">
      <div className='red-bg'>
        <h1 id='h1-wc'>Bem vindo ao <br/>Repository Movie Room</h1>  
        <h3 id='h3-wc'>Um momento, estamos te redirecionando para página principal...</h3>
      </div>
      {shouldNavigate && <Navigate to='/home' />}
    </div>
  )
}

export default WcPage;