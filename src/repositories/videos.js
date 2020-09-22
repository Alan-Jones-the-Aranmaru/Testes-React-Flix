import config from '../config';

const URL_VIDEOS = `${config.URL_BACKEND_TOP}/videos`;

function create(objetoDoVideo) {
    //console.log(config.URL_BACKEND_TOP);
    //fetch(URL_TOP)
    return fetch(`${URL_VIDEOS}?_embed=videos`, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(objetoDoVideo),
    })
            .then(async(respostaDoServidor) => {
                if (respostaDoServidor.ok) {
                    const resposta = await respostaDoServidor.json();
              //  setCategorias([
              //      ...resposta,
              //  ]);
                    return resposta;
                }

                throw new Error('Não foi possível cadastrar os dados :(');
            });

    //return config.URL_BACKEND_TOP;
}

export default {
    create,
};