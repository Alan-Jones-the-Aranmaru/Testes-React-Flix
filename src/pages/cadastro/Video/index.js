import React from 'react';
import PageDefault from '../../../components/PageDefault';
import { Link } from 'react-router-dom';

function CadastroVideo() {
    return (
        <PageDefault>
            <h1>Cadastro de vídeos</h1>

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