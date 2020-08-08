import React, { useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button'

function CadastroCategoria() {

    const valoresIniciais = {
        nome: '',
        descricao: '',
        cor: '',
    }
    const [categorias, setCategorias] = useState([]);
    //const [nomeDaCategoria, setNomeDaCategoria] = useState(valoresIniciais); < eram esses nomes, mudaram p os abaixo
    const [values, setValues] = useState(valoresIniciais);



    function setValue(chave, valor){
        setValues({
            ...values,
            [chave]: valor, //nome: 'valor'
        })
    }

    function handleChance(infosDoEvento) {
        //setNomeDaCategoria(infosDoEvento.target.value);
        //setValue('nome', infosDoEvento.target.value);
        /*const { getAttribute, value } = infosDoEvento.target;
        setValue(
            getAttribute('name'),
            value
        );*/

        setValue(
            infosDoEvento.target.getAttribute('name'),
            infosDoEvento.target.value
        );
    }

    useEffect(() => {
        console.log('alo, olá');

        const URL_TOP = window.location.hostname.includes('localhost')
        ? 'http://localhost:8080/categorias'
        : 'https://flix-me-up.herokuapp.com/categorias';
        //'http://localhost:8080/categorias';

        fetch(URL_TOP)
            .then(async(respostaDoServidor) => {
                const resposta = await respostaDoServidor.json();
                setCategorias([
                    ...resposta,
                ]);
            });

        // setTimeout(() => {
        //     setCategorias([
        //         ...categorias,
        //         {
        //             id: 1,
        //             nome: 'Front End',
        //             descricao: 'Uma categoria qquer show',
        //             cor: '#1ffcbd',
        //         },
        //         {
        //             id: 2,
        //             nome: 'Back End',
        //             descricao: 'Outra categoria',
        //             cor: '#1ffcbd',
        //         },
                
        //     ])
            
        // }, 4 * 1000);
    }, []);

  return (
    <PageDefault>
      <h1>Cadastro de Categoria: {values.nome}</h1>

      <form onSubmit={function handleSubmit(infosDoEvento) {
          infosDoEvento.preventDefault();
          setCategorias([
            ...categorias,
            values
          ]);

          setValues(valoresIniciais)
      }}>

        <FormField
            label="Nome da Categoria" 
            type="text"
            name="nome" 
            value={values.nome}
            onChange={handleChance}
        />

        <FormField
            label="Descrição" 
            type="textarea"
            name="descricao" 
            value={values.descricao}
            onChange={handleChance}
        />

        {/*<div>
            <label>
                Descrição: 
                <textarea
                    type="text"
                    value={values.descricao}
                    name="descricao"
                    onChange={handleChance}
                />
            </label>
        </div>*/}

        <FormField
            label="Cor"
            type="color"
            name="cor" 
            value={values.cor}
            onChange={handleChance}
        />

        {/*<div>
            <label>
                Cor: 
                <input
                    type="color"
                    value={values.cor}
                    name="cor"
                    onChange={handleChance}
                />
            </label>
        </div>*/}

        <Button>
          Cadastrar
        </Button>
      </form>

        {categorias.length === 0 && (
            <div>
                Loadin....!
            </div>          
        )}  

      <ul>
          {categorias.map((categoria, indice) => {
              return (
                  <li key={`${categoria}${indice}`}>
                      {categoria.nome}
                  </li>
              )
          })}
      </ul>


      <Link to="/">
        Ir para home
      </Link>
    </PageDefault>
  )
}

export default CadastroCategoria;