import React, { useEffect, useState }from 'react';
import PageDefault from '../../../components/PageDefault';
import { Link, useHistory } from 'react-router-dom';
import useForm from '../../../../src/hooks/useForm';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import videosRepository from '../../../repositories/videos'
import categoriasRepository from '../../../repositories/categorias'

function CadastroVideo() {

    const history = useHistory();
    const [categorias, setCategorias] = useState([]);
    const categoryTitles = categorias.map(({ titulo }) => titulo);
    const { handleChance, values } = useForm({
        titulo: '',
        url: '',
        categoria: 'Front End'

    });


    useEffect(() => {
        categoriasRepository
            .getAll()
            .then((categoriasFromServer) => {
                setCategorias(categoriasFromServer);
            });
        
    }, []);

    //console.log(categorias);
    //console.log(categoryTitles);

    return (
        <PageDefault>
            <h1>Cadastro de vídeos</h1>

            <form onSubmit={(event) => {
                event.preventDefault() ;
                //alert('Video Cadastrado com Sucesso');


                const categoriaEscolhida = categorias.find((categoria) => {
                   return categoria.titulo === values.categoria;
                });

                console.log('categoriaEscolhida', categoriaEscolhida);

               videosRepository.create({
                   titulo: values.titulo,
                   url: values.url,
                   categoriaId: categoriaEscolhida.id,
               })
                    .then(() => {
                        //console.log('pegou, Cadastrou com sucesso!');                    
                        history.push('/');
                    });

               
            }}
            >

                <FormField
                    label="Título do Vídeo" 
                   // type="text"
                    name="titulo" 
                    value={values.titulo}
                    onChange={handleChance}
                />

                
                <FormField
                    label="URL" 
                    //type="text"
                    name="url" 
                    value={values.url}
                    onChange={handleChance}
                />

                
                <FormField
                    label="Categoria" 
                    //type="text"
                    name="categoria" 
                    value={values.categoria}
                    onChange={handleChance}
                    suggestions={categoryTitles}

                />

                <Button type="submit">
                    Cadastrar
                </Button>


            </form>

            <Link to="/cadastro/categoria">
                Cadastrar Categoria.
            </Link>
        </PageDefault>
    )
}

export default CadastroVideo;


/* Aqui era <div> ao invés de <PageDefault>
function CadastroVideo() {
    return (
        <PageDefault>
            Página de Cadastro de vídeos.
        </PageDefault>
    )
}
*/