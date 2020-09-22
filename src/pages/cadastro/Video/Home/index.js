/*import React from 'react';
import Menu from './components/Menu';
import dadosIniciais from './data/dados_iniciais.json';
import BannerMain from './components/Carousel';
import Carousel from './components/Carousel'
import Footer from './components/Footer'

//import logo from './logo.svg';
//import './App.css';

function App() {
  return ( //Esse tipo de update que usamos no projeto, de salvar e já aparecer no site, é o "hot reload"(não é hot roll), q é automático,  JSX - Java Script Xml, ou seja o JSX é abreviação de js xml
    <div>
      <Menu /> 

      <BannerMain 
        videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
        url={dadosIniciais.categorias[0].videos[0].url}
        videoDescription={"Vídeo preferido"}
      />
      {dadosIniciais.categorias.map(tema=>
      <Carousel 
        category={tema}
        ignoreFirstVideo = {tema.videos.length>5}
      />)}
      <Footer />
      
    </div>
  );
}

export default App;*/


/*import React from 'react';

import Menu from './components/Menu';

import dadosIniciais from './data/dados_iniciais.json';

import BannerMain from './components/BannerMain';

import Carousel from './components/Carousel';

import Footer from './components/Footer';*/



import React, { useEffect, useState } from 'react';
//import Menu from '../../../../components/Menu'
//import dadosIniciais from '../../../../data/dados_iniciais.json';
import BannerMain from '../../../../components/BannerMain';
import Carousel from '../../../../components/Carousel';
import PageDefault from '../../../../components/PageDefault'
//import Footer from '../../../../components/Footer';
import categoriasRepository from '../../../../repositories/categorias';
//import PageDefault from '../../../../components/PageDefault';


function Home() {

  const [dadosIniciais, setDadosIniciais] = useState([])
    //categorias: [],
//});

  useEffect(() => {

    categoriasRepository.getAllWithVideos()
      .then((categoriasComVideos) => {
        console.log(categoriasComVideos);
        setDadosIniciais(categoriasComVideos);
        
        
      })
      .catch((err) => {
        console.log(err.message);
      });

    /*const URL_TOP = window.location.hostname.includes('localhost')
        ? 'http://localhost:8080/categorias'
        : 'https://flix-me-up.herokuapp.com/categorias';
        //'http://localhost:8080/categorias';*/

        //fetch(URL_TOP)
       // fetch(URL_BACKEND_TOP)
       //     .then(async(respostaDoServidor) => {
              //  const resposta = await respostaDoServidor.json();
              //  setCategorias([
              //      ...resposta,
              //  ]);
       //     });
  }, []);
  // http://localhost:8080/categorias?_embed=videos

  return (
    //<div style={{ background: "#141414" }}>
    <PageDefault paddingAll = {0}>
      {/* <Menu /> */}

      {dadosIniciais.length === 0 && (<div>Loadin....!</div>)}

      {dadosIniciais.map((categoria, indice) => {
        if (indice === 0) {
          return (
            <div key={categoria.id}>
              <BannerMain
              videoTitle={dadosIniciais[0].videos[0].titulo}
              url={dadosIniciais[0].videos[0].url}
              videoDescription="O que é front-end? Trabalhando na área os termos HTML, CSS e Java Script"
              />
              <Carousel
              ignoreFirstVideo
              category={dadosIniciais[0]}
              />
            </div>
          );
        }

        return (
          <Carousel
            key={categoria.id}
            category={categoria}
          />
        );
      })}


    </PageDefault>

  );
}

export default Home;

      /* {JSON.stringify(dadosIniciais)} */
      /*dadosIniciais*/
      /*{dadosIniciais.length >= 1 && (
      <>
        <BannerMain
          videoTitle={dadosIniciais[0].videos[0].titulo}
          url={dadosIniciais[0].videos[0].url}
          videoDescription={"O que é Front-end? Trabalhando na área os termos HTML, CSS e JavaScript fazem parte da rotina das desenvolvedoras e desenvolvedores. Mas o que eles fazem, afinal? Descubra com a Vanessa!"}
        />

        <Carousel
          ignoreFirstVideo
          category={dadosIniciais[0]}
        />
      </>
      )}
      <Carousel
        category={dadosIniciais.categorias[1]}
      />

      <Carousel
        category={dadosIniciais.categorias[2]}
      />      

      <Carousel
        category={dadosIniciais.categorias[3]}
      />      

      <Carousel
        category={dadosIniciais.categorias[4]}
      />      

      <Carousel
        category={dadosIniciais.categorias[5]}
      />       

      <Footer />*/
    