import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

//import * as serviceWorker from './serviceWorker';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/cadastro/Video/Home';
import CadastroVideo from './pages/cadastro/Video';
import CadastroCategoria from './pages/cadastro/Categoria';

//function CadastroVideo() {
//  return (
//    <div>
//      Página de Cadastro de vídeos.
//    </div>
//  )
//}


//A página 404 q é a de achado nada, pode ser direta dentro d euma arrow function,-
  //-mas vou usar o jeito mais certinho, q é o do const
const Pagina404 = () => (<div>Página 404, a ionternet não é redonda</div>);
//acima tbm, sei lá pq, foi dito q é o desafio master-blaster

ReactDOM.render(
  //<React.StrictMode>
  //  <App />
  //</React.StrictMode>,


  //Lembrar que a ordem dentro do switch faz diferença,
  <BrowserRouter>
    <Switch>
      
      <Route path="/" component={Home} exact/>
      <Route path="/cadastro/video" component={CadastroVideo} />
      <Route path="/cadastro/categoria" component={CadastroCategoria} />
      <Route component={Pagina404} />


    </Switch>  
  </BrowserRouter>,

  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();
