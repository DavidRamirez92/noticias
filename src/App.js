import React, {useState, useEffect} from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import ListadoNoticias from './components/ListadoNoticias';

function App() {
  //definir la categoria y noticias
  const[categoria,guardarCategoria] = useState('');
  const[noticias,guardarNoticias] = useState([]);
  useEffect(() => {
    const consultarAPI = async() => {

      const url = `https://newsapi.org/v2/top-headlines?country=ar&category=${categoria}&apiKey=28d85f1399534347870262b836539af1`

      const respuesta = await fetch(url);
      const noticias = await respuesta.json();
      guardarNoticias(noticias.articles);
    }
    consultarAPI();
  },[categoria])

  return (
    <>
      <Header
        titulo="Buscador de Noticias"
      />
      <div className="container white">
        <Formulario
          guardarCategoria={guardarCategoria}
        />

        <ListadoNoticias
          noticias = {noticias}
        />
      </div>
    </>
  );
}

export default App;
