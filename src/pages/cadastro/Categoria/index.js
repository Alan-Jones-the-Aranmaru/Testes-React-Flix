import React, { useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button'
import useForm from '../../../hooks/useForm';




function CadastroCategoria() {

    const valoresIniciais = {
        nome: '',
        descricao: '',
        cor: '',
    }

    const {handleChance, values, clearForm} = useForm(valoresIniciais);

    const [categorias, setCategorias] = useState([]);
    //const [nomeDaCategoria, setNomeDaCategoria] = useState(valoresIniciais); < eram esses nomes, mudaram p os abaixo
    





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

    /*
    Isso aqui tinha entre a linha 155 e a 159
     {categorias.map((categoria, indice) => {
              return (
                  <li key={`${categoria}${indice}`}>
                      {categoria.nome}
                  </li>
              )
          })}
    */


  return (
    <PageDefault>
      <h1>Cadastro de Categoria: {values.nome}</h1>

      <form onSubmit={function handleSubmit(infosDoEvento) {
          infosDoEvento.preventDefault();
          setCategorias([
            ...categorias,
            values
          ]);

          clearForm();
          //setValues(valoresIniciais)
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
         

         {categorias.map((categoria) => (
            <li key={`${categoria.titulo}`}>
                {categoria.titulo}
            </li>
         ))}
          
          
          

      </ul>


      <Link to="/">
        Ir para home
      </Link>
    </PageDefault>
  )
}

export default CadastroCategoria;