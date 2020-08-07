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



import React from 'react';
import Menu from '../../../../components/Menu'
import dadosIniciais from '../../../../data/dados_iniciais.json';
import BannerMain from '../../../../components/BannerMain';
import Carousel from '../../../../components/Carousel';
import Footer from '../../../../components/Footer';

function Home() {
  return (
    <div style={{ background: "#141414" }}>
      <Menu />

      <BannerMain
        videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
        url={dadosIniciais.categorias[0].videos[0].url}
        videoDescription={"O que é Front-end? Trabalhando na área os termos HTML, CSS e JavaScript fazem parte da rotina das desenvolvedoras e desenvolvedores. Mas o que eles fazem, afinal? Descubra com a Vanessa!"}
      />

      <Carousel
        ignoreFirstVideo
        category={dadosIniciais.categorias[0]}
      />

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

      <Footer />
    </div>
  );
}

export default Home;